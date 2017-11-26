var React = require('react');
import Style from 'style-it';

export default class Help extends React.Component {

    render() {
        return <Style>
        
        {`

            .name1 { 
                font-family: Oswald,sans-serif;
                font-size: 1em;
                color: black;
                padding: 0.18em;
                margin: 0;
            }
        
        `}   
    <div><head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /></head>       
    <body>
    <div id='main'>
    <article>
        <p className="name1">Penn Course Swap does NOT make any swaps for you. It simply matches you with students who you could swap with. 
        It is up to you to reach out to your matches and figure out how you can swap courses with them (this usually involves going on Penn InTouch and dropping/adding courses 
        simultaneously). Penn Course Swap can make no guarantees that your swaps will work out, but aims to help you try and find students to swap courses with. For best results, make sure to
        submit course names in the EXACT format specified (with capital letters and dashes).</p>
    </article>
    </div>
</body></div>
</Style>;}}