import React from 'react';
import './Home.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import News from '../News/News';
import Newsletter from '../Newsletter/Newsletter';



const Home = () => {

  return (
    <>
    <Slide>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(/assets/background.jpg` }}>
            <span><h1>All Your Favourite News At One Place</h1></span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(/assets/background2.jpg` }}>
            <span><h1>All Your Favourite News At One Place: Entertainment News</h1></span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(/assets/background3.jpg` }}>
            <span><h1>All Your Favourite News At One Place: Political News</h1></span>
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(/assets/background4.jpg` }}>
            <span><h1>All Your Favourite News At One Place: Sports News</h1></span>
        </div>
    </div>
</Slide>

<News/>
<Newsletter/>

</>
  )
}

export default Home