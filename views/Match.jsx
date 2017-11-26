var React = require('react');
import Style from 'style-it';

export default class Matches extends React.Component {

    render() {
        if(this.props.match) {
        return <Style>
            
            {`
            
                #main2 {
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
                    background: #FFFFFF;
                    flex: 2 1 100%;
                    order: 0;
                    max-width: 100%;
                    min-width: 100%;
                }
             
                /* Too narrow to support three columns */
                @media all {
                    #main, #page {
                        flex-direction: column;
                    }
            
                    #main2 > article2, #main > nav, #main > aside {
                    /* Return them to document order */
                        order: 0;
                    }
              `}     
         <body>
         <div id='main2'>
         <article2>
                You have been matched with {this.props.matchName}. You can contact your match at {this.props.match}. Make the swap happen! Good luck!
           </article2>
         </div>
       </body>
       </Style>
        
        
        ;}
        else return <body><p>No matches yet!</p></body>;}}
