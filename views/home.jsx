var React = require('react');
import Style from 'style-it';
import Form from './Form.jsx';
import Matches from './Matches.jsx';
import Match from './Match.jsx';
import NotLoggedIn from './NotLoggedIn.jsx';

const bodyStyle = {
  backgroundColor: '#F0F8FF',
  margin: '0'
}

class HomePage extends React.Component {

  render() {
  if(this.props.user) { 
    return <Style> 

    {`
      a {
      text-decoration:  none;
      }

      body {
        background: #F0F8FF;
      }
      
      .header {
        height: 2.7em;
        background: rgba(20,70,160, 0.1);
      }

      .name1 { 
          font-family: Oswald,sans-serif;
          font-size: 2rem;
          color: #1446A0;
        }
      
      .header1 {
        float: left;
        margin: 0.2em 0 0.2em 0.4em;
      }

      .header2 {
        float: right;
        margin: 0.2em 0.4em 0.2em 0;
      }

      .clear {
        clear: both;
      }
    `}
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link></head>
    <body style={bodyStyle}><div className="header"><div className="name1"><p className="header1">Hi, Bharath Jaladi!</p><p className="header2">Done swapping for now? <a className="name1" href="/logout">Log out</a>.</p></div><div className="clear"/></div>
    <br/><Matches classOne = {this.props.classOne} /></body></div></Style>;}

  else {return <NotLoggedIn/>;}
  }
}

module.exports = HomePage;