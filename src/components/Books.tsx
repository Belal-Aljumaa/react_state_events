import { IBook } from "../interfaces";
import Book from "./Book";

interface IProps {
  books: IBook[]
}

const Books = (props: IProps) => {
  const {books} = props
  return (
    <div className="books">
    {books.map((book: IBook) => {
      return (
        <Book book={book}/>
      );
    })}
  </div>
  )
}

export default Books
