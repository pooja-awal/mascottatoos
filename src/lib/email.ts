// Shared between the client form and the /api/validate-email route so both
// sides agree on what "shaped like a valid email" means.

// Reserved/placeholder TLDs that show up in gibberish or throwaway addresses.
const BLOCKED_TLDS = new Set(["test", "example", "invalid", "localhost"]);

const EMAIL_SHAPE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+)$/;

/** Structural check only — does NOT confirm the domain actually exists. */
export function isValidEmailShape(raw: string): boolean {
  const value = raw.trim();
  const match = EMAIL_SHAPE.exec(value);
  if (!match) return false;

  const domain = match[1];
  const tld = domain.split(".").pop() ?? "";
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;
  if (BLOCKED_TLDS.has(tld.toLowerCase())) return false;

  return true;
}

export function emailDomain(raw: string): string {
  return raw.trim().split("@")[1] ?? "";
}
