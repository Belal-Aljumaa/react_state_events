import './App.scss';
import books from './data/books.json';

function App() {
  return (
    <div>
      <h1>Book Site</h1>
      <h2>There are {books.length} Books:</h2>
      <div className="books">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <img className="cover" src={book.imageUrl} />
              <div className="info">
                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
