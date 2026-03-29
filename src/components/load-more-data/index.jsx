import { useEffect, useState } from "react"
import "./styles.css"


 export default function LoadMoreData(){
    
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [disabledButton , setDisabledButton] = useState(false)
    const [countOne, setCountOne] = useState(0)


    async function fetchImages(){
        try {
        setLoading(true)
            
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`)
             const result = await response.json()
           
           if(result && result.products && result.products.length){
            setProducts((prevData)=> [...prevData, ...result.products]);
                setLoading(false)
           }
             
            
        
            } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    useEffect(()=> {
        fetchImages();
    },[count])

    useEffect(()=> {
        if(products && products.length === 100) setDisabledButton(true)
    },[products])



    if(loading){
        return <div>Please wait : data is loading</div>
    }

    const increase=()=>{
    setCountOne(countOne + 1)       
    }

    return(

        <div className="load-more-container">

            <div className="product-container">
                {
                    products && products.length ? 
                     products.map((item,index)=> (
                        <div className="product" key={index}>
                            <img src={item.thumbnail}
                            alt={item.title} />
                            <p>{item.title}</p>

                        </div>
                     )): null
                }

            </div>
            <div className="button-container">
                  <button onClick={()=> setCount(count + 1)} 
                  disabled={disabledButton} >
                    Load more Products</button>
                    {
                        disabledButton ? <p>You have reached to 100 Products</p>
                    :null }
            </div>
            
                              <button onClick={increase}>increase count</button>
                              <p>Count : {countOne} </p>
        </div>
    );

 }