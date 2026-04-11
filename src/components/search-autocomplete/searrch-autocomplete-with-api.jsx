import { useEffect, useState } from "react"
import Suggestions from "./Suggestions";

export default function SearchAutoComplete(){

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState(null)

    function handleChange(e){
        const query = e.target.value.toLowerCase()
        setSearchParams(query);
        if(query.length > 1){
            const filteredData = users && users.length ?
            users.filter((item)=> item.toLowerCase().indexOf(query) > -1) 
            : [];
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }else{
            setShowDropdown(false)
        }
         }

    function handleClick(e){
        console.log(e.target.innerText)
        setShowDropdown(false)
        setSearchParams(e.target.innerText)
        setFilteredUsers([])
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json()
            
            if(data &&  data.users && data.users.length){
                setUsers(data.users.map(userItem=> userItem.firstName));
                setLoading(false)
                setError(null)
            }
        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchListOfUsers()
    },[])

    console.log(users, filteredUsers)

    return(
        <div className="search-autocomplete-container">
           {
            loading ? <h1>Loading data ? Please wait </h1>
           :
            <input value={searchParams} 
            onChange={handleChange}
             name="search-users" 
             placeholder="Search Users here ..." 
             />
           }

            {   
                showDropdown && <Suggestions 
                handleClick={handleClick}
                data={filteredUsers} />
            }


        </div>
    )
}