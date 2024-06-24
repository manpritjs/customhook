import {useState, useEffect} from 'react'

const useFetchServer = (url) => {
  const [st, setSt] = useState("")
  useEffect(() =>{
    async function getData(){
    const response = await fetch(url)
    const data = await response.text();
    setSt(data)
  }
  getData()
  },[])
  return st;
}
export default useFetchServer;