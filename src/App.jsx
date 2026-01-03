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
import LearnUseState from "./usestate/LearnUseState";
import ArrayInUseState from "./usestate/learn array in usestate/ArrayInUseState";
import LearnAdvArr from "./usestate/learn array in usestate/LearnAdvArr";
import InstagramLike from "./usestate/learn array in usestate/InstagramLike";
import UsestateChallange from "./usestate/usestateChallange/UsestateChallange";
import Todolist from "./usestate/usestateChallange/Todolist";
import Portal from "./LearnnReactPortal/Portal";
import UseEffect from "./useeffect/UseEffect";
import Users from "./useeffect/Users";
import BasicEffect from "./useeffect/BasicEffect";
import FetchData from "./useeffect/FetchData";
import Againfetch from "./useeffect/Againfetch";
import DisplayProp from "./propdriling/DisplayProp";


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

    <h1>learning use state</h1>
    <LearnUseState/>

    <h1>learn array in usestate</h1>
    <ArrayInUseState/>

    <h1>learn advance array in usestate</h1>
    <LearnAdvArr/>

    <h1>from instagram like components</h1>
    <InstagramLike/> 

    <h1>from use state challange</h1>
    <UsestateChallange/> <br />

    <Todolist/>

    <h1>from portal components</h1>
    <Portal/>

    <h1>from use effect compon</h1>
    <UseEffect/>

    <h1>from fetch data users compontens</h1>
    <Users/>

    <h1>from basicuseeddect components</h1>
    <BasicEffect/>

    <h1>from fetchdata useeffect components</h1>
    <FetchData/>

    <h1>practice by yours fetch section</h1>
    <Againfetch/>

    <h1>learn prop driling</h1>
    <DisplayProp/>
     </>
  );
};

export default App;
