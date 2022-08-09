interface Location {
  name?: string
  url?: string
}

export interface Result {
  id?: number
  name?: string
  status?: 'Alive' | 'Dead' | 'unknown'
  species?: 'Alien' | 'Human'
  type?: string
  gender?: 'Female' | 'Male' | 'unknown'
  origin?: Location
  location?: Location
  image?: string
  episode?: string[]
  url?: string
  created?: Date
}

interface Info {
  count?: number
  pages?: number
  next?: string
  prev?: null
}

export interface Characters {
  info?: Info
  results?: Result[]
}
