

import React, { useEffect, useState } from 'react'
import './scroll.css'


const ScrollIndicator = ({ url }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [percentage, setPercentage] = useState(0)

    async function FetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
             } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

        useEffect(() => {
        FetchData(url)
    }, [url])

    function handleScrollPercentage() {
        console.log(document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight,
        )

        const height = document.body.scrollTop ||
            document.documentElement.scrollTop;

        const total = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const widthPercent = ((height / total) * 100)
        setPercentage(widthPercent)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage)
        }
    }, [])

    if (error) {
        return <div>error occured ! {error.message}</div>
    }

    if (loading) {
        return <div>Please wait ! currently loading </div>
    }

   // console.log(data)

    return (
        <div >
            <div className='top-container'>
                <h1>Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className='current-progress-bar'
                        style={{ width: `${percentage}%` }}>
                      </div>
                </div>
            </div>

                <div className='data-container'>
                {
                    data && data.length > 0 ?
                        data.map((dataItem, index) => (
                            <div key={index}>{dataItem.title} </div>)
                        ) : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator
