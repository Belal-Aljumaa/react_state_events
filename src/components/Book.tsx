import { IBook } from '../interfaces';
import { VscHeartFilled } from 'react-icons/vsc';
interface IProps {
  book: IBook;
  showImages: boolean;
  books: IBook[];
  setBooks: any;
}

const Book = (props: IProps) => {
  const { book, showImages, books, setBooks } = props;

  const handleChangeLiked = (book: IBook) => {
    book.isLiked = !book.isLiked;
    setBooks([...books])
  };

  return (
    <div className="book">
      {showImages && <img className="cover" src={book.imageUrl} />}
      <div className="info">
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <div>
          <VscHeartFilled
            size={40}
            style={{ cursor: 'pointer' }}
            className={book.isLiked ? 'isLiked' : 'isNotLiked'}
            onClick={() => handleChangeLiked(book)}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
