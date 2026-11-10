import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { CORE_SERVICES, SUBURB_REGIONS, CONTACT_DETAILS } from '../data/websiteContent';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultSuburb?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultSuburb,
}) => {
  const [customerType, setCustomerType] = useState('Residential Homeowner');
  const [service, setService] = useState('');
  const [suburb, setSuburb] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    } else if (!service) {
      setService(CORE_SERVICES[0].title);
    }
    if (defaultSuburb) {
      setSuburb(defaultSuburb);
    }
  }, [defaultService, defaultSuburb, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  // Collect flat list of all suburbs
  const allSuburbs = Array.from(
    new Set(SUBURB_REGIONS.flatMap((r) => r.suburbs))
  ).sort();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Request a Free Diagnostic Quote</h3>
            <p className="text-xs text-sky-300">
              Based in Long Jetty · Priority response for neighbouring suburbs · Zero upselling
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Diagnostic Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name || 'Central Coast Local'}</strong>. Our lead technician will review your details for <strong>{suburb || 'your property'}</strong> and call you within 2 business hours at <strong>{phone || 'your phone number'}</strong> to discuss your {service.toLowerCase() || 'connection'}.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-600">
                <p>
                  <strong>Property Type:</strong> {customerType}
                </p>
                <p>
                  <strong>Required Service:</strong> {service}
                </p>
                <p>
                  <strong>Service Standard:</strong> ACMA Open Registered & Insured
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CONTACT_DETAILS.phoneTel}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now for Urgent Dispatch ({CONTACT_DETAILS.phone})</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-300"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Customer Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Property or Client Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Residential Homeowner',
                    'Rural / Acreage',
                    'Work From Home',
                    'Commercial / Strata',
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setCustomerType(type)}
                      className={`text-[11px] p-2 rounded-lg border text-center font-medium transition-all ${
                        customerType === type
                          ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {CORE_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Diagnostics & Cable Tidy">
                    General Diagnostics / Multiple Services
                  </option>
                </select>
              </div>

              {/* Central Coast Suburb */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Central Coast Suburb
                </label>
                <div className="relative">
                  <input
                    type="text"
                    list="suburb-options"
                    placeholder="Enter or select your suburb (e.g. Gosford, Terrigal, Woy Woy)..."
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                  <datalist id="suburb-options">
                    {allSuburbs.map((sub) => (
                      <option key={sub} value={sub} />
                    ))}
                  </datalist>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="font-semibold text-blue-700">Nearby priority:</span>
                  {['Long Jetty', 'The Entrance', 'Bateau Bay', 'Killarney Vale', 'Terrigal', 'Erina', 'Gosford'].map(
                    (quickSub) => (
                      <button
                        type="button"
                        key={quickSub}
                        onClick={() => setSuburb(quickSub)}
                        className={`px-1.5 py-0.5 rounded transition-colors ${
                          suburb === quickSub
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {quickSub}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Phone Number (Mobile)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0412 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. david@example.com.au"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Brief Description of the Issue / Goals
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. NBN drops out whenever it rains, or looking for Starlink install on our Colorbond roof with trees behind the house..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Diagnostic Quote Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust assurance */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> No spam · 100% privacy protected
                </span>
                <span className="text-slate-500 font-medium">Mon–Fri: 8am–6pm · Sat–Sun: 9am–5pm</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
