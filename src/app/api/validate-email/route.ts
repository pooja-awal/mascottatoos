import dns from "node:dns/promises";
import { NextResponse } from "next/server";
import { emailDomain, isValidEmailShape } from "@/lib/email";

export const runtime = "nodejs";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms),
    ),
  ]);
}

/** Does this domain actually exist / look able to receive mail? */
async function domainAcceptsMail(domain: string): Promise<boolean> {
  // MX records are the strongest signal, but some sandboxed/serverless
  // network setups can't reach a resolver directly for raw DNS queries —
  // in that case fall through to the A/AAAA check below rather than
  // rejecting every address.
  try {
    const mx = await withTimeout(dns.resolveMx(domain), 4000);
    if (mx.length > 0) return true;
  } catch {
    // fall through
  }

  // No MX (or the MX lookup wasn't reachable) — a domain can still legally
  // receive mail via its bare A/AAAA record (RFC 5321 §5.1). This also
  // doubles as our "does this domain even exist" check.
  try {
    await withTimeout(dns.lookup(domain), 4000);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { valid: false, reason: "Malformed request." },
      { status: 400 },
    );
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email ?? "")
      : "";

  if (!isValidEmailShape(email)) {
    return NextResponse.json({
      valid: false,
      reason: "Enter a valid email address.",
    });
  }

  const domain = emailDomain(email);

  try {
    const ok = await domainAcceptsMail(domain);
    if (!ok) {
      return NextResponse.json({
        valid: false,
        reason: "That email domain doesn't seem to exist — check for typos.",
      });
    }
    return NextResponse.json({ valid: true });
  } catch {
    // Our own check failed unexpectedly (not a domain-not-found result) —
    // don't block a legitimate user over our infrastructure hiccup.
    return NextResponse.json({ valid: true, unverified: true });
  }
}
