var React = require('react');
import Match from './Match.jsx';
import Pending from './Pending.jsx';
import Style from 'style-it';

export default class Matches extends React.Component {

    render() {
        return <Style>
            
            {`
                body {
                    font: 24px Helvetica;
                    background: #999999;
                }
            
                #main2 {
                    min-height: 100px;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-flow: row;
                }
             
                #main2 > article2 {
                    margin: 4px;
                    padding: 5px;
                    border: 1px solid #cccc33;
                    border-radius: 7pt;
                    background: rgba(20,70,160, 0.9);
                    flex: 2 1 100%;
                    order: 2;
                }
             
                /* Too narrow to support three columns */
                @media all and (max-width: 640px) {
                    #main, #page {
                        flex-direction: column;
                    }
            
                    #main2 > article2, #main > nav, #main > aside {
                    /* Return them to document order */
                        order: 0;
                    }
                
              `}     
         <body>
            <Match user = {this.props.user} class = {this.props.classOne} match = {this.props.matchOne} matchName = {this.props.matchOneName}/>
            <Match user = {this.props.user} class = {this.props.classTwo} match = {this.props.matchTwo} matchName = {this.props.matchTwoName}/>
            <Match user = {this.props.user} class = {this.props.classTwo} match = {this.props.matchThree} matchName = {this.props.matchThreeName}/>
       </body>
       </Style>
        
        
        ;}
        }

