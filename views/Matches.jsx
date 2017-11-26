var React = require('react');
import Match from './Match.jsx';
import Help from './Help.jsx';
import Style from 'style-it';

export default class Matches extends React.Component {

    render() {
        return <Style>
            
            {`
                body {
                    font: 1.5em Helvetica;
                    background: #999999;
                }
            
                #main {
                    min-height: 100px;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-flow: row;
                }
             
                #main > article {
                    margin: 4px;
                    padding: 5px;
                    flex: 2 1 100%;
                    order: 2;
                    border-radius: 7pt;
                    background: #F0F8FF;
                }
             
                /* Too narrow to support three columns */
                @media all and (max-width: 640px) {
                    #main, #page {
                        flex-direction: column;
                    }
            
                    #main > article, #main > nav, #main > aside {
                    /* Return them to document order */
                        order: 0;
                    }
                
              `}     
         <body>
            <Match user = {this.props.user} class = {this.props.classOne} classInto = {this.props.classIntoOne} match = {this.props.matchOne} matchName = {this.props.matchOneName}/>
            <Match user = {this.props.user} class = {this.props.classTwo} classInto = {this.props.classIntoTwo} match = {this.props.matchTwo} matchName = {this.props.matchTwoName}/>
            <Match user = {this.props.user} class = {this.props.classThree} classInto = {this.props.classIntoThree} match = {this.props.matchThree} matchName = {this.props.matchThreeName}/>
            <Help />
       </body>
       </Style>
        
        
        ;}
        }

