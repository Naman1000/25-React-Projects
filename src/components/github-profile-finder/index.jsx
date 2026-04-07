
import React, { useEffect, useState } from 'react'
import User from './Card';
import './styles.css'

const GithubProfileFinder = () => {

    const[userName, setUserName] = useState("sangammukherjee");
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
 

    async function fetchGithubUserData(){
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        
        const data = await res.json() 

        if(data){
            setUserData(data)
            setLoading(false) 
            setUserName('')
    }
         console.log(data)
     }
        function handleSubmit(){
            fetchGithubUserData()
         }
     
        useEffect(()=> {
        fetchGithubUserData()
        },[])

    if(loading){
        return <h1>loading data ! Please wait</h1>
    }

  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input name='search-by-username'
        type='text' 
        placeholder='Search github Username..'
        value={userName} 
        onChange={(e)=> setUserName(e.target.value)} />
      
      <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null 
      }
    </div>
  );
}

export default GithubProfileFinder
