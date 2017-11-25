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
                    border: 1px solid #cccc33;
                    border-radius: 7pt;
                    background: rgba(20,70,160, 0.2);
                    flex: 2 1 50%;
                    order: 2;
                }
             
                header, footer {
                    display: block;
                    margin: 4px;
                    padding: 5px;
                    min-height: 100px;
                    border: 1px solid #eebb55;
                    border-radius: 7pt;
                    background: #ffeebb;
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
              
                    #main > nav, #main > aside, header, footer {
                        min-height: 50px;
                        max-height: 50px;
                    }
                
              `}     
         <body>
         <div id='main'>
           <article>Here are your pending swaps:
                <Pending class = {this.props.classOne}/>
               <Pending class = {this.props.classTwo}/>
               <Pending class = {this.props.classThree}/>
           </article>
           <article>Here are your matched swaps:
               <Match class = {this.props.classOne}/>
               <Match class = {this.props.classOne}/>
               <Match class = {this.props.classOne}/>
           </article>
         </div>
       </body>
       </Style>
        
        
        ;}
        }
