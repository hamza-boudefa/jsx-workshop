import './App.css';
import ProductDesc from './components/ProductDesc';
import ProductImage from './components/ProductImage';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
function App() {
  return (
    <div className="App">
    <ProductImage/>
    <ProductName/>
    <ProductPrice/>
    <ProductDesc/>
    </div>
  );
}

export default App;
