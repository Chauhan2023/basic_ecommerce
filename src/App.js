import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";


function App() {
    const products = [
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/run-cross-training-shoes-1665517938.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
      name: "Hooka Shoes",
      category: "Non-Electronic",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      url: "https://grapeejapan.com/wp-content/uploads/sub5-72-1.jpg",
      name: "Artorea  CasterWatch Black",
      category: "Electronic",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-2uJROSe27fOGhpbhRTQjlJ1IBS19Iwgbw&usqp=CAU",
      name: "Macbook Air Laptop 8GB RAM",
      category: "Electronic",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      url: "https://res.cloudinary.com/cctvcare-net/image/upload/f_auto,q_auto/v1/4787_xl",
      name: "Hick vision Security Camera",
      category: "Electronic",
      seller: "Camron LTD",
      price: 4000,
    },
    {
      url: "https://www.reliancedigital.in/medias/Samsung-SM-R915FZBAINU-Smart-Watch-493177543-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3OTg2M3xpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDBiLzk4ODY5MjUzNTcwODYuanBnfGI5MDczNDdkYTQ0YzBkNjM4NmUzYTNkMGY4ZTAyZTQyNThiYjRjMWUxYTViNDY0ZjNiY2YzZmI3MDJlM2Q3OTA",
      name: "Samsung Watch",
      category: "Electronic",
      seller: "Watch Ltd",
      price: 2000,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdd5DFh5tJrU8JD5nU6XdNl5F2xNVJ63DMBCz3BD4NhOmXC_ygutZyvJflIQGN9mK2W4&usqp=CAU",
      name: "Rainbow cup",
      category: "Non-Electronic",
      seller: "ABS Ltd",
      price: 100,
    },
  ];

  const [product, setProduct] = useState([...products]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  function selectoption(event) {
    if (event.target.value === "option1") {
      // Show all products
      setProduct([...products]);
    } else if (event.target.value === "option2") {
      // Show only Electronic products
      const electronics = products.filter((item) => item.category === "Electronic");
      setProduct([...electronics]);
    } else if (event.target.value === "option3") {
      // Show only Non-Electronic products
      const nonElectronics = products.filter((item) => item.category === "Non-Electronic");
      setProduct([...nonElectronics]);
    }
  }
  function selectoptionprice(event) {
    if (event.target.value === "option4") {
      // Show all products
      setProduct([...products]);
    } else if (event.target.value === "option5") {
      // Show only Electronic products
      const price = products.filter((item) => item.price <1000);
      setProduct([...price]);
    } else if (event.target.value === "option6") {
      // Show only Non-Electronic products
      const price = products.filter((item) => item.price >1000);
      setProduct([...price]);
    }
  }

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      <div className="category">
      <h3>Filters:</h3>
      <span>Category:</span>
      <select onChange={selectoption}>
        <option value="option1">All</option>
        <option value="option2">Electronic</option>
        <option value="option3">Non-Electronic</option>
      </select>
      <span>price:</span>
      <select onChange={selectoptionprice}>
        <option value="option4">>0</option>
        <option value="option5">1000></option>
        <option value="option6">>1000</option>
      </select>
      </div>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
