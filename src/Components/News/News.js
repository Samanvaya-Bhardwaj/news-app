import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function News() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-09&sortBy=publishedAt&apiKey=API_KEY")
        .then((res)=>{
            setData(res.data.articles);
        })
    },[]);

  return (
    <div className='card'>
      {data.map((post)=>{
        const{source, title, content, author, description, urlToImage} = post;
        return <div className="card" key={source}> 
        <img URL={urlToImage} alt="" />
        <h1>{title.slice(0,15).toUpperCase()}</h1>
        <p>{content}</p>
        <p>{description}</p>
        <h4>{author}</h4>
        </div>
      })}
    </div>
  )
}
