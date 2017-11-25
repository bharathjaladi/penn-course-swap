var React = require('react');
import Style from 'style-it';
import Form from './Form.jsx';

export default class Matches extends React.Component {

    render() {
        if(this.props.class) {
        return <Style>
            
            {`
                body {
                    font: 24px Helvetica;
                    background: #999999;
                }
            
                #main {
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
                    flex: 2 1 130%;
                    order: 0;
                    max-width: 100%;
                    min-width: 100%;
                }
             
                /* Too narrow to support three columns */
                @media all {
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
         <article>
               You requested to swap {this.props.class} for {this.props.request}. We'll let you know when there's a match!
           </article>
         </div>
       </body>
       </Style>
        
        
        ;}
        else return <body><p><Form /></p></body>;}}
