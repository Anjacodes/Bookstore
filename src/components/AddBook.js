import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; /*eslint-disable-line*/

import { addBookToAPI } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' && category === '') return;
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit" onClick={(e) => submitBookToStore(e)}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
