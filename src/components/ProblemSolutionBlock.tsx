import React from 'react';
import { AlertCircle, CheckCircle, Activity, Search, ShieldAlert, Cpu } from 'lucide-react';

interface ProblemSolutionBlockProps {
  onOpenQuoteModal: () => void;
}

export const ProblemSolutionBlock: React.FC<ProblemSolutionBlockProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="problem-solution" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            The Root-Cause Diagnosis
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Stop Buying Expensive Routers for Broken Physical Wiring
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <strong className="text-slate-900 font-semibold">
              Over 80% of slow speeds, Zoom dropouts, and intermittent NBN disconnections across Central Coast properties are caused by physical internal wiring defects—not your internet plan or Wi-Fi modem.
            </strong>{' '}
            When you call your retail provider, they run a remote test, claim the line looks fine, or tell you to buy a newer router. We take a fundamentally different, technician-first approach.
          </p>
        </div>

        {/* 2-Column Problem vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: The Central Coast Connectivity Problem */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wide mb-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Frustrating Local Cycle</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                What Goes Wrong Behind the Plasterboard
              </h3>

              <div className="space-y-3.5 text-sm text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <p>
                    <strong className="text-slate-900 font-semibold">Hidden Bridge Taps & Daisy-Chains:</strong> Older Central Coast homes frequently have obsolete phone extensions wired in parallel. These act as signal antennas, creating packet echoes that throttle FTTN and FTTC sync speeds.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <p>
                    <strong className="text-slate-900 font-semibold">Coastal Salt Air Corrosion:</strong> Sea air oxidises copper screw terminals in outdoor junction boxes, adding micro-resistance that drops line voltage during humid or stormy coastal weather.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <p>
                    <strong className="text-slate-900 font-semibold">Double-Brick & Thermal Foil Barriers:</strong> Dense coastal brick walls block Wi-Fi signals. Plug-in mesh repeaters placed in dead zones simply amplify an already degraded signal.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <p>
                    <strong className="text-slate-900 font-semibold">Unregulated DIY Cabling:</strong> Pinched data lines and substandard connectors cause continuous packet loss, gaming jitter, and video conference dropouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-rose-700 bg-rose-50/70 p-3 rounded-xl">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
              <span>Result: Paying for high-tier 100Mbps or 250Mbps plans while experiencing frustrating 25Mbps speeds.</span>
            </div>
          </div>

          {/* Right Column: The Root-Cause Diagnostic Solution */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-blue-900/60">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wide mb-3">
                <CheckCircle className="w-4 h-4 shrink-0 text-sky-400" />
                <span>The Root-Cause Diagnostic Solution</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Physical Line Analysis & Permanent Fixes
              </h3>

              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p>
                    <strong className="text-white font-semibold">Calibrated TDR Line Testing:</strong> We connect specialized Time-Domain Reflectometry instruments directly to your lead-in to locate faults, bridge taps, and capacitance loss down to the exact metre.
                  </p>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p>
                    <strong className="text-white font-semibold">Direct Single-Run Lead-In:</strong> We isolate and disconnect redundant phone loops, running a direct, interference-free Cat6 feed straight to your primary NBN modem socket.
                  </p>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p>
                    <strong className="text-white font-semibold">Hardwired Ethernet Access Points:</strong> We install ceiling access points connected by Cat6 gigabit backhaul, delivering full-speed Wi-Fi throughout multi-storey and double-brick homes.
                  </p>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p>
                    <strong className="text-white font-semibold">Weatherproof Marine-Grade Terminations:</strong> All external junctions are sealed with gel-filled Scotchloks and coastal-grade enclosures immune to salt spray and moisture.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-sky-300">
                <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
                <span>No hardware markups · Honest root-cause diagnostics</span>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
              >
                Book Diagnostic Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
