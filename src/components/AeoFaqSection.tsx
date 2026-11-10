import React, { useState } from 'react';
import { AEO_FAQS, CONTACT_DETAILS } from '../data/websiteContent';
import { ChevronDown, HelpCircle, Bot, Sparkles, Check } from 'lucide-react';

export const AeoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Answer Engine Optimised (AEO) FAQs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Frequently Asked Central Coast Cabling Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <strong className="text-slate-900 font-semibold">
              Direct, authoritative answers to common Central Coast NBN, Starlink, Wi-Fi mesh, Cat6 data cabling, CCTV, and strata MDF questions.
            </strong>{' '}
            Structured for direct extraction by Google AI Overviews, Perplexity, and local homeowners.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {AEO_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500 bg-slate-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
                      {faq.topic}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 border-t border-slate-100/80">
                    {/* Strict Direct Answer Structure: Bolded 1-sentence direct answer + 2 sentences of local detail */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-900 font-bold border-b border-slate-100 pb-2.5">
                        {faq.directAnswer}
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                        {faq.detailSentences}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Australian Standard AS/CA S009 Compliant
                      </span>
                      <a
                        href={CONTACT_DETAILS.phoneTel}
                        className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2"
                      >
                        Ask a technician ({CONTACT_DETAILS.phone})
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom AEO Help Note */}
        <div className="mt-10 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Bot className="w-4 h-4 text-slate-400" />
          <span>
            Every answer is verified against Australian telecommunications standard AS/CA S009:2020.
          </span>
        </div>
      </div>
    </section>
  );
};
