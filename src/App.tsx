import React, { useState } from 'react';
import { SeoMetadataBanner } from './components/SeoMetadataBanner';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { CoreServicesGrid } from './components/CoreServicesGrid';
import { ProblemSolutionBlock } from './components/ProblemSolutionBlock';
import { WhyChooseChecklist } from './components/WhyChooseChecklist';
import { SuburbCoverageSection } from './components/SuburbCoverageSection';
import { AeoFaqSection } from './components/AeoFaqSection';
import { ConversionFooterBanner } from './components/ConversionFooterBanner';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SeoMetadataDrawer } from './components/SeoMetadataDrawer';
import { ServiceItem } from './data/websiteContent';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [seoDrawerOpen, setSeoDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quotePrefillService, setQuotePrefillService] = useState<string | undefined>(undefined);
  const [quotePrefillSuburb, setQuotePrefillSuburb] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string, suburbName?: string) => {
    setQuotePrefillService(serviceName);
    setQuotePrefillSuburb(suburbName);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* 1. SEO & AEO Metadata (Section 1 Banner: Title, Description, Keywords) */}
      <SeoMetadataBanner />

      {/* 2. Top Bar & Hero Section (Above the Fold) */}
      <TopBar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Above the Fold) */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
        />

        {/* 3. 6-Card Core Services Grid */}
        <CoreServicesGrid
          onSelectService={handleSelectService}
          onOpenQuoteModal={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        {/* 4. Problem-to-Solution Intro Block */}
        <ProblemSolutionBlock
          onOpenQuoteModal={() => handleOpenQuoteModal('NBN Fault Repairs & Optimisation')}
        />

        {/* 5. "Why Choose Central Coast Internet Solutions?" Checklist (5 trust pillars) */}
        <WhyChooseChecklist
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 6. Central Coast Suburb Coverage Section (South, Central, North, Hinterland) */}
        <SuburbCoverageSection
          onOpenQuoteModal={(service, suburb) => handleOpenQuoteModal(service, suburb)}
        />

        {/* 7. AEO-Optimised Central Coast FAQ (6 Questions with bolded 1-sentence answers) */}
        <AeoFaqSection />

        {/* 8. Final Conversion Footer Banner ("Ready to get connected?") */}
        <ConversionFooterBanner
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
        />
      </main>

      {/* Interactive Modals and Drawers */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={quotePrefillService}
        defaultSuburb={quotePrefillSuburb}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
      />

      <SeoMetadataDrawer
        isOpen={seoDrawerOpen}
        onClose={() => setSeoDrawerOpen(false)}
      />
    </div>
  );
}
