var React = require('react');
import Style from 'style-it';

const bodyStyle = {
  backgroundColor: '#F0F8FF'
}

const mainText = {
  paddingTop: '1em',
  fontSize: '6.5em',
  textAlign: 'center',
  fontFamily: 'Oswald,sans-serif',
};

const mainText1 = {
  color: '#42CAFD'
};

const mainText2 = {
  color: '#1098F7'
};

const mainText3 = {
  color: '#1446A0'
};

class NotLoggedIn extends React.Component {
  render() {
    return <Style>
    {`
      a {
      text-decoration:  none;
      }

      .loginBtn {
        box-sizing: border-box;
        position: relative;
        /* width: 13em;  - apply for fixed size */
        padding: 0 15px 0 46px;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 1.1em;
        color: #FFF;
        text-align: center;
        display: inline-block;
        margin: 0 auto;
        margin: 0.2em 0.5em 0.2em 0.2em;
      }
      .loginBtn:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 35px;
        height: 100%;
      }
      .loginBtn:focus {
        outline: none;
      }
      .loginBtn:active {
        box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
      }
      
      
      .loginBtn--google {
        font-family: "Roboto", Roboto, arial, sans-serif;
        background: #4285F4;
      }
      .loginBtn--google:before {
        border-right: #376DC8 1px solid;
        background: url('https://image.ibb.co/nBVTJR/nexus2cee_new_google_icon.png') 2px 2px no-repeat;
        background-size: 30px;
      }
      .loginBtn--google:hover,
      .loginBtn--google:focus {
        background: #3C79DE;
      }

      .loginBtn2 {
        box-sizing: border-box;
        position: relative;
        width: 12.1em;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 1.1em;
        color: #FFF;
        text-align: center;
        display: inline-block;
        margin: 0 auto;
        margin: 0.2em 0.5em 0.2em 0.2em;
      }
      .loginBtn2:focus {
        outline: none;
      }
      .loginBtn2:active {
        box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
      }
      
      
      .loginBtn2--google {
        font-family: "Roboto", Roboto, arial, sans-serif;
        background: #4285F4;
      }
      .loginBtn2--google:hover,
      .loginBtn--google:focus {
        background: #3C79DE;
      }
      .footer {
        
            height:24px; // Replace with the height your footer should be
            width: 100%; // Don't change
            background-image: none;
            background-repeat: repeat;
            background-attachment: scroll;
            background-position: 0% 0%;
            position: fixed;
            bottom: 0pt;
            left: 0pt;
            padding-bottom: 0.2em;
        
        }   
        
        .footer_contents {
        
            text-align: center;
            font-size: 18px;
            display: block;
            margin: 0 auto;
            color: #1098F7;
            font-family: Oswald, sans-serif;
        
        }
        
        .footer-link {
          color: #1446A0;
        }


    .center {
      
      margin: 0 auto;
      text-align: center;
      
    }

    .numberCircle {
      border-radius: 50%;
      behavior: url(PIE.htc); /* remove if you don't care about IE8 */
  
      width: 1.6em;
      height: 1.6em;
      padding: 0.3em;
      
      background: #42CAFD;
      color: #F0F8FF;
      text-align: center;
      display: inline-block;
      
      font: 1.5em Oswald, sans-serif;
      margin: 0 auto;
  }

  .info {
    display: inline-block;
    margin: 0 auto;
    padding: 1em;
    font: 2vw Oswald, sans-serif;
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
    font: 2.5em Oswald, sans-serif;
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
    width: 40%;
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
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
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
    
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link></head><body style = {bodyStyle}>
  <div style = {mainText}><span style = {mainText1}>Penn</span><span style = {mainText2}>Course</span><span style = {mainText3}>Swap</span></div><br/>
  <div className='center'><a href='/login/google'><button className="loginBtn loginBtn--google">Sign in with Google</button></a><a href='#help'><button className="loginBtn2 loginBtn2--google">How does it work?</button></a></div>
<div id="help" className="overlay">
	<div className="popup">
		<h2><p className="awesome2">How it works:</p></h2>
		<a className="close" href="/">&times;</a>
		<div className="content">
    <div className='center'>
<div className="test">
<div><div className="numberCircle">1</div><p className="info">Sign in with your Penn Google account</p></div>
<div><div className="numberCircle">2</div><p className="info">Enter the courses you want to swap</p></div>
<div><div className="numberCircle">3</div><p className="info">Check back to see if you have matches</p>
<div><div className="numberCircle">4</div><p className="info">Reach out to your matches and swap!</p></div></div>
</div></div>
		</div>
	</div>
</div>
</body><div className="footer">

    <div className="footer_contents">Created by <a className="footer-link" href="http://bharathjaladi.com">Bharath Jaladi</a>. Questions or concerns? Shoot me an <a className="footer-link" href="mailto:bharathjaladi98@gmail.com">email</a>.</div>

</div></div></Style>;}
}

module.exports = NotLoggedIn;