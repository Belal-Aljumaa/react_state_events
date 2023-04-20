export interface IBook {
  id: number
  title: string
  author: string
  imageUrl: string
}

export interface IBooks {
  book: IBook[]
}
