export interface MovieProps {
  id: string
  title: string
  image: string
  synopsis: string
  rating: string
  released: string
  runtime: string
  largeimage: string
}

export interface Movie {
  id: string
  title: string
  image: string
  synopsis: string
  rating: string
  type: string
  released: string
  runtime: string
  largeimage: string
  unogsdate: Date
}

export interface MovieType {
  id: string
  title: string
  rating: string
  type: string
}
