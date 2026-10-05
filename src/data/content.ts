export const STATS = [
  { value: '$5M+', label: 'Deals Closed' },
  { value: '3', label: 'Buy Box Strategies' },
  { value: 'NE+', label: 'Markets Active' },
  { value: '100%', label: 'Integrity Driven' },
] as const

export const PRINCIPLES = [
  {
    title: 'Integrity First',
    desc: 'Every deal is done with transparency and honesty — no games, no surprises.',
  },
  {
    title: 'Community Driven',
    desc: 'Proud SubTo member. Tony believes in lifting others as he climbs.',
  },
  {
    title: 'Creative Finance',
    desc: 'Subject-to, seller finance, and creative structures that work for everyone.',
  },
  {
    title: 'Local Roots',
    desc: 'Deep ties to New England markets with a growing national footprint.',
  },
] as const

export const MILESTONES = [
  {
    year: 'Late 2023',
    text: "Joined Pace Morby's SubTo community and dove headfirst into creative finance strategies.",
  },
  {
    year: '2024',
    text: 'Closed first creative finance deals — subject-to and seller finance acquisitions across New England.',
  },
  {
    year: '2024',
    text: 'Expanded into Short-Term Rentals in Carroll County, NH and the Florida Panhandle.',
  },
  {
    year: '2024',
    text: 'Launched Value-Add Multifamily strategy in Windham, CT and Worcester, MA.',
  },
  {
    year: '2025',
    text: 'Inducted into the $5,000,000 Club at SquadUp Summit — recognized for deal volume and community impact.',
  },
  {
    year: '2025',
    text: "Became a 2nd Year Owners Club member — an elite group of $5M+ creative finance investors in Pace Morby's community.",
  },
  {
    year: '2026',
    text: 'Scaling nationally with lending programs, equity partnerships, and a growing investor network.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      "Tony is one of the most genuine investors I've met in the SubTo community. His integrity and follow-through on every deal is unmatched. If you have a property, he's the guy to call.",
    name: 'Mike R.',
    role: 'Real Estate Investor | SubTo Community',
  },
  {
    quote:
      'I submitted a deal to Tony and he got back to me within hours. He was transparent, fair, and made the whole process easy. Couldn\'t ask for a better buyer.',
    name: 'Sarah L.',
    role: 'Motivated Seller | Worcester, MA',
  },
  {
    quote:
      "Tony's knowledge of creative finance is incredible. He found a solution for my property that no other investor could. He genuinely cares about helping people.",
    name: 'James T.',
    role: 'Seller | Carroll County, NH',
  },
] as const

/** Aligned criteria used on both /buy-box and /submit-deal */
export const BUY_BOXES = [
  {
    id: 'fix-flip',
    number: '01',
    title: 'Fix & Flips',
    subtitle: 'Value-Add Single Family Homes',
    shortStrategy: 'Value-Add SFH — ~60–70% ARV minus rehab',
    shortLocation:
      'Chattanooga TN · Knoxville TN · Worcester MA · Windham CT · Norfolk MA · Rockingham NH',
    image: '/images/tony-buybox-bg.webp',
    accent: 'gold' as const,
    accentLabel: 'Gold',
    criteria: [
      {
        label: 'Deal Criteria',
        value: 'Value-Add SFH — ~60–70% of ARV minus rehab',
      },
      {
        label: 'Location Focus',
        value:
          'Chattanooga, TN | Knoxville, TN | Worcester County, MA | Windham County, CT | Norfolk County, MA | Rockingham County, NH',
      },
      { label: 'Source', value: 'Must be OFF MARKET' },
      {
        label: 'Financing',
        value: 'Creative Financing Preferred (Sub2, Seller Finance, etc.)',
      },
    ],
  },
  {
    id: 'str',
    number: '02',
    title: 'Short-Term Rentals',
    subtitle: 'Single Family Homes',
    shortStrategy: 'SFH — cash flow as-is · ≥20% gross revenue',
    shortLocation:
      'Carroll County NH · Pigeon Forge TN · Asheville NC · Gulf Shores AL · Panama City Beach FL · Indian Rocks / Okaloosa FL',
    image: '/images/b99c3818.webp',
    accent: 'copper' as const,
    accentLabel: 'Copper',
    criteria: [
      {
        label: 'Location Focus',
        value:
          'Carroll County, NH | Pigeon Forge, TN | Asheville, NC | Gulf Shores, AL | Panama City Beach, FL (also Florida Panhandle / Indian Rocks Beach / Okaloosa County)',
      },
      {
        label: 'Revenue Target',
        value: 'Gross revenues must equal 20% of purchase price minimum',
      },
      { label: 'Entry Fee', value: '10% or Less Total Entry Fee' },
      { label: 'Cash Flow', value: 'Must Cash Flow in As-Is Condition' },
    ],
  },
  {
    id: 'multifamily',
    number: '03',
    title: 'Value-Add Multifamily',
    subtitle: 'Primary + smaller New England value-add',
    shortStrategy: '20–200 unit B/C · also 3+ unit value-add in Windham / Worcester',
    shortLocation: 'East TN · Maine · Upstate NY · NH · Windham CT · Worcester MA',
    image: '/images/77382875.avif',
    accent: 'steel' as const,
    accentLabel: 'Steel',
    criteria: [
      {
        label: 'Primary Targets',
        value: '20–200 Unit Multifamily — B/C Class',
      },
      {
        label: 'Primary Markets',
        value: 'East Tennessee | Maine | Upstate New York | New Hampshire',
      },
      {
        label: 'Also Buying',
        value:
          'Smaller 3+ unit value-add multifamily in Windham County, CT and Worcester County, MA',
      },
      {
        label: 'Deal Profile',
        value:
          'Operational inefficiencies, expense mismanagement, below-market rents, or a clear path to NOI growth',
      },
      {
        label: 'Strategy',
        value:
          'Force appreciation through rental increases, expense management, and operational efficiencies',
      },
    ],
  },
] as const

export const PARTNER_OPTIONS = [
  {
    title: 'First & Second Position Loans',
    desc: 'First and second position loans for gap and fix & flip capital.',
  },
  {
    title: 'Equity Partners',
    desc: 'Partner with Tony on deals through equity participation.',
  },
  {
    title: 'Flexible Structures',
    desc: 'Flexible equity partnership and creative structures available nationwide.',
  },
] as const

export const SUBMIT_BUY_BOX_OPTIONS = [
  {
    id: 'fix-flip',
    label: 'Buy Box #1 — Fix & Flips',
    strategy: 'Value-Add SFH — ~60–70% ARV minus rehab',
    location:
      'Chattanooga, Knoxville, Worcester, Windham, Norfolk, Rockingham County',
  },
  {
    id: 'str',
    label: 'Buy Box #2 — Short-Term Rentals',
    strategy: 'Single Family Homes — ≥20% gross · ≤10% entry · cash flow as-is',
    location:
      'Carroll County NH, Pigeon Forge TN, Asheville NC, Gulf Shores AL, Panama City Beach FL, Indian Rocks / Okaloosa FL',
  },
  {
    id: 'multifamily',
    label: 'Buy Box #3 — Value-Add Multifamily',
    strategy: '20–200 unit B/C primary · also 3+ unit value-add Windham CT / Worcester MA',
    location: 'East TN, Maine, Upstate NY, NH · Windham CT, Worcester MA',
  },
  {
    id: 'lending',
    label: 'Lending / Partnership',
    strategy: '1st/2nd position, equity, or flexible structures',
    location: 'Nationwide',
  },
] as const

export const DEAL_COLLAGE = [
  { src: '/images/tony-buybox-bg.webp', alt: 'Value-add opportunity' },
  { src: '/images/b99c3818.webp', alt: 'Mountain short-term rental' },
  { src: '/images/3AmI6Gf.webp', alt: 'Renovated kitchen' },
  { src: '/images/8f53a055.avif', alt: 'Luxury outdoor living' },
  { src: '/images/5490a2a5.webp', alt: 'White Mountain views' },
  { src: '/images/10fd28e1.webp', alt: 'Evening fire pit' },
] as const

export const COMMUNITY_PHOTOS = [
  { src: '/images/tony-5m-club.jpg', caption: '$5,000,000 Club — SquadUp Summit' },
  { src: '/images/tony-stage-award.jpg', caption: 'On Stage at SquadUp Summit' },
  { src: '/images/tony-summit-duo.png', caption: 'With Jocko Willink at SquadUp Summit' },
] as const

export const PEAK_GALLERY = [
  { src: '/images/b99c3818.webp', alt: 'Mountain Retreat Exterior' },
  { src: '/images/8ddc1eb4.avif', alt: '7-Person Hot Tub' },
  { src: '/images/10fd28e1.webp', alt: 'Solo Stove Fire Pit & Yard' },
  { src: '/images/77382875.avif', alt: 'Cozy Living Spaces' },
  { src: '/images/3AmI6Gf.webp', alt: 'Fully Renovated Kitchen' },
  { src: '/images/YHSK344.webp', alt: 'Spacious Bedrooms' },
  { src: '/images/51nX5cg.webp', alt: 'Family Fun Areas' },
  { src: '/images/5490a2a5.webp', alt: 'White Mountains Views' },
] as const

export const PEAK_AMENITIES = [
  { title: '8-Person Sauna', desc: 'Private barrel sauna for ultimate relaxation' },
  { title: '7-Person Hot Tub', desc: 'Soak under the stars year-round' },
  { title: 'Arcade & Game Room', desc: 'Arcade, air hockey & Nintendo Switch' },
  { title: 'Outdoor Fire Pit', desc: 'Solo Stove fire pit for evening gatherings' },
  { title: 'On-Site Parking', desc: 'Ample parking for the whole group' },
  { title: 'Air Conditioning', desc: 'Stay cool during warm summer stays' },
  { title: 'Full Kitchen', desc: 'Fully renovated, stocked kitchen' },
] as const

export const PEAK_NEARBY = [
  { name: 'Attitash Mountain', season: 'Winter/Summer' },
  { name: 'Cranmore Mountain', season: 'Winter/Summer' },
  { name: 'Black Mountain', season: 'Winter/Summer' },
  { name: 'Storyland Theme Park', season: 'Summer' },
  { name: 'Downtown North Conway', season: 'Year-Round' },
  { name: 'White Mountain Hiking', season: 'Spring/Fall' },
] as const

export const PEAK_REVIEWS = [
  {
    name: 'The Johnson Family',
    date: 'January 2025',
    text: "Absolutely incredible property! The sauna and hot tub were highlights for our whole group. Kids loved the arcade room. We'll definitely be back every ski season.",
  },
  {
    name: 'Sarah & Mike',
    date: 'March 2025',
    text: 'Perfect mountain getaway. The house was spotless, beautifully decorated, and had everything we needed. Location is unbeatable — minutes from everything.',
  },
] as const

export const PEAK_FAQS = [
  {
    q: 'Is Peak and Pine Retreat pet-friendly?',
    a: 'Please contact us directly to discuss pet accommodations. We want to make sure every stay is comfortable for all guests.',
  },
  {
    q: 'What time is check-in and check-out?',
    a: 'Standard check-in is 4:00 PM and check-out is 10:00 AM. Early check-in or late check-out may be available upon request.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes — ample on-site parking for multiple vehicles — perfect for large groups arriving in separate cars.',
  },
  {
    q: 'How many guests can the property accommodate?',
    a: 'Peak and Pine Retreat comfortably sleeps 12 guests across 5 bedrooms and 2 full bathrooms.',
  },
] as const

export const RESOURCES = [
  {
    title: 'Get Creative Podcast',
    description:
      'Hosted by Pace Morby — the go-to podcast for creative finance real estate investors. Hundreds of episodes covering every deal structure imaginable.',
    link: 'https://www.getcreativepodcast.com',
    tag: 'Podcast',
  },
  {
    title: 'SquadUp Summit',
    description:
      "Real estate's largest investor event, hosted by Pace Morby. Tony is a proud attendee and $5M Club award recipient at SquadUp Summit.",
    link: 'https://www.instagram.com/squadupsummit/',
    tag: 'Education',
  },
  {
    title: 'In-Person Workshops',
    description:
      'Hands-on real estate investing workshops through SubTo New England. Learn creative finance strategies directly from active investors in your area.',
    link: 'https://www.instagram.com/subtonewengland/',
    tag: 'Workshop',
  },
  {
    title: 'Use My Creative Lender',
    description:
      "Tony's trusted hard money and creative lending partner. Get fast, flexible financing for your next fix & flip, BRRRR, or creative finance deal.",
    link: 'https://app.breeze-financial.com/HMLOWebForm.php?bRc=81db5f67b47c15ea&aRc=ae94456e795f75fc&fOpt=c1cca7825dbc8710&op=aa4465703ef4b17e',
    tag: 'Lending',
  },
  {
    title: "Pace Morby's YouTube",
    description:
      'Thousands of free videos on subject-to, seller finance, and creative deal structures. Pace Morby is the most followed creative finance educator in the world.',
    link: 'https://www.youtube.com/pacemorby',
    tag: 'Video',
  },
  {
    title: 'SubTo New England IG',
    description:
      'Follow SubTo New England on Instagram for local events, deal spotlights, and creative finance content tailored to the New England market.',
    link: 'https://www.instagram.com/subtonewengland/',
    tag: 'Community',
  },
] as const
