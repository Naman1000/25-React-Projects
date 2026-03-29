
// single selection
// multi selection

import { useState } from "react";
import data from "./data.js";
import "./styles.css"

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(null)
    const [Multi, setMulti] = useState([])


    function handleSingleSelection(getCurrrentId){
        setSelected(getCurrrentId === selected ? null : getCurrrentId )
      }
    
    function handleMultiSelection(getCurrrentId){
        let cpyMulti = [...Multi]
        const findIndexofCurrentId = cpyMulti.indexOf(getCurrrentId)

      //  console.log(findIndexofCurrentId) 
        if(findIndexofCurrentId === -1 ) cpyMulti.push(getCurrrentId)
            else cpyMulti.splice(findIndexofCurrentId, 1)

            setMulti(cpyMulti)

    }  
   console.log(selected, Multi)



     return (
        
    <div className="wrapper">
            <button onClick={()=> setEnableMultiSelect(!enableMultiSelect)}>
                enable Mulitple seletion</button>
        <div className="accordian">

            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item">
                        <div onClick={enableMultiSelect ? 
                        ()=> handleMultiSelection(dataItem.id) 
                        : ()=> handleSingleSelection(dataItem.id)}
                         className="title">
                            <h3>{dataItem.question}</h3>
                            <span className="plus">+</span>
                        </div>
                            {enableMultiSelect ? 
                            Multi.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            : selected === dataItem.id ? 
                            <div className="content"> 
                            {dataItem.answer}</div>: null }
                    </div>
                ))
            ) : <div>NO data found</div>}

        </div>



    </div>
    )
}