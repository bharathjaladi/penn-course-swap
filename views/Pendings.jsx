var React = require('react');
import Pending from './Pending.jsx';
import Style from 'style-it';

export default class Pendings extends React.Component {

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
               <Pending user = {this.props.user} class = {this.props.classOne} request = {this.props.classIntoOne}/>
               <Pending user = {this.props.user} class = {this.props.classTwo} request = {this.props.classIntoTwo}/>
               <Pending user = {this.props.user} class = {this.props.classThree} request = {this.props.classIntoThree}/>
       </body>
       </Style>
        
        
        ;}
        }

