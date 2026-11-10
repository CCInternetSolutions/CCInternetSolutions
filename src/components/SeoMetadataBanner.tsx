import React, { useState } from 'react';
import { Sparkles, Copy, Check, ChevronDown, ChevronUp, Globe, FileCode } from 'lucide-react';
import { SEO_METADATA } from '../data/websiteContent';

export const SeoMetadataBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyText = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Toggle Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="p-0.5 rounded bg-blue-600/30 text-sky-400 border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-300">
                SEO & AEO Production Specs
              </span>
              <span className="hidden md:inline-block text-slate-400">·</span>
              <span className="hidden md:inline-block text-slate-400 text-[11px]">
                Targeting #1 Local Central Coast Rankings
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-lg border border-slate-700 transition-colors"
            >
              <span>{isExpanded ? 'Hide Details' : 'View Meta Specs'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Expandable Metadata Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
            {/* Meta Title */}
            <div className="lg:col-span-5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sky-300 text-[11px] uppercase tracking-wide">
                    Meta Title
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-mono">
                    {SEO_METADATA.metaTitleCharCount} chars (Under 60 chars)
                  </span>
                </div>
                <p className="font-mono text-slate-100 text-xs leading-snug">
                  {SEO_METADATA.metaTitle}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex justify-end">
                <button
                  onClick={() => copyText(SEO_METADATA.metaTitle, 'title')}
                  className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {copiedField === 'title' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Title</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Meta Description */}
            <div className="lg:col-span-7 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sky-300 text-[11px] uppercase tracking-wide">
                    Meta Description
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-mono">
                    {SEO_METADATA.metaDescriptionCharCount} chars (Under 155 chars)
                  </span>
                </div>
                <p className="font-mono text-slate-200 text-xs leading-relaxed">
                  {SEO_METADATA.metaDescription}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex justify-end">
                <button
                  onClick={() => copyText(SEO_METADATA.metaDescription, 'desc')}
                  className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {copiedField === 'desc' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Description</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Target Local Keywords */}
            <div className="lg:col-span-12 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="font-bold text-sky-300 text-[11px] uppercase tracking-wide block">
                Target Local Keywords (Ranked by Intent)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SEO_METADATA.targetKeywords.primary.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-1 rounded-md bg-blue-950/90 border border-blue-700/60 text-sky-200 text-[11px] font-medium"
                  >
                    ★ {kw}
                  </span>
                ))}
                {SEO_METADATA.targetKeywords.secondary.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-[11px]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
