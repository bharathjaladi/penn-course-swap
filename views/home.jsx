var React = require('react');
import Style from 'style-it';
var User = require('../User');

const bodyStyle = {
  backgroundColor: '#F0F8FF'
}

const mainText = {
  paddingTop: '150px',
  fontSize: '100px',
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

const loginStyle = {
  color: '#1446A0',
  paddingTop: '150px',
  fontSize: '100px',
  textAlign: 'center'
};

class HelloMessage extends React.Component {

  render() {
  if(this.props.user) { 
    return <div>Hello {this.props.user.displayName}. Please <a href="https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000">log out</a>.</div>;}
  else {return <Style>
    {`
      a {
      text-decoration:  none;
      }

      .loginBtn {
        box-sizing: border-box;
        position: relative;
        /* width: 13em;  - apply for fixed size */
        margin: 0.2em;
        padding: 0 15px 0 46px;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 16px;
        color: #FFF;
        text-align: center;
        display: block;
        margin: 0 auto;
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
    `}
    
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link></head><body style = {bodyStyle}>
  <div style = {mainText}><span style = {mainText1}>Penn</span><span style = {mainText2}>Course</span><span style = {mainText3}>Swap</span></div><br/>
  <a href='/login/google'><button class="loginBtn loginBtn--google">Sign in with Google</button></a></body></div></Style>;}
  }
}

module.exports = HelloMessage;