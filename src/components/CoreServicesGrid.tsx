import React from 'react';
import { CORE_SERVICES, ServiceItem } from '../data/websiteContent';
import { Zap, Satellite, Wifi, Server, ShieldCheck, Layers, ArrowRight, Check } from 'lucide-react';

interface CoreServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceTitle: string) => void;
}

export const CoreServicesGrid: React.FC<CoreServicesGridProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Satellite':
        return <Satellite className="w-5 h-5 text-sky-500" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-emerald-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-500" />;
      default:
        return <Zap className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Complete Telecommunications Scope
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Specialised Cabling, Satellite & Network Services
          </h2>
          {/* AEO Direct-Answer Hook */}
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">
              Central Coast Internet Solutions provides six core telecommunications services: NBN line repairs, custom Starlink roof mounts, multi-room Wi-Fi mesh systems, Cat6/6A structured data cabling, 4K IP CCTV installations, and strata MDF jumpering.
            </strong>{' '}
            Every job is executed by an ACMA Open Registered Cabler using calibrated digital diagnostic instruments and Australian-standard materials.
          </p>
        </div>

        {/* 6-Card Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service, index) => {
            const hasCustomImage = Boolean(service.image);

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 overflow-hidden"
              >
                {/* Visual Header if image available */}
                {hasCustomImage && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {service.tag}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Icon + Service Tag */}
                    {!hasCustomImage && (
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                          {getIcon(service.iconName)}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          {service.tag}
                        </span>
                      </div>
                    )}

                    {hasCustomImage && (
                      <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-medium">
                        {getIcon(service.iconName)}
                        <span>Service #{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    )}

                    {/* Punchy Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* 1-Line Benefit (Strict Requirement) */}
                    <p className="mt-2 text-sm font-semibold text-blue-700 leading-snug">
                      {service.shortBenefit}
                    </p>

                    {/* Brief Descriptive Context */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Quick 2 Feature highlights */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                      {service.keyFeatures.slice(0, 2).map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <span>Full Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="px-3 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
