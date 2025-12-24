import axios from 'axios';
import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleFecth = async () => {
        setLoading(true)
          try {
              const response = await axios.get(`https://jsonplaceholder.typicode.com/${url}`)
              setData(response.data)
              setLoading(false)
          } catch (error) {
              setError("Plse check your nwetwork")
              setLoading(false)
          }
    }
    useEffect(() => {
       handleFecth() 
    }, [])
    
  return  {data:data, error: error, loading:loading}
}

export default useFetch
