import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description: "Browse before and after photos from Edross Dental. See real patient smile transformations.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{ background: "var(--color-primary)" }}
      >
        <div className="container-custom text-center">
          <p className="text-[--color-on-primary-subtle] font-semibold uppercase tracking-widest text-sm mb-4">Before & After</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--color-on-primary] mb-6 leading-tight"
          >
            Smile Gallery
          </h1>
          <p className="text-[--color-on-primary-muted] text-lg max-w-2xl mx-auto">
            Real patient transformations. See the difference expert dental care can make.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-py bg-[--color-surface]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Transformations"
            title="Real Results From Real Patients"
            description="All photos are shared with patient consent and represent actual Edross Dental results."
            align="center"
            className="mb-12"
          />

          {/* Category filter labels */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="list" aria-label="Gallery categories">
            {galleryCategories.map((cat) => (
              <span
                key={cat.id}
                role="listitem"
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white border border-[--color-border] text-[--color-text-muted] cursor-default"
              >
                {cat.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-(--shadow-sm) hover:shadow-(--shadow-lg) transition-all duration-300"
                aria-label={`${item.treatment} before and after`}
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={item.beforeImage}
                      alt={`Before photo – ${item.treatment}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 bg-black/50 text-[--color-on-primary] text-xs font-bold px-2.5 py-1 rounded-full">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.afterImage}
                      alt={`After photo – ${item.treatment}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 bg-[--color-accent] text-[--color-text] text-xs font-bold px-2.5 py-1 rounded-full">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-[--color-text] mb-1">{item.treatment}</h2>
                  <p className="text-sm text-[--color-text-muted]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
