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

                .name1 { 
                    font-family: Oswald,sans-serif;
                    font-size: 2rem;
                    color: #1446A0;
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
         <div><head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link></head>       
         <body>
         <div id='main'>
         <article class="name1">
               You requested to swap {this.props.class} for {this.props.request}. We'll let you know when there's a match!
           </article>
         </div>
       </body></div>
       </Style>
        ;}
        else return <body><div id='main'><article><Form user = {this.props.user}/></article></div></body>;}}
