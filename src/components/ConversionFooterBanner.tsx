import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Mail, MapPin, CheckCircle2, Code2 } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/websiteContent';

interface ConversionFooterBannerProps {
  onOpenQuoteModal: () => void;
  onOpenSeoDrawer: () => void;
}

export const ConversionFooterBanner: React.FC<ConversionFooterBannerProps> = ({
  onOpenQuoteModal,
  onOpenSeoDrawer,
}) => {
  return (
    <div>
      {/* 8. Final Conversion Footer Banner ("Ready to get connected?") */}
      <section className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-200 bg-blue-900/40 px-3.5 py-1 rounded-full border border-blue-400/30 mb-4">
            Direct Technician Response · No Call Centres
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto text-balance">
            Ready to get connected?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Whether your NBN has been dropping out for months, you need a permanent Starlink roof bracket installed on your Colorbond roof, or you want zero-lag Cat6 points in your home office—we are ready to help.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_DETAILS.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-lg shadow-amber-500/25 transition-all"
            >
              <Phone className="w-5 h-5 text-slate-900" />
              <span>Call Technician Direct: {CONTACT_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl border border-slate-700 shadow-md transition-all"
            >
              <span>Request Free Quote Online</span>
              <ArrowRight className="w-5 h-5 text-sky-400" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Honest root-cause diagnosis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Zero equipment upselling
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> ACMA Licensed & Insured
            </span>
          </div>
        </div>
      </section>

      {/* Primary Site Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Brand & Credentials */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="text-xl font-bold tracking-tight text-white block">
                Central Coast <span className="text-sky-400">Internet Solutions</span>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Specialised telecommunications cabling, NBN fault diagnostics, Starlink satellite roof mounting, whole-home Wi-Fi mesh systems, and commercial network infrastructure across the Central Coast, NSW.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Austel & ACMA Open Cabler Registration (Unrestricted)</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>$20M Public Liability Insurance · AS/CA S009 Certified</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Based in Long Jetty, NSW 2261 · Full Central Coast Coverage</span>
                </p>
              </div>
            </div>

            {/* Col 2: Services Quick Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Services
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    NBN Faults & Bridge Taps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    Starlink Roof Mounts
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    Whole-Home Wi-Fi Mesh
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    Cat6 Data Cabling & Racks
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    4K IP CCTV & Antennas
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-400 transition-colors">
                    MDF Strata & Lead-Ins
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Service Hubs */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Service Hubs
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#coverage" className="text-sky-300 font-semibold hover:text-white transition-colors flex items-center gap-1">
                    <span>★ Long Jetty (Home Base)</span>
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    The Entrance & Bateau Bay
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    Gosford & West Gosford
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    Erina & Terrigal
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    Woy Woy & Peninsula
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    Wyong & Tuggerah
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    The Entrance & Bateau Bay
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-sky-400 transition-colors">
                    Somersby & Kulnura Acreage
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Direct Call */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Direct Contact
              </p>
              <div className="space-y-3 text-xs">
                <a
                  href={CONTACT_DETAILS.phoneTel}
                  className="flex items-center gap-2 text-white hover:text-sky-400 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{CONTACT_DETAILS.phone}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{CONTACT_DETAILS.email}</span>
                </a>
                <p className="text-slate-300 text-xs leading-relaxed">
                  <span className="text-slate-400 block font-medium">Trading Hours:</span>
                  {CONTACT_DETAILS.hoursWeekday}<br />
                  {CONTACT_DETAILS.hoursWeekend}
                </p>
                <button
                  onClick={onOpenSeoDrawer}
                  className="pt-2 flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 underline underline-offset-2"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>View Full SEO / AEO Manifest</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Central Coast Internet Solutions. All rights reserved. Domain: centralcoastinternetsolutions.au
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Australian English (AU)</span>
              <span>·</span>
              <span>ACMA Certified AS/CA S009</span>
              <span>·</span>
              <span>Austel & ACMA Certified Open Cabler</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
