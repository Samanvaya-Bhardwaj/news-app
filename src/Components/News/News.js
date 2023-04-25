import {useEffect, useState} from "react"
import axios from "axios"
import './News.css'

function News() {

  const[data, setdata] = useState([]);

  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3d48c08b7909496ebbd23e2f2aacc8ab")
    .then((res)=>{
      console.log(res.data)
      setdata(res.data.articles);
    })
  },[]);



  return (
    <>
    <h1 className="text-center my-5">Today's News</h1>
    <h5 className="text-center">API Call - News Api</h5>
    <div className="App">
      {data.map((post)=>{
        const{source, title, content, author, description, urlToImage} = post;
        return <div className="card my-3  col-md-3"key={source}> 
        <img src={urlToImage} alt="" />
        <h1>{title.slice(0,30).toUpperCase()}</h1>
        <p>{content}</p>
        <p>{description}</p>
        <h4>{author}</h4>
        </div>
      })}
    </div>
    </>
  );
}

export default News;