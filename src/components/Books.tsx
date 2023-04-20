import { IBook } from '../interfaces';
import Book from './Book';
interface IProps {
  books: IBook[];
  showImages: boolean;
  setBooks: any
}

const Books = (props: IProps) => {
  const { books, showImages, setBooks } = props;
  return (
    <div className="books">
      {books.map((book: IBook) => {
        return (
          <Book
            book={book}
            showImages={showImages}
            books={books}
            setBooks={setBooks}
            key={book.id}
          />
        );
      })}
    </div>
  );
};

export default Books;
