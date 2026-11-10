import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, FileText, Globe, Code2 } from 'lucide-react';
import { SEO_METADATA } from '../data/websiteContent';

interface SeoMetadataDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoMetadataDrawer: React.FC<SeoMetadataDrawerProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const metaTagsCode = `<!-- Ready-To-Publish SEO & OpenGraph Meta Tags -->
<title>${SEO_METADATA.metaTitle}</title>
<meta name="description" content="${SEO_METADATA.metaDescription}" />
<link rel="canonical" href="https://${SEO_METADATA.domain}/" />
<meta property="og:title" content="${SEO_METADATA.metaTitle}" />
<meta property="og:description" content="${SEO_METADATA.metaDescription}" />
<meta property="og:url" content="https://${SEO_METADATA.domain}/" />
<meta property="og:site_name" content="Central Coast Internet Solutions" />
<meta property="og:locale" content="en_AU" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="geo.region" content="AU-NSW" />
<meta name="geo.placename" content="Long Jetty, Central Coast NSW" />
<meta name="geo.position" content="-33.3542;151.4831" />
<meta name="ICBM" content="-33.3542, 151.4831" />`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl h-full bg-slate-900 text-white border-l border-slate-800 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="font-bold text-base text-white">
                SEO & AEO Production Dossier
              </h3>
              <p className="text-xs text-slate-400">
                Ready-to-publish meta tags, keyword hierarchy & AEO answers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Section 1: Meta Title */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200 uppercase tracking-wide text-xs">
                Meta Title
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono">
                {SEO_METADATA.metaTitleCharCount} chars (Under 60 max)
              </span>
            </div>
            <p className="font-mono text-sky-300 text-xs sm:text-sm bg-slate-950 p-2.5 rounded-lg border border-slate-800 break-words">
              {SEO_METADATA.metaTitle}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => copyToClipboard(SEO_METADATA.metaTitle, 'title')}
                className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300"
              >
                {copiedKey === 'title' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Title</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 2: Meta Description */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200 uppercase tracking-wide text-xs">
                Meta Description
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono">
                {SEO_METADATA.metaDescriptionCharCount} chars (Under 155 max)
              </span>
            </div>
            <p className="font-mono text-slate-200 text-xs sm:text-sm bg-slate-950 p-2.5 rounded-lg border border-slate-800 leading-relaxed">
              {SEO_METADATA.metaDescription}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => copyToClipboard(SEO_METADATA.metaDescription, 'desc')}
                className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300"
              >
                {copiedKey === 'desc' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Description</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 3: Target Local Keywords */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <span className="font-bold text-slate-200 uppercase tracking-wide text-xs block">
              Target Local Keywords & Search Intent
            </span>

            {/* Primary keywords */}
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-sky-400">Primary Core Keywords:</p>
              <div className="flex flex-wrap gap-1.5">
                {SEO_METADATA.targetKeywords.primary.map((kw) => (
                  <span
                    key={kw}
                    className="text-[11px] px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-200"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary keywords */}
            <div className="space-y-1 pt-1">
              <p className="text-[11px] font-semibold text-amber-300">
                Secondary & Long-Tail Fault Keywords:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SEO_METADATA.targetKeywords.secondary.map((kw) => (
                  <span
                    key={kw}
                    className="text-[11px] px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Suburbs */}
            <div className="space-y-1 pt-1">
              <p className="text-[11px] font-semibold text-emerald-300">
                Target Suburb Footprint:
              </p>
              <div className="flex flex-wrap gap-1">
                {SEO_METADATA.targetKeywords.localSuburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/50 text-blue-200"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: AEO Extraction Architecture */}
          <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-900 space-y-2 text-xs">
            <span className="font-bold text-sky-300 uppercase tracking-wide block">
              Answer Engine Optimisation (AEO) Strategy
            </span>
            <p className="text-slate-300 leading-relaxed">
              Every major heading, service card, and FAQ on this website initiates with a bolded 1-sentence direct answer. This structure matches the exact ingestion criteria used by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Google AI Overviews & Local Service snippets</li>
              <li>Perplexity AI direct local provider recommendations</li>
              <li>ChatGPT web browse citation anchors</li>
            </ul>
          </div>

          {/* Section 5: Full Meta Tags Code Block */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Raw HTML Tags</span>
              <button
                onClick={() => copyToClipboard(metaTagsCode, 'tags')}
                className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1"
              >
                {copiedKey === 'tags' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy All Tags</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              {metaTagsCode}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
