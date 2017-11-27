var React = require('react');
import Style from 'style-it';
import HelpForm from './HelpForm.jsx';

export default class Help extends React.Component {

    render() {
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
    <article><p className = "name1">Want to make the most of Penn Course Swap?</p>
        <HelpForm />
    </article>
    </div>
</body></div>
</Style>;}}