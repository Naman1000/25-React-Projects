import { useState } from 'react'

import './App.css'

import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/Image-Slider'
import LoadMoreData from './components/load-more-data'

import menus from './components/TreeView1/data'
import TreeView from './components/TreeView1'
import QRCodeGenerator from './components/Qr code generator'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    
    {/* <Accordian /> */}

    {/* <RandomColor />  */}

    {/* <StarRating noOfStars={10} /> */}

    {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={10} />
       */}

       {/* <LoadMoreData /> */}

        {/* <TreeView menus={menus} /> */}
{/* 
        <QRCodeGenerator /> */}

        {/* <LightDarkMode /> */}

        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}  />
     
    </>
  )
}

export default App
