import React, { useState, useEffect } from 'react';
import './RandomShloks.css' ;
import reload_icon from '../Assets/refresh-arrow.png';
import Twitter_icon from '../Assets/Twitter.png';
import shloksData from '../RandomShloks/shloks.json';

const RandomShlok = () => {

    let shloks = []

    async function loadShloks() {
      const response = await fetch('');
      shloks = shloksData;
    }

    // Creating useState variable
    const [shlok, setShlok] = useState({
      text: "श्री गणेशाय नमः",
      chapter_verse: "Shri Krishna",
    });
    
    

    const random  = () => {
      const select = shloks[Math.floor(Math.random()*shloks.length)]
      setShlok(select);
    }

    const Twitter = () => {
      window.open(`https://twitter.com/intent/tweet?text=${shlok.text} - ${shlok.chapter_verse}`);
    }
    
    loadShloks();
    return (
      <div>
        {/* <div id="google_translate_element"></div> */}
        <div className='container'>
            <div className='shlok'>
                {shlok.text}
            </div>
            <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {shlok.chapter_verse}</div>
                <div className="icons">
                    <img className="img1" src={reload_icon} alt="" onClick={()=>{random()} }></img>
                    <img className="img2" src={Twitter_icon} alt="" onClick={()=>{Twitter()}} ></img>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default RandomShlok;