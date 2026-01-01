import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ReusableCss from './components/ReusableCss'
import ProductInfo from './components1/ProductInfo'
import LearnMap from './components1/LearnMap'


const App = () => {
  return (
    <>
    <Header/> <br />
    <MainContent/>
   <Footer/>
   <ReusableCss/>
   <ProductInfo/>
   <LearnMap/>

    </>
  )
}

export default App 