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
    <h1 className="text-center my-5">Latest News</h1>
    <div className="App">
      {data.map((post)=>{
        const{source, title, content, author, description, urlToImage} = post;
        return <div className="card my-3  col-md-3"key={source}> 
        <img src={urlToImage} alt="" />
        <h1>{title.slice(0,20).toUpperCase()}</h1>
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