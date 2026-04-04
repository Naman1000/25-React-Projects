
import React from 'react'
import Tabs from './custom'


function RandomComponent(){
    return <h1>some random component</h1>
}



const TabTest = () => {





    const tabs = [
        {
            label : 'Tab 1',
            content : <div>this is content for Tab 1</div>
        },
         {
            label : 'Tab 2',
            content : <div>this is content for Tab 2</div>
        },
         {
            label : 'Tab 3',
            content : <RandomComponent />
        },
        
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex); 
    }

  return (
    
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}

export default TabTest
