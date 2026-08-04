import { useState, useEffect } from "react"
import axios from 'axios'
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [index, SetIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  async function getPhotos() {
    try{
      const res = await axios.get("https://picsum.photos/v2/list", {
        params:{
          page: index,
          limit: 9
        }
      })
      setData(res.data);
      setLoading(false)
    }
    catch(error){
      console.log("failed fetching data!!; ", error)
    }
  }

  useEffect(function (){
    getPhotos()
  }, [index])

  return (
    <div className="bg-black text-white">
      <Navbar/>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
          <span className="ml-4 text-lg font-semibold">Loading...</span>
        </div>
      ):(
        <div className="w-full flex flex-wrap justify-center gap-1" onClick={getPhotos}>
          {data.map((elem, idx)=>{
            console.log(elem);
            return <Card  key={elem.id} author={elem.author} download_url = {elem.download_url} url={elem.url}/>
          })}
        </div>
      )}
      <div className="w-full flex justify-center gap-10">
        <Button onClick={() => SetIndex(Math.max(index - 1, 1))} name="prev"/>
        <div className="mt-10 mb-5 p-3 font-black">{index}</div>
        <Button onClick={() => SetIndex(index + 1)} name="next"/>
      </div>
    </div>
  )
}

export default App
