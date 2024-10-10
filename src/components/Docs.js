import React, { useState, useEffect } from 'react';
import data from '../DataSet/DocsData.json';
import './Docs.css';

export default function Docs() {
  const [infotitle, setTitle] = useState(data[0].name);
  const [bgimage, setimage] = useState(data[0].image_link);
  const [info, setinfo] = useState(data[0].information);
  const [idnumber, setid] = useState(data[0].id);

 function changeNext(){
    data.forEach((element) => {
      if (element.id === idnumber+1) {
        setTitle(element.name);
        setinfo(element.information);
        setimage(element.image_link);
        setid(element.id);
        return;
      }
    })
   }
   function changePrev(){
    data.forEach((element) => {
      if (element.id === idnumber-1) {
        setTitle(element.name);
        setinfo(element.information);
        setimage(element.image_link);
        setid(element.id);
        return;
      }
    });
   }
  
  useEffect(() => {
    const navlink = document.querySelectorAll('.doc-link-btn');
    navlink.forEach((ClickedButton) => {
      ClickedButton.addEventListener('click', () => {
        let linking = ClickedButton.innerHTML;
        setTitle(linking);
        setinfo('Loading.. please wait');
        data.forEach((element) => {
          if (element.name === linking) {
            setinfo(element.information);
            setimage(element.image_link);
            setid(element.id);
          }
        });
      });
    });
    
    return () => {
      navlink.forEach((ClickedButton) => {
        ClickedButton.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="doc-container">
      <input type="checkbox" id="checkbox-2" className="check-boxes" />
      <div className="doc-menu">
        <label for="checkbox-2" className="check-pull-btn">
        </label>
        <h3>DOCUMENTATION MENU</h3>
        {data.map((element) => (
          <button key={element.id} className="doc-link-btn">
            {element.name}
          </button>
          
        ))}
      </div>
      <div className="info-container">
        <div className="info-left">
          <h3 className="info-heading">{infotitle} Overview</h3>
          <p className="info-paragraph">
            {info}
            <a className="head-button learn-more" href="/">
              Learn More
            </a>
          </p>
          <label for="checkbox-2" className='explore-btn' >Explore All</label>
        </div>
        <div className="info-right">
          <img src={bgimage} className="topic-image" alt="this is topic" />
          <div className="next-prev">
            <button onClick={changePrev}>&#10094; Prev</button>
            <span>{idnumber}</span>
            <button onClick={changeNext} >Next &#10095;</button>
          </div>
        </div>
      </div>
      <span className="water-mark">Outer Space Celestial Objects</span>
    </div>
  );
}
