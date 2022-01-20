import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Book = ({ book: { id, title, category } }) => {
  return (
    <h5 className="transparent-banner py-2">{title}</h5>
  );
};



export default Book;