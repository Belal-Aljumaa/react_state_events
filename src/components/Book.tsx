import { IBook } from '../interfaces';

interface IProps {
  book: IBook;
}

const Book = (props: IProps) => {
  const {book} = props
  return (
    <div className="book">
      <img className="cover" src={book.imageUrl} />
      <div className="info">
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>
    </div>
  );
};

export default Book;
