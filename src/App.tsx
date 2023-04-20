import { useState } from 'react';
import './App.scss';
import Books from './components/Books';
import rawBooks from './data/books.json';
import { IBook } from './interfaces';

const _books: IBook[] = []
rawBooks.forEach((rawBook) => {
  const book = {
    ...rawBook,
    isLiked: false
  }
  _books.push(book)
})

function App() {
  const [showImages, setShowImages] = useState(true);
  const [books, setBooks] = useState(_books);

  return (
    <div>
      <h1>Book Site</h1>
      <button onClick={() => setShowImages(!showImages)}>Show Images</button>
      <h2>There are {books.length} Books:</h2>
      <h2>
        Total Likes: {books.reduce((acc, book) => acc + (book.isLiked ? 1:0),0)}
      </h2>
      <Books books={books} showImages={showImages} setBooks={setBooks} />
    </div>
  );
}

export default App;
