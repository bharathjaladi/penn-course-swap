var React = require('react');
import Style from 'style-it';
import Form from './Form.jsx';
import Matches from './Matches.jsx';
import NotLoggedIn from './NotLoggedIn.jsx';
import Pendings from './Pendings.jsx';

const bodyStyle = {
  backgroundColor: '#F0F8FF',
  margin: '0'
}

const mainText = {
  fontSize: '3.4em',
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
        height: 2.05em;
        background: rgba(20,70,160, 0.1);
      }

      .name1 { 
          font-family: Oswald,sans-serif;
          font-size: 1em;
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

    #main1 {
        min-height: 100px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row;
    }
 
    #main1 > article1 {
        margin: 12px;
        padding: 10px;
        border-radius: 15pt;
        background: rgba(20,70,160, 0.1);
        flex: 1 1 50%;
        order: 2;
    }
 
    /* Too narrow to support three columns */
    @media all and (max-width: 640px) {
        #main1, #page {
            flex-direction: column;
        }

        #main1 > article1 {
        /* Return them to document order */
            order: 0;
        }
    `}
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link></head>
    <body style={bodyStyle}><div className="header"><div className="name1"><p className="header1">Hi, {this.props.user.name}!</p><p className="header2">Done swapping for now? <a className="name1" href="/logout">Log out</a>.</p></div><div className="clear"/></div>
    <div style = {mainText}><span style = {mainText1}>Penn</span><span style = {mainText2}>Course</span><span style = {mainText3}>Swap</span></div>
    <div id="main1">
    <article1><Pendings user = {this.props.user} classOne = {this.props.classOne} classTwo = {this.props.classTwo} classThree = {this.props.classThree} classIntoOne = {this.props.classIntoOne} classIntoTwo = {this.props.classIntoTwo} classIntoThree = {this.props.classIntoThree} matchOne = {this.props.matchOne} matchTwo = {this.props.matchTwo} matchThree = {this.props.matchThree}/></article1>
    <article1><Matches user = {this.props.user} classOne = {this.props.classOne} classTwo = {this.props.classTwo} classThree = {this.props.classThree} classIntoOne = {this.props.classIntoOne} classIntoTwo = {this.props.classIntoTwo} classIntoThree = {this.props.classIntoThree} matchOne = {this.props.matchOne} matchTwo = {this.props.matchTwo} matchThree = {this.props.matchThree} matchOneName = {this.props.matchOneName} matchTwoName = {this.props.matchTwoName} matchThreeName = {this.props.matchThreeName}/></article1>
    </div></body></div></Style>;}

  else {return <NotLoggedIn/>;}
  }
}

module.exports = HomePage;