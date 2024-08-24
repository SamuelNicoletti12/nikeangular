export interface Root {
  prodotti: Prodotti[]
  users: any[]
  posts: any[]
}

export interface Prodotti {
  id: number
  nome: string
  categoria: string
  prezzo: number
  taglie_disponibili: string[]
  colori_disponibili: string[]
  descrizione: string
  immagine: string
  immagini: string[]
  video: []
  nuovo_arrivi: boolean
  best_seller: number
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}