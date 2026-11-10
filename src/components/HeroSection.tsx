import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/websiteContent';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenSeoDrawer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal, onOpenSeoDrawer }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Direct Answer Subhead, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Suburb Badge strip */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 rounded-md px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Based in Long Jetty · Priority Service for The Entrance, Bateau Bay, Gosford, Erina & Surrounds</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14] text-balance">
              Central Coast Internet and Data Cabling Experts
            </h1>

            {/* Clean, Visually Pleasing Lead Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
              Reliable, honest connectivity diagnostics backed by <strong className="text-white font-semibold">28 years of Austel & ACMA trade experience</strong>. Based right in Long Jetty for rapid priority callouts to nearby coastal homes, and prompt service across the entire Central Coast.
            </p>

            {/* CTA Buttons (2 Buttons required) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={CONTACT_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.99] rounded-lg shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call Local Technician ({CONTACT_DETAILS.phone})</span>
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] border border-blue-500 rounded-lg shadow-md transition-all text-center"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro proof line */}
            <div className="pt-1 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Same-week local booking
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Upfront transparent pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Australian standards
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Trust Card Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[440px]">
              <img
                src="/src/assets/images/hero_ccis_van_1794221744383.jpg"
                alt="CCIS Central Coast Internet Solutions service vehicle with prominent 0420 900 971 mobile number and network diagnostic tools in coastal Long Jetty NSW"
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container in case image fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              {/* Bottom Scrim overlay with technician credential badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <div className="space-y-0.5">
                    <p className="font-bold text-white text-sm">CCIS On-Site Service Vehicle & Mobile Lab</p>
                    <p className="text-slate-300">Direct Technician: 0420 900 971 · Long Jetty Home Base</p>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-600/90 text-white rounded font-semibold text-[11px] whitespace-nowrap">
                    ACMA Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Badges Strip (28 Years Experience, Austel ACMA Licensed Cabler 28yrs, Residential & Commercial, Honest Advice — No Upselling) */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Badge 1 */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-blue-900/60 text-sky-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">28 Years Experience</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Veteran telecommunications diagnostic mastery honed since the original AUSTEL licensing era.
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-sky-900/60 text-sky-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Austel / ACMA Licensed</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Unrestricted Open Cabler registration with structured data & fibre endorsements.
              </p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-indigo-900/60 text-indigo-300 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Residential & Commercial</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Beachfront double-brick homes, rural acreage, strata units, and industrial network racks.
              </p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-amber-900/60 text-amber-300 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Honest Advice — No Upselling</h3>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                We fix the actual root-cause cable fault rather than flogging expensive routers you do not need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
