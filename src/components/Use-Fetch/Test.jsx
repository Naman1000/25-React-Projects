import useFetch from "."

export default function UseFetchHookTest(){


    const {data, error, pending} = useFetch("https://dummyjson.com/products", {});

    console.log(error,data,pending)

     return(
        <div>
            <h1>Use Fetch Hookgbdf</h1>
            {pending ? <h3>Please wait ! Pending now</h3> : null}

            {error ? <h3>error occured </h3>: null}
            
            { data && data.products && data.products.length ? 
             data.products.map((dataItem)=> (
                    <p key={dataItem.key}>{dataItem.title}</p> 
                )) : null 
            }
            <h2>hiiiii</h2>


        </div>
    )
}