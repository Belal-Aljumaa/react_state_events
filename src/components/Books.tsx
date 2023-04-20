import { IBook } from "../interfaces";
import Book from "./Book";
interface IProps {
  books: IBook[]
  showImages: boolean
}

const Books = (props: IProps) => {
  const {books, showImages} = props
  return (
    <div className="books">
    {books.map((book: IBook) => {
      return (
        <Book book={book} showImages={showImages} key={book.id}/>
      );
    })}
  </div>
  )
}

export default Books
