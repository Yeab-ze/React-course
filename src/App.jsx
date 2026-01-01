import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ReusableCss from "./components/ReusableCss";
import ProductInfo from "./components1/ProductInfo";
import LearnMap from "./components1/LearnMap";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import Final from "./mapAndProps/Final";
import Display from "./conditional-rendering/Display";
import Login from "./auth/Login";
import Cart from "./conditional rendeing2/Cart";
import Weathering from "./conditional rendeing2/Weathering";


const App = () => {
  return (
    <>
      <Header /> <br />
      <MainContent />
      <Footer />
      <ReusableCss />
      <ProductInfo />
      {/* <LearnMap/> */}
      <UserList />
      <ProductList />
      <ProductCard />

    {/* props learn  */}
    <Final/>

    {/* rendering */}
    <Display/>
    <Login/>

    <h1>this text from card components</h1>
    <Cart/>

    <h1>text from weahter components</h1>
    <Weathering/>
    </>
  );
};

export default App;
