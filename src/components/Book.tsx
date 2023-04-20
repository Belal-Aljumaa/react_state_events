import { IBook } from '../interfaces';
interface IProps {
  book: IBook;
  showImages: boolean;
}

const Book = (props: IProps) => {
  const { book, showImages } = props;
  return (
    <div className="book">
      {showImages && <img className="cover" src={book.imageUrl} />}
      <div className="info">
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>
    </div>
  );
};

export default Book;
