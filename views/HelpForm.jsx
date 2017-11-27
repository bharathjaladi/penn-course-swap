var React = require('react');
var axios = require('axios')
var purecss = require('purecss');
import Style from 'style-it';

export default class HelpForm extends React.Component {
    
  render () {
   return (
     <Style>
       {`

    a {
    text-decoration:  none;
    color: white;
    font-family: Oswald,sans-serif;
    }
       .oswald3 {
          font-family: Oswald,sans-serif;
          color: white;
          background-color: #39ac39;
       }

       .pure-test {
        text-align: center;
        padding-top: 0.35em;
      }

      .numberCircle {
        border-radius: 50%;
        behavior: url(PIE.htc); /* remove if you don't care about IE8 */
    
        width: 1.3em;
        height: 1.3em;
        padding: 0.3em;
        
        background: #42CAFD;
        color: #F0F8FF;
        text-align: center;
        display: inline-block;
        
        font: 1.2em Oswald, sans-serif;
        margin: 0 auto;
    }
  
    .info {
      display: inline-block;
      margin: 0 auto;
      padding: 1em;
      font: 1.7vw Oswald, sans-serif;
      color: #1446A0;
      margin: 0 auto;
    }
  
    .test {
      text-align: justify;
      display: inline-block;
      margin: 0 auto;
    }
  
    .awesome2 {
      margin: 0 auto;
      font: 1.7em Oswald, sans-serif;
      color: #1446A0;
      margin: 0 auto;
    }
    
    .overlay {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      transition: opacity 500ms;
      visibility: hidden;
      opacity: 0;
    }
    .overlay:target {
      visibility: visible;
      opacity: 1;
    }
    
    .popup {
      margin: 70px auto;
      padding: 20px;
      background: #F0F8FF;
      border-radius: 5px;
      width: 90%;
      position: relative;
      transition: all 5s ease-in-out;
    }
    
    .popup h2 {
      margin-top: 0;
      color: #333;
      font-family: Tahoma, Arial, sans-serif;
    }
    .popup .close {
      position: absolute;
      top: -5px;
      right: 30px;
      font-weight:lighter;
      transition: all 200ms;
      font-size: 60px;
      text-decoration: none;
      color: #333;
    }
    .popup .close:hover {
      color: #1446A0;
    }
    .popup .content {
      max-height: 30%;
      overflow: auto;
    }
    
    @media screen and (max-width: 700px){
      .box{
        width: 70%;
      }
      .popup{
        width: 70%;
      }
    }
       `}
     <div>
     <head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /><link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossOrigin="anonymous" /></head>
    <div>
  <form className="pure-form pure-form-aligned">
  <fieldset>
  <div className="pure-test">
      <button className="pure-button pure-input-rounded oswald3"><a href="#tips">Yes!</a></button>
  </div>
</fieldset>
</form>
<div id="tips" className="overlay">
	<div className="popup">
		<h2><p className="awesome2">Here are some helpful tips:</p></h2>
		<a className="close" href="/">&times;</a>
		<div className="content">
    <div className='center'>
<div className="test">
<div><div className="numberCircle">1</div><p className="info">Penn Course Swap does NOT make any swaps for you. It simply matches you with students who you could swap with.</p></div>
<div><div className="numberCircle">2</div><p className="info">You have to reach out to your matches and figure out how you can swap courses with them.</p></div>
<div><div className="numberCircle">3</div><p className="info">Swapping courses might involve going on Penn InTouch and dropping/adding courses 
 simultaneously with your match.</p></div>
<div><div className="numberCircle">4</div><p className="info">Penn Course Swap can make no guarantees, but aims to help you try and find students to swap courses with.</p>
<div><div className="numberCircle">5</div><p className="info">For best results, make sure to
 submit course names in the EXACT format specified (with capital letters and dashes).</p></div></div>
</div></div>
		</div>
	</div>
</div>
             </div></div></Style>
   )
  }
 }