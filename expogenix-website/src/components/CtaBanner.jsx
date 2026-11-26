import { ArrowRight } from "lucide-react";
import { SITE } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function CtaBanner() {
  return (
    <section className="pb-14 pt-2 sm:pb-16">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-citrus-500 via-citrus-400 to-apricot px-8 py-14 sm:px-14 sm:py-16">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-peach/50 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight !text-forest-800 sm:text-4xl lg:text-[2.75rem]">
                Ready to fill every stall at your next exhibition?
              </h2>
              <p className="mt-4 text-lg text-forest-800/90">
                Launch online stall booking, sponsorships and visitor tickets with {SITE.name}.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#contact" className="btn-dark">
                Get a demo <ArrowRight size={18} />
              </a>
              <a
                href={SITE.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="btn border border-forest-300/50 bg-white/80 text-forest-800 hover:bg-white focus-visible:ring-forest-600"
              >
                Explore exhibitions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
