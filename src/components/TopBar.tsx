import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Menu, X, Code2 } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/websiteContent';

interface TopBarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenSeoDrawer: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenQuoteModal, onOpenSeoDrawer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-sm transition-all">
      {/* Top Banner Tag Strip */}
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700 py-1.5 px-4 text-center text-xs font-semibold tracking-wide text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-blue-100 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Austel ACMA Licensed Cabler 28yrs · $20M Insured</span>
          </div>
          <p className="mx-auto sm:mx-0 font-medium">
            #1 Cabling, NBN & Starlink Experts • Based in Long Jetty, Servicing All Central Coast NSW
          </p>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenSeoDrawer}
              className="text-xs text-sky-100 hover:text-white flex items-center gap-1 transition-colors underline underline-offset-2"
              title="Inspect SEO & AEO Metadata"
            >
              <Code2 className="w-3 h-3" />
              <span>SEO/AEO Dossier</span>
            </button>
            <span className="text-blue-200">·</span>
            <a href={CONTACT_DETAILS.phoneTel} className="text-white hover:text-amber-200 font-bold transition-colors">
              Call Direct: {CONTACT_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-sky-300 transition-colors"
        >
          Central Coast <span className="text-sky-400">Internet Solutions</span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#problem-solution" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Diagnostics
          </a>
          <a href="#why-choose" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Why Choose Us
          </a>
          <a href="#coverage" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Suburb Coverage
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            AEO FAQs
          </a>
        </nav>

        {/* Zone 3: Primary Action & Phone CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={CONTACT_DETAILS.phoneTel}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>{CONTACT_DETAILS.phone}</span>
          </a>
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg shadow-sm shadow-blue-500/20 transition-all whitespace-nowrap shrink-0"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400 transition-colors"
            >
              Services (NBN, Starlink, Wi-Fi, CCTV)
            </a>
            <a
              href="#problem-solution"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400 transition-colors"
            >
              Diagnostic Expertise
            </a>
            <a
              href="#why-choose"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400 transition-colors"
            >
              Why Choose Central Coast Internet
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400 transition-colors"
            >
              Central Coast Suburb Coverage
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400 transition-colors"
            >
              AEO Local FAQs
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoDrawer();
              }}
              className="py-1 text-left text-sky-400 flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4" />
              <span>View SEO & AEO Metadata Dossier</span>
            </button>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={CONTACT_DETAILS.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-100 bg-slate-800 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Technician: {CONTACT_DETAILS.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="py-2.5 px-4 text-sm font-bold text-white bg-blue-600 rounded-lg text-center"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
