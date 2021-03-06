import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThreeScene from './ThreeScene.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import reportWebVitals from './reportWebVitals';


function MobilePage(props) {
  return(
    <React.Fragment>
    
    <span className={(isMobile ? "about-modal-x about-modal-x-mobile" : "about-modal-x")} onClick={props.closeModal}><Link to="/">X</Link></span>
    <div className={(props.open ? "about-modal" : "about-modal-closed")}>
    <div className={(isMobile ? "about-modal-inner about-modal-inner-mobile " : "about-modal-inner ") + (props.green ? "about-modal-inner-no-bg" : "")}>
    
    

    <span className="f32 tl syne x pt50">{props.title}</span>
    <span className="f16 tl mabry about-modal-content">{props.text}</span>

    </div>
    </div>
    </React.Fragment>
    );
}

ReactDOM.render(
  <React.StrictMode>
  	<Router>
  	<Route exact path="/">
    <App />
    </Route>
    
    <Route path="/about">
    <MobilePage open={true} title={"About"} green={true} text={"Rogue On Arrival is a platform that offers both artists and fans the ability to foster a unique and mutually beneficial relationship while also funding the initial growth stages of an artists career. Signup for the waitlist now to get updates and first access."}/>
    </Route>
    <Route path="/music">
    <MobilePage open={true} title={"Music"} text={"ROA only invites talented musicians who truly enjoy engaging with their fans.  Artists on our platform understand that building a meaningful connection is both rewarding and essential to growing a career.  For new fans, this is a great way to discover your next favorite artist.  For current fans, there is an opportunity to have a deeper relationship with the artists you already like."}/>
    </Route>
    <Route path="/slices">
    <MobilePage open={true} title={"Slices"} text={"Artists are assigned a fixed number of what we call “slices” that each hold a USD value. Fans can purchase these slices from the artist for their initial value. Once a fan purchases and owns an artist’s slice, it opens the door to exclusive and unique interactions with that artist.  ROA is also a bid/ask marketplace for these slices, if you buy into an artist early in their career and they become the next big thing, you can sell your slice in the marketplace for a higher price."}/>
    </Route>
    <Route path="/market">
    <MobilePage open={true} title={"Market"} text={"Slices can be bought or sold in a bid-ask marketplace setting. Fans who want to own a specific slice are able to place a bid order. Existing slice holders will be notified immediately if there is a bid order and can either sell or hold on to their respective slice. Fans who own a slice can place it for sale with an asking price. Once a holder lists their slice for their asking price, fans who want the slice are able to buy.  Buying into an artist early can present an opportunity to turn a profit."}/>
    </Route>
    <Route path="/interact">
    <MobilePage open={true} title={"Interact"} text={"Slices grant fans access to participate in exclusive interactions with that specific artist.  Once a fan is a “sliceholder” they are able to engage in private Q&As and intimate videos, attain exclusive merch, submit a beat or graphic design to that artist and much more."}/>
    </Route> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
