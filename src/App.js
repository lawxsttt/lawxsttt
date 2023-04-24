import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import SearchPage from "./pages/SearchPage";
import Feltilizer from "./components/plantddd";
import { useState } from "react";
import { auth } from "./config";
import LoginPage from "./components/login";

import img11 from "./product-items/img11.jpg";
import img13 from "./product-items/img13.jpg";
import img14 from "./product-items/img14.jpg";
import img188 from "./product-items/img188.jpg";
import img222 from "./product-items/img222.jpg";
import img2222 from "./product-items/img2222.jpg";
import img225 from "./product-items/img225.jpg";
import img35 from "./product-items/img35.jpg";
import img37 from "./product-items/img37.jpg";
import img38 from "./product-items/img38.jpg";
import img12 from "./product-items/img12.jpg";
import img15 from "./product-items/img15.jpg";
import img16 from "./product-items/img16.jpg";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const data = [
    {
      id: 1,
      img: img11,
      category: "clothes",
      name: "top",
      price: 25,
    },
    {
      id: 2,
      img: img13,
      name: "body $45",
    },

    {
      id: 3,
      img: img14,
      name: "long sleev $52",
    },
    {
      id: 4,
      img: img188,
      name: "top $25",
    },
    {
      id: 2,
      img: img222,
      name: "top $45",
    },

    {
      id: 3,
      img: img2222,
      name: "top $52",
    },
    {
      id: 1,
      img: img225,
      name: "top $25",
    },
    {
      id: 2,
      img: img35,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 4,
      img: img38,
      name: "top $45",
    },
    {
      id: 5,
      img: img12,
      name: "top $45",
    },
    {
      id: 6,
      img: img15,
      name: "top $45",
    },
    {
      id: 7,
      img: img16,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },

    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
    {
      id: 2,
      img: img37,
      name: "top $45",
    },
  ];
  let [orders, setOrders] = useState([]);
  let [currentItems, setCurrentItems] = useState(data);

  function addToOrder(items) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id == data.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, data]);
  }

  function deleteOrder(index) {
    setOrders(orders.filter((el) => el.id !== index));
  }

  function chooseCategory(category) {
    if (category == "all") {
      setCurrentItems(data);
    } else {
      setCurrentItems(data.filter((el) => el.category == category));
    }
  }
  return (
    <BrowserRouter>
      <Navbar orders={orders} onDelete={deleteOrder} />
      <Routes>
        <Route path="/" element={<Home data={data} onAdd={addToOrder} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path="/Feltilizer" element={<Feltilizer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
