/** Canonical external destinations from the live site — do not invent new ones. */
export const LINKS = {
  calendly: 'https://calendly.com/tonyeisenhauer',
  subto: 'https://join.nre.ai/mzCwjho',
  linktree: 'https://linktr.ee/tonyeisenhauer',
  instagram: 'https://www.instagram.com/tonyeisenhauer/',
  facebook: 'https://www.facebook.com/tony.eisenhauer/',
  linkedin: 'https://www.linkedin.com/in/tonyeisenhauer',
  youtube: 'https://www.youtube.com/@tonyeisenhauer',
  peakAndPine: 'https://www.peakandpineretreat.com',
  airbnb: 'https://www.airbnb.com/rooms/1496544074124348297',
  vrbo: 'https://www.vrbo.com/4780342',
  getCreativePodcast: 'https://www.getcreativepodcast.com',
  squadUpIg: 'https://www.instagram.com/squadupsummit/',
  subtoNeIg: 'https://www.instagram.com/subtonewengland/',
  paceYoutube: 'https://www.youtube.com/pacemorby',
  breezeLender:
    'https://app.breeze-financial.com/HMLOWebForm.php?bRc=81db5f67b47c15ea&aRc=ae94456e795f75fc&fOpt=c1cca7825dbc8710&op=aa4465703ef4b17e',
  email: 'mailto:Tony.northeastproperty@gmail.com',
  emailAddress: 'Tony.northeastproperty@gmail.com',
} as const

export const NAV_PRIMARY = [
  { to: '/about', label: 'About' },
  { to: '/buy-box', label: 'Buy Box' },
  { to: '/luxury-str', label: 'Peak & Pine' },
  { to: '/submit-deal', label: 'Submit a Deal' },
  { to: '/contact', label: 'Contact' },
] as const

export const FOOTER_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/buy-box', label: 'Buy Box' },
  { to: '/luxury-str', label: 'Peak & Pine' },
  { to: '/submit-deal', label: 'Submit a Deal' },
  { to: '/contact', label: 'Contact' },
  { to: '/newsletter', label: 'Newsletter' },
  { to: '/resources', label: 'Resources' },
] as const
