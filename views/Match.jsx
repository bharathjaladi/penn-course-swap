var React = require('react');
import Style from 'style-it';

export default class Matches extends React.Component {

    render() {
        if(this.props.match) {
            return <Style>
            
            {`

                .name1 { 
                    font-family: Oswald,sans-serif;
                    font-size: 1em;
                    color: #1098F7;
                    padding: 0.18em;
                    margin: 0;
                }
            
            `}   
        <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
        <body>
        <div id='main'>
        <article>
            <p className="name1">You have been matched with {this.props.matchName}.</p>
            <p className="name1">Swap Details:<br/>You requested to swap {this.props.class} for {this.props.classInto}.
            <br/>{this.props.matchName} requested to swap {this.props.classInto} for {this.props.class}.</p>
            <p className="name1">You can contact your match at {this.props.match}. Good luck!</p>
        </article>
        </div>
    </body></div>
    </Style>;}
        else return <Style>
        
        {`

            .name1 { 
                font-family: Oswald,sans-serif;
                font-size: 1em;
                color: #1098F7;
                padding: 0.18em;
                margin: 0;
            }
        
        `}   
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
    <body><div id='main'><article><p className="name1">No matches yet! Request some more swaps and check back later to see if you have a match!</p></article></div></body></div>
</Style>;}}
