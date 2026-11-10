export interface ServiceItem {
  id: string;
  title: string;
  shortBenefit: string;
  fullDescription: string;
  keyFeatures: string[];
  bestFor: string;
  iconName: string;
  image?: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  directAnswer: string;
  detailSentences: string;
  topic: string;
}

export interface SuburbRegion {
  name: string;
  suburbs: string[];
  description: string;
  typicalTerrain: string;
}
export const CONTACT_DETAILS = {
  phone: "0420 900 971",
  phoneRaw: "0420900971",
  phoneTel: "tel:0420900971",
  email: "paulwccis@gmail.com",
  hoursWeekday: "Monday – Friday: 8:00am – 6:00pm",
  hoursWeekend: "Saturday & Sunday: 9:00am – 5:00pm",
};

export const SEO_METADATA = {
  metaTitle: "Central Coast Internet Solutions | NBN, Starlink & Cabling",
  metaTitleCharCount: 58,
  metaDescription:
    "Austel ACMA licensed cabler 28yrs based in Long Jetty. NBN fault repairs, Starlink roof mounts, Wi-Fi mesh, Cat6 data & TV antennas. Free quotes.",
  metaDescriptionCharCount: 146,
  domain: "centralcoastinternetsolutions.au",
  homeBase: "Long Jetty, NSW 2261",
  targetKeywords: {
    primary: [
      "Long Jetty NBN technician",
      "Central Coast NBN technician",
      "Austel ACMA licensed cabler Central Coast",
      "Starlink installation Central Coast",
      "data cabling Long Jetty The Entrance",
      "Wi-Fi technician Central Coast NSW",
    ],
    secondary: [
      "NBN bridge tap removal Long Jetty Bateau Bay",
      "Starlink roof mount installer Terrigal Woy Woy",
      "Cat6 ethernet data points home office",
      "commercial Wi-Fi mesh installation NSW",
      "digital TV antenna installation Central Coast",
      "strata MDF jumpering Gosford Tuggerah",
    ],
    localSuburbs: [
      "Long Jetty",
      "The Entrance",
      "Bateau Bay",
      "Toowoon Bay",
      "Blue Bay",
      "Shelly Beach",
      "Killarney Vale",
      "Gosford",
      "Erina",
      "Terrigal",
      "Woy Woy",
      "Wyong",
      "Tuggerah",
      "Umina Beach",
      "Somersby",
      "Kulnura",
      "Avoca Beach",
      "Kincumber",
    ],
  },
  authorityCredentials: {
    experience: "28 years of hands-on telecommunications and cabling experience",
    homeBase: "Based locally in Long Jetty, NSW (Priority service for neighbouring coastal suburbs)",
    licences: "Austel ACMA Licensed Cabler 28yrs (Unrestricted Open Cabler Registration)",
    insurance: "$20 Million Public Liability Insurance",
    promise: "Honest Advice, No Upselling — True Root-Cause Fault Diagnosis",
  },
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "nbn-repairs",
    title: "NBN Fault Repairs & Optimisation",
    shortBenefit: "Eliminate dropouts, remove obsolete bridge taps, and restore full sync speeds on FTTP, FTTN, FTTC & HFC.",
    fullDescription:
      "Struggling with unexplained connection drops, buffering during video calls, or sync speeds far below what you pay for? We use specialised telecommunications reflectometers and sync testers to pinpoint internal property faults that internet service providers routinely ignore.",
    keyFeatures: [
      "Bridge tap identification & physical copper line cleanup",
      "NBN modem & utility box (NTD) relocations to central locations",
      "Corroded master socket replacements with Australian-standard RJ45 jacks",
      "Internal copper isolation from street boundary to modem",
      "FTTP internal optical fibre extension & power supply tidying",
    ],
    bestFor: "Homes and offices experiencing slow NBN speeds, packet loss, or unexplainable line dropouts.",
    iconName: "Zap",
    tag: "NBN Diagnostics",
  },
  {
    id: "starlink-setup",
    title: "Starlink Satellite Installation & Mounts",
    shortBenefit: "Engineered Colorbond and tile roof mounts, high-mast brackets for tree clearance, and concealed cable runs.",
    fullDescription:
      "Get maximum satellite throughput and uninterrupted video calls with a permanent, weatherproof Starlink installation tailored for Central Coast coastal winds and rural tree canopies.",
    keyFeatures: [
      "Custom heavy-duty brackets for Colorbond tin, concrete, and terracotta tiles",
      "Extended mast mounts for acreage properties in Kulnura, Somersby & Jilliby",
      "Concealed UV-rated cable routing through roof cavities with watertight penetrations",
      "Ethernet adapter setup and third-party router / mesh network integration",
      "Zero-dropout obstruction testing using official Starlink azimuth tools",
    ],
    bestFor: "Acreage properties, rural blocks, and coastal homes seeking blazing-fast satellite internet.",
    iconName: "Satellite",
    image: "/src/assets/images/starlink_roof_mount_1794220187159.jpg",
    tag: "Starlink Certified Standards",
  },
  {
    id: "wifi-mesh",
    title: "Whole-Home & Commercial Wi-Fi Networks",
    shortBenefit: "Eradicate dead spots in double-brick coastal homes and beam fast wireless links to sheds and granny flats.",
    fullDescription:
      "Tired of weak Wi-Fi signals in back bedrooms, thick brick extensions, or outdoor patios? We design hardwired wireless networks that deliver seamless gigabit roaming across your entire property without signal degradation.",
    keyFeatures: [
      "Commercial ceiling-mounted access points with hardwired Cat6 backhaul",
      "Wireless point-to-point bridges to granny flats, studios, and detached workshops",
      "Seamless roaming protocols — move freely between rooms without dropped calls",
      "Dual-band and Wi-Fi 7 channel frequency tuning to avoid neighbour interference",
      "Guest network isolation and parental bandwidth controls",
    ],
    bestFor: "Multi-storey coastal residences, double-brick homes, acreage sheds, and busy retail venues.",
    iconName: "Wifi",
    tag: "Zero Dead Zones",
  },
  {
    id: "data-cabling",
    title: "Structured Data Cabling & Network Racks",
    shortBenefit: "Certified Cat6 and Cat6A data points, neat patch panels, and commercial rack fit-outs for zero-latency performance.",
    fullDescription:
      "Whether you need zero-lag connections for a dedicated work-from-home office, gaming console, smart TV, or an enterprise comms cabinet for an industrial warehouse, we run Australian-standard structured cabling that stands the test of time.",
    keyFeatures: [
      "Solid copper Cat6 & Cat6A data point installations with wall plate testing",
      "Comm rack assembly, patch panel dressing, and cable tidy-ups",
      "Smart TV, gaming, and AV equipment hardwiring to relieve wireless bandwidth",
      "Commercial warehouse & office fit-outs in Tuggerah, Erina, and West Gosford",
      "Full ACMA compliance documentation with TCA1 certification",
    ],
    bestFor: "Work-from-home professionals, commercial offices, gamers, and smart home AV racks.",
    iconName: "Server",
    image: "/src/assets/images/structured_data_cabling_1794220186673.jpg",
    tag: "ACMA Certified",
  },
  {
    id: "cctv-antennas",
    title: "Digital TV Antennas & Network Cabling",
    shortBenefit: "Crystal-clear digital TV reception, 4G/5G interference filters, and hardwired network cabling infrastructure.",
    fullDescription:
      "Get pixel-free digital TV reception across all Australian free-to-air channels and robust Cat6 cabling for smart displays and media servers. We install coastal-grade antennas, masthead amplifiers, and in-wall cabling engineered to withstand salty Central Coast winds.",
    keyFeatures: [
      "Digital TV antenna replacements, coastal-grade mast mounts, and high-gain boosters",
      "4G/5G mobile tower LTE signal suppression filters to eliminate channel pixelation",
      "Hardwired Cat6 network cabling points for smart TVs and streaming consoles",
      "Additional TV coaxial outlet points to bedrooms, outdoor entertaining areas, and granny flats",
      "Signal meter testing ensuring optimal decibel signal strength and zero bit-error rates",
    ],
    bestFor: "Homes experiencing pixelated TV channels, weak coastal reception, or requiring additional media points.",
    iconName: "ShieldCheck",
    tag: "Austel / ACMA Licensed",
  },
  {
    id: "mdf-underground",
    title: "MDF Jumpering & Underground Lead-Ins",
    shortBenefit: "Strata apartment MDF connections, civil underground conduit repairs, and lead-in cable replacement.",
    fullDescription:
      "When your internet provider confirms your service is active at the building street frame but leaves you with no dial tone or connection in your apartment, you need a licensed ACMA technician to complete the internal MDF jumper run.",
    keyFeatures: [
      "Strata & commercial building Main Distribution Frame (MDF) jumpering",
      "Locating and clearing broken underground telecommunications conduits",
      "Gel-filled moisture-resistant underground cable joints and lead-in repairs",
      "Tenant and body corporate liaison for smooth strata compliance",
      "TCA1 test certification verifying Australian telecommunications standards",
    ],
    bestFor: "Apartment residents, strata managers, commercial units, and properties with damaged driveway conduits.",
    iconName: "Layers",
    tag: "Strata & Civil Ready",
  },
];

export const WHY_CHOOSE_PILLARS = [
  {
    number: "01",
    title: "Decades of Hands-On Diagnostic Mastery",
    subtitle: "Austel-trained heritage with real carrier field diagnostic experience",
    description:
      "Our lead technician brings extensive frontline telecommunications cabling mastery directly to Central Coast properties. Having diagnosed thousands of complex copper, fibre, and network faults since the AUSTEL regulatory era, we solve the elusive connectivity problems other technicians simply walk away from.",
  },
  {
    number: "02",
    title: "Austel & ACMA Registered Open Cabler",
    subtitle: "Unrestricted Open Cabler registration with structured & optical fibre endorsements",
    description:
      "In Australia, telecommunications and premises cabling is strictly governed by law. Holding an original AUSTEL licence transitioned into modern ACMA Open Cabler registration guarantees that every cable, socket, and patch panel is 100% compliant with Australian Standards AS/CA S009 & AS/CA S008, backed by $20M public liability insurance.",
  },
  {
    number: "03",
    title: "Honest Advice, No Upselling — Guaranteed",
    subtitle: "We diagnose the root fault instead of flogging gear",
    description:
      "We will never sell you an expensive new Wi-Fi router or mesh kit if a simple corroded socket or bridge tap is strangling your connection at the wall. Our ethos is built on total transparency: we test the physical line first, explain the exact cause in plain English, and provide the most cost-effective fix.",
  },
  {
    number: "04",
    title: "Coastal & Rural-Grade Australian Components",
    subtitle: "Built to endure harsh salt air, humidity, and bushland weather",
    description:
      "The Central Coast climate is notoriously brutal on copper wiring and outdoor brackets. We exclusively utilise genuine Australian-standard solid copper cabling, gel-filled outdoor scotchlok connectors, stainless and powder-coated heavy-duty Starlink mounts, and weatherproof IP67 rated enclosures.",
  },
  {
    number: "05",
    title: "Based in Long Jetty — Priority Local Response Across the Coast",
    subtitle: "Living locally in Long Jetty for rapid neighbourhood callouts",
    description:
      "Because our lead technician lives right in Long Jetty, neighbouring residents in Long Jetty, The Entrance, Bateau Bay, Blue Bay, Toowoon Bay, Shelly Beach, and Killarney Vale enjoy priority local dispatch with zero excessive travel delays. We also provide prompt scheduled daily service from Woy Woy up to Wyong and the Hinterland.",
  },
];

export const SUBURB_REGIONS: SuburbRegion[] = [
  {
    name: "Long Jetty, The Entrance & Coastal Hub (Home Base)",
    suburbs: [
      "Long Jetty",
      "The Entrance",
      "Bateau Bay",
      "Toowoon Bay",
      "Blue Bay",
      "Shelly Beach",
      "Killarney Vale",
      "Berkeley Vale",
      "Tumbi Umbi",
      "Chittaway Bay",
    ],
    description:
      "Our local home base! Priority same-day and rapid dispatch for our coastal neighbours, holiday homes, beachfront residences, and local shops.",
    typicalTerrain: "Coastal sea-spray exposure, older copper lines, fibro-brick builds, and multi-room holiday Wi-Fi.",
  },
  {
    name: "Central Coast Central",
    suburbs: [
      "Gosford",
      "West Gosford",
      "East Gosford",
      "Point Clare",
      "Erina",
      "Terrigal",
      "Wamberal",
      "Forresters Beach",
      "Holgate",
      "Matcham",
    ],
    description:
      "Rapid on-site dispatch for beachfront multi-storey homes, commercial office suites, retail shops, and dense residential precincts.",
    typicalTerrain: "Coastal ridges, double-brick beach residences, and commercial commercial parks.",
  },
  {
    name: "Central Coast South & Peninsula",
    suburbs: [
      "Woy Woy",
      "Umina Beach",
      "Ettalong Beach",
      "Booker Bay",
      "Kariong",
      "Kincumber",
      "Avoca Beach",
      "Copacabana",
      "Davistown",
      "Saratoga",
    ],
    description:
      "Specialising in older copper infrastructure repairs, coastal corrosion remediation, and multi-room Wi-Fi penetrations across the Peninsula.",
    typicalTerrain: "Salty sea-air zones, classic fibro/brick cottages, and steep coastal hillside blocks.",
  },
  {
    name: "Central Coast North & Wyong Shire",
    suburbs: [
      "Wyong",
      "Tuggerah",
      "Lake Haven",
      "Gorokan",
      "Toukley",
      "Budgewoi",
      "San Remo",
      "Charmhaven",
      "Warnervale",
      "Woongarrah",
    ],
    description:
      "Complete coverage for growing residential estates, industrial logistics hubs around Tuggerah Business Park, and lakeside properties.",
    typicalTerrain: "Sprawling family estates, lakefront dwellings, and high-volume commercial distribution facilities.",
  },
  {
    name: "Central Coast Hinterland & Acreage",
    suburbs: [
      "Somersby",
      "Kulnura",
      "Mangrove Mountain",
      "Jilliby",
      "Ourimbah",
      "Lisarow",
      "Niagara Park",
      "Narara",
      "Dooralong",
      "Yarramalong",
    ],
    description:
      "Starlink high-mast brackets, gum tree clearance solutions, and wireless point-to-point links between main residences, stables, and sheds.",
    typicalTerrain: "Acreage properties, dense eucalyptus tree canopies, and metal-roofed agricultural workshops.",
  },
];

export const AEO_FAQS: FaqItem[] = [
  {
    id: "nbn-bridge-taps",
    topic: "NBN Repairs & Bridge Taps",
    question: "How do you fix slow FTTN, FTTC, and HFC NBN connections, and what is a bridge tap?",
    directAnswer:
      "We locate and physically disconnect obsolete internal telephone extensions known as bridge taps, which cause electrical signal reflections that can slash your NBN sync speeds by up to 60%.",
    detailSentences:
      "In older Central Coast homes, multiple defunct phone jacks act like open signal antennas that distort high-frequency VDSL frequencies between the street node and your modem. Using calibrated time-domain reflectometer (TDR) diagnostic instruments, we isolate the direct lead-in line and replace corroded terminals with modern Australian-standard RJ45 sockets, delivering instant stability and restored bandwidth.",
  },
  {
    id: "starlink-mounts",
    topic: "Starlink Installation",
    question: "What roof mounting options do you provide for Starlink on Colorbond tin, tile, and acreage properties?",
    directAnswer:
      "We install heavy-duty custom mounting brackets engineered specifically for Australian Colorbond tin, concrete tile, and terracotta tile roofs to guarantee zero leaks and complete wind stability.",
    detailSentences:
      "For hinterland properties in Somersby, Kulnura, and Jilliby where towering native eucalyptus gum trees block the northern sky, we fabricate high-mast extension poles to elevate the satellite dish well above the obstruction line. All cabling is routed internally through roof cavities using watertight UV-stabilised decktite seals, ensuring no unsightly wires draped over gutters.",
  },
  {
    id: "cat6-vs-wifi",
    topic: "Data Cabling vs. Wi-Fi",
    question: "Why should I install hardwired Cat6 data cabling when modern Wi-Fi routers claim gigabit speeds?",
    directAnswer:
      "Hardwired Cat6 cabling provides a dedicated, interference-free gigabit pipeline with sub-millisecond latency that wireless signals physically cannot match through Australian walls.",
    detailSentences:
      "Wi-Fi signals degrade rapidly when passing through coastal brickwork, foil insulation, and structural timber, resulting in sudden dropouts and jitter during video conferences, trading sessions, or competitive gaming. By hardwiring bandwidth-hungry hardware like desktop computers, 4K Smart TVs, and security recorders, you also relieve wireless congestion for your smartphones and tablets.",
  },
  {
    id: "wifi-dead-zones",
    topic: "Wi-Fi & Mesh Optimization",
    question: "How do you eliminate Wi-Fi dead zones in double-brick coastal homes and send internet to backyard sheds?",
    directAnswer:
      "We install commercial-grade ceiling access points linked by hardwired Cat6 ethernet backhaul, allowing wireless signals to originate directly inside previously shielded rooms without signal degradation.",
    detailSentences:
      "Unlike cheap wireless plug-in extenders that merely amplify an already degraded signal, hardwired access points broadcast full-speed Wi-Fi throughout dense multi-storey beach homes. To connect detached granny flats, home gyms, or workshops across acreage blocks, we deploy wireless point-to-point laser bridges that transmit multi-hundred megabit bandwidth over hundreds of metres with zero ground trenching.",
  },
  {
    id: "acma-licensing",
    topic: "Austel / ACMA Cabling Regulations",
    question: "Why is an Austel or ACMA Open Cabler licence legally required for home data and NBN cabling?",
    directAnswer:
      "Under Australian telecommunications law, only an ACMA-registered Open Cabler can legally install, terminate, or relocate customer premises phone, data, and NBN cabling.",
    detailSentences:
      "Holding an original AUSTEL licence transitioned into modern ACMA Open Cabler registration with structured network endorsements guarantees that every run adheres strictly to Australian Standards AS/CA S009:2020. Unlicensed cabling is illegal in Australia, voids home building insurance in the event of an electrical incident, and causes high-frequency packet loss that throttles internet speeds.",
  },
  {
    id: "mdf-commercial",
    topic: "MDF Jumpering & Commercial",
    question: "Can you assist with strata apartment MDF jumpering and commercial comms rack fit-outs?",
    directAnswer:
      "Yes, our unrestricted ACMA Open Cabler registration legally authorises us to access building Main Distribution Frames (MDF) to connect your designated carrier copper or fibre line directly to your unit.",
    detailSentences:
      "When internet retail providers declare a service 'connected' at the street frame but leave tenants stranded without an internal connection, we complete the jumper run and test your line right to the wall outlet. We also support Central Coast businesses across Tuggerah, Erina, and West Gosford with server rack clean-ups, patch panel terminations, and office network fit-outs.",
  },
];
