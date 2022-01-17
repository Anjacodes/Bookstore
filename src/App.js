import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
