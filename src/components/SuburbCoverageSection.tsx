import React, { useState } from 'react';
import { SUBURB_REGIONS, CONTACT_DETAILS } from '../data/websiteContent';
import { MapPin, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface SuburbCoverageSectionProps {
  onOpenQuoteModal: (serviceName?: string, suburbName?: string) => void;
}

export const SuburbCoverageSection: React.FC<SuburbCoverageSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSuburb, setSelectedSuburb] = useState<string | null>(null);

  // Flatten all suburbs with their region for quick searching
  const allSuburbs = SUBURB_REGIONS.flatMap((region) =>
    region.suburbs.map((suburb) => ({
      name: suburb,
      regionName: region.name,
      description: region.description,
      terrain: region.typicalTerrain,
    }))
  );

  const filteredSuburbs = allSuburbs.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const activeSuburbData = allSuburbs.find((s) => s.name === selectedSuburb);

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Local Central Coast Service Radius
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Complete Suburb Coverage Across the Central Coast, NSW
          </h2>
          {/* AEO Direct-Answer Hook */}
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            <strong className="text-slate-900 font-semibold">
              Central Coast Internet Solutions is based in Long Jetty, NSW, providing priority rapid dispatch to neighbouring coastal suburbs (Long Jetty, The Entrance, Bateau Bay, Blue Bay, Toowoon Bay, Shelly Beach, and Killarney Vale), alongside complete service across all Central Coast hubs.
            </strong>{' '}
            From coastal double-brick beach homes dealing with sea-salt corrosion to rural acreage in Somersby and Kulnura needing Starlink tree clearance, our fully equipped service vehicle brings precision diagnostic equipment directly to your door.
          </p>
        </div>

        {/* Suburb Search & Instant Filter Bar */}
        <div className="mb-10 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search your Central Coast suburb (e.g. Terrigal, Erina, Woy Woy, Somersby)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap self-center"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Search Result Matches if searching */}
          {searchTerm && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 mb-2">
                Matching Central Coast Locations ({filteredSuburbs.length}):
              </p>
              {filteredSuburbs.length === 0 ? (
                <p className="text-xs text-slate-500 italic">
                  Don't see your specific street or locality? We service the entire Central Coast region—give us a call at{' '}
                  <a href={CONTACT_DETAILS.phoneTel} className="text-blue-600 font-bold underline">
                    {CONTACT_DETAILS.phone}
                  </a>
                  .
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {filteredSuburbs.map((suburb) => (
                    <button
                      key={suburb.name}
                      onClick={() => setSelectedSuburb(suburb.name)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        selectedSuburb === suburb.name
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      {suburb.name} ({suburb.regionName})
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Active Suburb Quick Diagnostic Card */}
          {activeSuburbData && (
            <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>
                    {activeSuburbData.name} · {activeSuburbData.regionName}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>Common Local Terrain:</strong> {activeSuburbData.terrain}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  <strong>Standard Turnaround:</strong> Same-week priority dispatch available.
                </p>
              </div>
              <button
                onClick={() => onOpenQuoteModal(undefined, activeSuburbData.name)}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Book for {activeSuburbData.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* 4 Region Hubs Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SUBURB_REGIONS.map((region) => {
            const isHomeBase = region.name.includes('Home Base');

            return (
              <div
                key={region.name}
                className={`rounded-2xl p-6 sm:p-7 shadow-sm transition-all flex flex-col justify-between ${
                  isHomeBase
                    ? 'bg-blue-50/50 border-2 border-blue-500/80 shadow-blue-500/5'
                    : 'bg-white border border-slate-200/90 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>{region.name}</span>
                    </div>
                    {isHomeBase && (
                      <span className="text-[11px] font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-full shadow-xs">
                        Home Base · Priority Dispatch
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {region.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {region.description}
                  </p>

                <div className="text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-700">Typical Local Terrain:</span>{' '}
                  {region.typicalTerrain}
                </div>

                {/* Clean, readable suburbs list */}
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    Key Suburbs Covered:
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-600">
                    {region.suburbs.map((suburb, sIdx) => {
                      const isSelected = selectedSuburb === suburb;
                      return (
                        <React.Fragment key={suburb}>
                          <button
                            onClick={() => setSelectedSuburb(suburb)}
                            className={`transition-colors text-left hover:text-blue-600 ${
                              isSelected
                                ? 'text-blue-700 font-bold bg-blue-100/80 px-2 py-0.5 rounded'
                                : 'hover:underline underline-offset-2'
                            }`}
                          >
                            {suburb}
                          </button>
                          {sIdx < region.suburbs.length - 1 && (
                            <span className="text-slate-300 select-none">·</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Fully mobile service vehicle
                </span>
                <button
                  onClick={() => onOpenQuoteModal(undefined, region.name)}
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  <span>Request Local Callout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
