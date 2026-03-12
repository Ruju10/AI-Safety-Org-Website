import Airtable from 'airtable'

function getBase() {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Airtable not configured')
  }
  return new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_BASE_ID)
}

export interface Org {
  id: string
  name: string
  type: 'India' | 'Intl' | 'Academic' | 'Policy'
  focus: string
  location: string
  aisRelevance: string
  website: string
}

export interface Individual {
  id: string
  name: string
  affiliation: string
  background: string
  email: string
}

export interface NewsItem {
  id: string
  headline: string
  source: string
  date: string
  category: string
  url: string
}

export interface LandscapeOrg {
  id: string
  organisation: string
  sector: string
  focusAreas: string[]
  aisRelevance: 'High' | 'Medium' | 'Low'
  location: string
}

export interface IntlOrg {
  id: string
  name: string
  description: string
  tag: string
  website: string
}

export async function getOrgs(): Promise<Org[]> {
  try {
    const records = await getBase()('AIS_Orgs').select({
      view: 'Grid view',
    }).all()
    return records.map((r) => ({
      id: r.id,
      name: (r.get('Name') as string) || '',
      type: (r.get('Type') as Org['type']) || 'India',
      focus: (r.get('Focus') as string) || '',
      location: (r.get('Location') as string) || '',
      aisRelevance: (r.get('AIS_Relevance') as string) || '',
      website: (r.get('Website') as string) || '',
    }))
  } catch {
    return fallbackOrgs
  }
}

export async function getIndividuals(): Promise<Individual[]> {
  try {
    const records = await getBase()('Individuals').select({ view: 'Grid view' }).all()
    return records.map((r) => ({
      id: r.id,
      name: (r.get('Name') as string) || '',
      affiliation: (r.get('Affiliation') as string) || '',
      background: (r.get('Background') as string) || '',
      email: (r.get('Email') as string) || '',
    }))
  } catch {
    return []
  }
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const records = await getBase()('News').select({ view: 'Grid view', sort: [{ field: 'Date', direction: 'desc' }] }).all()
    return records.map((r) => ({
      id: r.id,
      headline: (r.get('Headline') as string) || '',
      source: (r.get('Source') as string) || '',
      date: (r.get('Date') as string) || '',
      category: (r.get('Category') as string) || '',
      url: (r.get('URL') as string) || '',
    }))
  } catch {
    return fallbackNews
  }
}

export async function getLandscapeMapping(): Promise<LandscapeOrg[]> {
  try {
    const records = await getBase()('Landscape_Mapping').select({ view: 'Grid view' }).all()
    return records.map((r) => ({
      id: r.id,
      organisation: (r.get('Organisation') as string) || '',
      sector: (r.get('Sector') as string) || '',
      focusAreas: (r.get('Focus_Areas') as string[]) || [],
      aisRelevance: (r.get('AIS_Relevance') as LandscapeOrg['aisRelevance']) || 'Medium',
      location: (r.get('Location') as string) || '',
    }))
  } catch {
    return fallbackLandscape
  }
}

export async function getIntlOrgs(): Promise<IntlOrg[]> {
  try {
    const records = await getBase()('Intl_Orgs').select({ view: 'Grid view' }).all()
    return records.map((r) => ({
      id: r.id,
      name: (r.get('Name') as string) || '',
      description: (r.get('Description') as string) || '',
      tag: (r.get('Tag') as string) || '',
      website: (r.get('Website') as string) || '',
    }))
  } catch {
    return fallbackIntlOrgs
  }
}

// Fallback data used when Airtable is not configured
const fallbackOrgs: Org[] = [
  { id: '1', name: 'AI Safety India', type: 'India', focus: 'Community / Advocacy', location: 'India', aisRelevance: 'High', website: '' },
  { id: '2', name: 'Groundless AI', type: 'India', focus: 'Research', location: 'India', aisRelevance: 'High', website: '' },
  { id: '3', name: 'Impact Academy', type: 'India', focus: 'Education / Community', location: 'India', aisRelevance: 'High', website: '' },
  { id: '4', name: 'Digital Futures Lab', type: 'India', focus: 'Research / Policy', location: 'India', aisRelevance: 'High', website: '' },
  { id: '5', name: 'Carnegie India / IndiaAI', type: 'India', focus: 'Policy / Think Tank', location: 'New Delhi', aisRelevance: 'High', website: '' },
  { id: '6', name: 'Lossfunk', type: 'India', focus: 'Research', location: 'India', aisRelevance: 'High', website: '' },
  { id: '7', name: 'IIT Madras', type: 'Academic', focus: 'Academic Research', location: 'Chennai', aisRelevance: 'High', website: '' },
  { id: '8', name: 'IISc', type: 'Academic', focus: 'Academic Research', location: 'Bangalore', aisRelevance: 'High', website: '' },
  { id: '9', name: 'AI Safety Asia', type: 'Intl', focus: 'Regional Network', location: 'Asia', aisRelevance: 'High', website: '' },
  { id: '10', name: 'Apart Research', type: 'Intl', focus: 'Research / Grants', location: 'International', aisRelevance: 'High', website: '' },
  { id: '11', name: 'GovernAI', type: 'Intl', focus: 'Policy / Governance', location: 'International', aisRelevance: 'High', website: '' },
  { id: '12', name: 'FutureKind', type: 'Intl', focus: 'Longtermist Org', location: 'International', aisRelevance: 'Medium', website: '' },
  { id: '13', name: 'Electrisheep', type: 'Intl', focus: 'AI Safety', location: 'International', aisRelevance: 'Medium', website: '' },
  { id: '14', name: 'GIZ', type: 'Policy', focus: 'Development Agency', location: 'International', aisRelevance: 'Medium', website: '' },
  { id: '15', name: 'UNESCO', type: 'Policy', focus: 'Multilateral / Ethics', location: 'International', aisRelevance: 'Medium', website: '' },
]

const fallbackNews: NewsItem[] = [
  { id: '1', headline: "India's AI Governance Framework: What it Means for Safety Research", source: 'AI Safety Lists', date: '2025-03-01', category: 'Policy', url: '' },
  { id: '2', headline: 'New MEITY Guidelines Signal Shift Toward Responsible AI Development', source: 'AI Safety Lists', date: '2025-02-20', category: 'Regulation', url: '' },
  { id: '3', headline: 'IIT Madras Launches AI Ethics Research Initiative', source: 'AI Safety Lists', date: '2025-02-10', category: 'Research', url: '' },
  { id: '4', headline: 'India Signs Global AI Safety Compact at International Forum', source: 'AI Safety Lists', date: '2025-01-28', category: 'Policy', url: '' },
  { id: '5', headline: 'NASSCOM Report: AI Adoption in India Accelerates, Safety Gaps Identified', source: 'AI Safety Lists', date: '2025-01-15', category: 'Industry', url: '' },
]

const fallbackLandscape: LandscapeOrg[] = [
  { id: '1', organisation: 'MEITY', sector: 'Government', focusAreas: ['AI Policy', 'Regulation'], aisRelevance: 'High', location: 'New Delhi' },
  { id: '2', organisation: 'NITI Aayog', sector: 'Government', focusAreas: ['AI Strategy', 'Ethics'], aisRelevance: 'High', location: 'New Delhi' },
  { id: '3', organisation: 'Wadhwani AI', sector: 'Research / NGO', focusAreas: ['AI for Good', 'Social Impact'], aisRelevance: 'Medium', location: 'Mumbai' },
  { id: '4', organisation: 'iSpirt', sector: 'Industry Body', focusAreas: ['Digital Public Goods'], aisRelevance: 'Medium', location: 'Bangalore' },
  { id: '5', organisation: 'IIT Bombay', sector: 'Academia', focusAreas: ['ML Research', 'Safety'], aisRelevance: 'High', location: 'Mumbai' },
  { id: '6', organisation: 'Tata Consultancy Services', sector: 'Industry', focusAreas: ['Enterprise AI', 'Responsible AI'], aisRelevance: 'Medium', location: 'Mumbai' },
  { id: '7', organisation: 'IIT Delhi', sector: 'Academia', focusAreas: ['AI Research', 'NLP'], aisRelevance: 'High', location: 'New Delhi' },
  { id: '8', organisation: 'Centre for Internet & Society', sector: 'Civil Society', focusAreas: ['Digital Rights', 'AI Policy'], aisRelevance: 'High', location: 'Bangalore' },
]

const fallbackIntlOrgs: IntlOrg[] = [
  { id: '1', name: 'AI Safety Asia', description: 'Regional AIS network focused on Asian contexts and collaboration.', tag: 'Regional', website: '' },
  { id: '2', name: 'Safe AI Germany', description: 'National AIS alliance — inspiration for our structure and model.', tag: 'Model Org', website: '' },
  { id: '3', name: 'AISafety.com', description: 'Global AI Safety resource hub and community platform.', tag: 'Global Hub', website: '' },
  { id: '4', name: 'Centre for AI Safety', description: 'Research and policy on reducing catastrophic risks from AI.', tag: 'Research', website: '' },
  { id: '5', name: 'Future of Life Institute', description: 'Works to reduce extreme risks from transformative technologies.', tag: 'Policy', website: '' },
  { id: '6', name: 'Alignment Forum', description: 'Research community for technical AI alignment work.', tag: 'Research', website: '' },
  { id: '7', name: 'GovAI', description: 'Research on the governance of advanced AI systems.', tag: 'Governance', website: '' },
  { id: '8', name: 'More TBD', description: 'Further orgs to be mapped in consultation with advisors.', tag: 'In Progress', website: '' },
]
