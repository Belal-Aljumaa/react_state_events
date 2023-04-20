export interface IBook {
  id: number
  title: string
  author: string
  imageUrl: string
  isLiked: boolean
}

export interface IBooks {
  book: IBook[]
}
