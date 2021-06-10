import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import User from './User';


const UserList = () => {

    const [list, setlist] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    function fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => 
        {setlist(res.data)
        console.log(res)}
        )
        .catch(err => setError(err)); // if there is an error here what you have to do.
    }
 
    fetchData();
  }, []);
    return (
        <div className="list">
           {list.map(el=><User user={el}/> )}

        </div>
    )
}

export default UserList
