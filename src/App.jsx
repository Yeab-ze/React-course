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
import UserStatus from "./conditional rendeing2/UserStatus";
import Greeting from "./conditional rendeing2/Greeting";
import ReactIcon from "./useReactIcon/ReactIcon";
import EventHandling from "./eventhandling/EventHandling";


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
    <Login loggedIn={true} isAdmin={false}/>

    <h1>this text from card components</h1>
    <Cart/>

    <h1>text from weahter components</h1>
    <Weathering/>

    <h1>value from userstatus components</h1>
    <UserStatus  loggedIn={true} isAdmin={true}/>

    <h1>value from greeting components</h1>
    <Greeting timeOfDay={'morinig'}/>

    <h1>react icon practice</h1>
    <ReactIcon/>

    <h1>from event handling components</h1>
    <EventHandling/>
    </>
  );
};

export default App;
