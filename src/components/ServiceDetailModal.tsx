import React from 'react';
import { X, Check, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem, CONTACT_DETAILS } from '../data/websiteContent';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
              {service.tag}
            </span>
            <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {service.image && (
            <div className="rounded-xl overflow-hidden h-48 w-full bg-slate-100 border border-slate-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Core Benefit */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
              Guaranteed Outcome:
            </p>
            <p className="text-sm sm:text-base font-semibold text-blue-800">
              {service.shortBenefit}
            </p>
          </div>

          {/* Full Technical Overview */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
              Technical Scope & Diagnostic Approach
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
              Included Installation & Diagnostic Steps
            </h4>
            <ul className="space-y-2">
              {service.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Client Context */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-800">Ideal For:</span> {service.bestFor}
          </div>

          {/* ACMA Standards Assurance */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Complies with AS/CA S009:2020 Installation Rules & ACMA Registration</span>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={CONTACT_DETAILS.phoneTel}
            className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center justify-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Ask Technician ({CONTACT_DETAILS.phone})</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <span>Request Free Quote for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
