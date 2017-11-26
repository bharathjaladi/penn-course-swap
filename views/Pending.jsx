var React = require('react');
import Style from 'style-it';
import Form from './Form.jsx';
import DeleteForm1 from './DeleteForm1.jsx';
import DeleteForm2 from './DeleteForm2.jsx';
import DeleteForm3 from './DeleteForm3.jsx';

export default class Matches extends React.Component {

    render() {
        if(this.props.class) {
        if(this.props.user.classOne === this.props.class && this.props.user.classIntoOne === this.props.request) {
            return <Style>
                
                {`
                    body {
                        font: 24px Helvetica;
                        background: #999999;
                    }

                    .name1 { 
                        font-family: Oswald,sans-serif;
                        font-size: 1em;
                        color: #1098F7;
                        padding: 0.18em;
                        margin: 0;
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
                        flex: 0 1 auto;
                        order: 0;
                        border-radius: 7pt;
                        background: #F0F8FF;
                    }
                
                    /* Too narrow to support three columns */
                    @media all and (max-width: 640px) {
                        #main, #page {
                            flex-direction: column;
                            flex: 0 1 auto;
                        }
                
                        #main > article {
                        /* Return them to document order */
                            order: 0;
                        }
                    
                `}   
            <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
            <body>
            <div id='main'>
            <article>
                <p className="name1">You requested to swap {this.props.class} for {this.props.request}. We'll let you know when there's a match!</p>
                <DeleteForm1 user = {this.props.user} class = {this.props.class} request = {this.props.request}/>
            </article>
            </div>
        </body></div>
        </Style>;}
        else if(this.props.user.classTwo === this.props.class && this.props.user.classIntoTwo === this.props.request) {
            return <Style>
                
                {`
                    body {
                        font: 24px Helvetica;
                        background: #999999;
                    }

                    .name1 { 
                        font-family: Oswald,sans-serif;
                        font-size: 1em;
                        color: #1098F7;
                        padding: 0.18em;
                        margin: 0;
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
                        flex: 0 1 auto;
                        order: 0;
                        border-radius: 7pt;
                        background: #F0F8FF;
                    }
                
                    /* Too narrow to support three columns */
                    @media all and (max-width: 640px) {
                        #main, #page {
                            flex-direction: column;
                            flex: 0 1 auto;
                        }
                
                        #main > article {
                        /* Return them to document order */
                            order: 0;
                        }
                    
                `}   
            <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
            <body>
            <div id='main'>
            <article>
                <p className="name1">You requested to swap {this.props.class} for {this.props.request}. We'll let you know when there's a match!</p>
                <DeleteForm2 user = {this.props.user} class = {this.props.class} request = {this.props.request}/>
            </article>
            </div>
        </body></div>
        </Style>;}
        else {
            return <Style>
                
                {`
                    body {
                        font: 24px Helvetica;
                        background: #999999;
                    }

                    .name1 { 
                        font-family: Oswald,sans-serif;
                        font-size: 1em;
                        color: #1098F7;
                        padding: 0.18em;
                        margin: 0;
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
                        flex: 0 1 auto;
                        order: 0;
                        border-radius: 7pt;
                        background: #F0F8FF;
                    }
                
                    /* Too narrow to support three columns */
                    @media all and (max-width: 640px) {
                        #main, #page {
                            flex-direction: column;
                            flex: 0 1 auto;
                        }
                
                        #main > article {
                        /* Return them to document order */
                            order: 0;
                        }
                    
                `}   
            <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
            <body>
            <div id='main'>
            <article>
                <p className="name1">You requested to swap {this.props.class} for {this.props.request}. We'll let you know when there's a match!</p>
                <DeleteForm3 user = {this.props.user} class = {this.props.class} request = {this.props.request}/>
            </article>
            </div>
        </body></div>
        </Style>;}
       
    }
        else return <body><div id='main'><article><Form user = {this.props.user}/></article></div></body>;}}
