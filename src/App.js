// import "tailwindcss/tailwind.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import homedecor from './images/homedecor.jpg';
import ceramics from './images/ceramic-vases.png';
import lighting from './images/lighting.png';
import furnit from './images/furniture.png';
import furniture from './images/furniture.jpg';
import lamp from './images/wood-lamp.jpeg';
import chandelier from './images/chandelier.jpeg';
import floorlamp from './images/floor-lamp.jpeg';
import chair from './images/chair.jpeg';
import coffeetable from './images/coffee-table.jpeg';
import sofa from './images/sofa.jpeg';
import tblamp from './images/tblamp.jpeg';
import logo from'./images/logo.png';
import CategoryHeader from "./components/CategoryHeader/categoryHeader";
import ImageContainer from "./components/ImageContainer/imagecontainer";
import StoreNav from "./components/StoreNav/StoreNav.js";
import Footer from './components/Footer/Footer.js';
import ProductListing from "./components/ProductListing/ProductListing.js";

import Furniture from "./pages/Furniture/furniture.js"

export default function App() {
  return (
    <Router>
      <div>
      <StoreNav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/new-in">
            <new-in />
          </Route>
          <Route path="/furniture">
            <Furniture />
          </Route>
          <Route path="/ceramics">
            <Ceramics />
          </Route>
          <Route path="/lighting">
            <Lighting />
          </Route>
          <Route path="/christmas">
            <Christmas />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Simple array, this is where we store data from the backend. Add filtering logic to change the items in the array.
const oldProducts = ["Table Lamp", "Dining Chair", "Washer"]

const futureProducts = [
  {
    name: "Table lamp",
    category: "Lighting",
    price: "$12",
    id: "123",
    stock: 5,
    image: lamp
  },
  {
    name: "Chandelier",
    category: "Lighting",
    price: "$24",
    id: "123",
    stock: 5,
    image: chandelier
  },
  {
    name: "Table lamp",
    category: "Lighting",
    price: "$12",
    id: "124",
    stock: 5,
    image: lamp
  },
  {
    name: "Cylinder table lamp",
    category: "Lighting",
    price: "$12",
    id: "123",
    stock: 5,
    image: tblamp
  },
  {
    name: "Floor lamp",
    category: "Lighting",
    price: "$12",
    id: "123",
    stock: 5,
    image: floorlamp
  }
]
const firstRowProducts = [
  {
    name: "Roots chair",
    category: "Furniture",
    price: "$12",
    id: "124",
    stock: 5,
    image: chair
  },
  {
    name: "Coffee table",
    category: "Furniture",
    price: "$12",
    id: "123",
    stock: 5,
    image: coffeetable
  },
  {
    name: "Coffee table",
    category: "Furniture",
    price: "$12",
    id: "124",
    stock: 5,
    image: coffeetable
  },
  {
    name: "Sofa",
    category: "Furniture",
    price: "$12",
    id: "123",
    stock: 5,
    image: sofa
  },
]


const filter = "123";

function filterProducts(localArray) {
  const filteredArray = localArray.filter((product) => {
    // let isValid = false;
    // if (product.category == "Lighting") {
    //   isValid = true;
    // }
    // return isValid;
    return product.id == filter
  })
  console.log("localArray");
  console.log(localArray);
  console.log("filteredArray");
  console.log(filteredArray);
  return filteredArray;
}

filterProducts(futureProducts);

// Responsible for displaying our products
function renderProducts(localArray) {
  const filteredArray = filterProducts(localArray);
  // Create a new array to hold the finalised list of products in a visual manner
  const renderedProducts = [];
  // Loop through all the raw data and transform it to something has styling and structure 
  // 3 itmes in the oldProducts
  //  2 items in newProducts
  for (const i in filteredArray) {
    const product = filteredArray[i];
    // if (product.category == filter) {
      const productComponent = <ProductListing productImage={product.image} productTitle={product.name} />;
      // Adding the construcuted and finalised visual component into my holding array
      renderedProducts.push(productComponent);
    // }
  }
  return renderedProducts;
}

function Home() {
  return ( <div>
     
    <ImageContainer image={homedecor} buttonMessage="Shop New Products"/>
    <CategoryHeader title="Your perfect room" />
    <div className="productContainer">
    { renderProducts(firstRowProducts) } 
    </div>
    <ImageContainer image={furniture} position="top-right" buttonMessage="Shop Furniture"/>
    <CategoryHeader title="Set the mood" />
    <div className="productContainer">
    { renderProducts(futureProducts) } 
    </div>
    <CategoryHeader title="Hold it to have it" />
    <ImageContainer image={ceramics} position="top-left" buttonMessage="Shop Ceramics"/>
    
    <Footer />

{/* <CategoryHeader title="Light your day" button="Explore now" /> */}
    
    
    {/* <CategoryHeader title="Christmas is coming" button="Explore"></CategoryHeader> */}
    <div className="full-width-overflow">
    
     </div>
     </div>);
}



function Ceramics() {
  return <h2>Ceramics</h2>;
}

function Lighting() {
  return <h2>Lighting</h2>;
}

function Christmas() {
  return <h2>Christmas</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}