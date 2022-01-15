import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Routes, instead of "Switch"
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
