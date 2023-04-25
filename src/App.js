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
import img17 from "./product-items/img17.jpg";
import img21 from "./product-items/img21.jpg";
import img22 from "./product-items/img22.jpg";
import img111 from "./product-items/img111.jpg";
import img11111 from "./product-items/img11111.jpg";
import img26 from "./product-items/img26.jpg";
import img27 from "./product-items/img27.jpg";
import img28 from "./product-items/img28.jpg";
import img29 from "./product-items/img29.jpg";
import img30 from "./product-items/img30.jpg";
import img31 from "./product-items/img31.jpg";
import img32 from "./product-items/img32.jpg";
import img111111 from "./product-items/img111111.jpg";
import img2128 from "./product-items/img2128.jpg";
import img2121 from "./product-items/img2121.jpg";
import img2122 from "./product-items/img2122.jpg";
import img2123 from "./product-items/img2123.jpg";
import img2124 from "./product-items/img2124.jpg";
import img2125 from "./product-items/img2125.jpg";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const data = [
    {
      id: 1,
      img: img11,
      category: "clothes",
      name: "top",
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
      name: "top $25",
    },
    {
      id: 4,
      img: img38,
      name: "top $35",
    },
    {
      id: 5,
      img: img12,
      name: "top $45",
    },
    {
      id: 6,
      img: img15,
      name: "top $55",
    },
    {
      id: 7,
      img: img16,
      name: "top $45",
    },
    {
      id: 8,
      img: img17,
      name: "top $10",
    },
    {
      id: 9,
      img: img21,
      name: "top $26",
    },
    {
      id: 10,
      img: img22,
      name: "top $45",
    },
    {
      id: 11,
      img: img111,
      name: "top $45",
    },
    {
      id: 12,
      img: img11111,
      name: "top $45",
    },
    {
      id: 13,
      img: img26,
      name: "top $45",
    },
    {
      id: 14,
      img: img27,
      name: "top $45",
    },
    {
      id: 15,
      img: img28,
      name: "top $45",
    },
    {
      id: 16,
      img: img29,
      name: "top $45",
    },
    {
      id: 17,
      img: img30,
      name: "top $45",
    },
    {
      id: 18,
      img: img31,
      name: "top $45",
    },
    {
      id: 19,
      img: img32,
      name: "top $45",
    },
    {
      id: 20,
      img: img111111,
      name: "top $45",
    },
    {
      id: 21,
      img: img2128,
      name: "top $45",
    },
    {
      id: 2,
      img: img2121,
      name: "top $45",
    },
    {
      id: 2,
      img: img2122,
      name: "top $45",
    },

    {
      id: 2,
      img: img2123,
      name: "top $45",
    },
    {
      id: 2,
      img: img2124,
      name: "top $45",
    },
    {
      id: 2,
      img: img2125,
      name: "top $45",
    },
  ];
  let [orders, setOrders] = useState([]);
  let [currentItems, setCurrentItems] = useState(data);

  function addToOrder(items) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id == items.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, items]);
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
        <Route path="/shop" element={<Shop data={data} />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
