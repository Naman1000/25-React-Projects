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
import TabTest from './components/customTabs/customTest'
import ModalTest from './components/custom-Modal-Popup/modal-test'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutoComplete from './components/search-autocomplete/searrch-autocomplete-with-api'
import TicTacToe from './components/TiicTacToe'
import FeatureFlags from './components/feature-flag'
import FeatureFlagGlobalState from './components/feature-flag/context'
import UseFetchHookTest from './components/Use-Fetch/test'
import UseOnclickOutsideTest from './components/use-outside-click/Index'


function App() {
  

  return (
    <>
      
    
    {/* <Accordian /> */}

    {/* <RandomColor />  */}

    {/* <StarRating noOfStars={10} /> */}

    {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={10} />
       */}

       {/* <LoadMoreData /> */}

        {/* <TreeView menus={menus} /> */}

        {/* <QRCodeGenerator /> */}

        {/* <LightDarkMode /> */}

        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}  /> */}

        {/* <TabTest /> */}

        {/* <ModalTest /> */}
   
        {/* <GithubProfileFinder /> */}
   
        {/* <SearchAutoComplete /> */}

        {/* <TicTacToe /> */}

        {/* <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState> */}

         {/* <UseFetchHookTest /> */}

          <UseOnclickOutsideTest />


    </>
  )
}

export default App
