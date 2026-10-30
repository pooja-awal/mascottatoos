import SectionEyebrow from "@/components/section-eyebrow";

/**
 * Inner-page hero: 200px top offset (clears the fixed header), centered
 * eyebrow + 120px Anton title, then page content 48px below.
 */
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-background px-5 pt-[140px] pb-24 sm:px-[30px] lg:px-20 lg:pt-[200px]">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-display mt-6 text-[56px] leading-[1.1] tracking-[-0.02em] sm:text-[88px] lg:text-[120px] lg:leading-[132px]">
            {title}
          </h1>
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
