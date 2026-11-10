import React from 'react';
import { WHY_CHOOSE_PILLARS } from '../data/websiteContent';
import { ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

interface WhyChooseChecklistProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseChecklist: React.FC<WhyChooseChecklistProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            The Central Coast Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Why Choose Central Coast Internet Solutions?
          </h2>
          {/* AEO Direct-Answer Hook */}
          <p className="mt-3 text-base text-slate-300 leading-relaxed font-normal">
            <strong className="text-white font-semibold">
              Central Coast Internet Solutions is chosen for our 28 continuous years of hands-on telecommunications experience, unrestricted Austel & ACMA Open Cabler registration, and our strict 'Honest Advice, No Upselling' policy.
            </strong>{' '}
            We diagnose real root-cause connectivity faults using professional test meters and install coastal-grade Australian components that withstand salt air and rugged hinterland conditions.
          </p>
        </div>

        {/* 5 Trust Pillars Checklist */}
        <div className="space-y-4 sm:space-y-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group p-6 sm:p-7 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-sky-500/80 hover:bg-slate-800 transition-all duration-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number & Subtitle */}
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono tracking-tight shrink-0">
                    {pillar.number}.
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wide">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description Body */}
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Local Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-800 to-blue-900/60 border border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                Austel & ACMA Registered Open Cabler · $20M Insured · Long Jetty Home Base
              </p>
              <p className="text-xs text-slate-300">
                All structured data cabling, telecommunications, and optical fibre work certified to AS/CA S009 & AS/CA S008 standards.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Speak With The Lead Technician</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
