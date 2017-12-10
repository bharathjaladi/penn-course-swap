var React = require('react');
import Style from 'style-it';
import ConfirmForm1 from './ConfirmForm1.jsx';
import ConfirmForm2 from './ConfirmForm2.jsx';
import ConfirmForm3 from './ConfirmForm3.jsx';

export default class Matches extends React.Component {

    render() {
        if (this.props.match) {
            if (this.props.user.classOne === this.props.class && this.props.user.classIntoOne === this.props.classInto) {
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
                                    <p className="name1">Swap Details:<br />You requested to swap {this.props.class} for {this.props.classInto}.
            <br />{this.props.matchName} requested to swap {this.props.classInto} for {this.props.class}.</p>
                                    <p className="name1">You can contact your match at {this.props.match}. Good luck!</p>
                                    <p className="name1">Have you completed this trade?</p>
                                    <ConfirmForm1 matchName={this.props.matchName} />
                                </article>
                            </div>
                        </body></div>
                </Style>;
            }
            else if (this.props.user.classTwo === this.props.class && this.props.user.classIntoTwo === this.props.classInto) {
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
                                    <p className="name1">Swap Details:<br />You requested to swap {this.props.class} for {this.props.classInto}.
        <br />{this.props.matchName} requested to swap {this.props.classInto} for {this.props.class}.</p>
                                    <p className="name1">You can contact your match at {this.props.match}. Good luck!</p>
                                    <p className="name1">Have you completed this trade?</p>
                                    <ConfirmForm2 matchName={this.props.matchName} />
                                </article>
                            </div>
                        </body></div>
                </Style>;
            }
            else {
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
                                    <p className="name1">Swap Details:<br />You requested to swap {this.props.class} for {this.props.classInto}.
        <br />{this.props.matchName} requested to swap {this.props.classInto} for {this.props.class}.</p>
                                    <p className="name1">You can contact your match at {this.props.match}. Good luck!</p>
                                    <p className="name1">Have you completed this trade?</p>
                                    <ConfirmForm3 matchName={this.props.matchName} />
                                </article>
                            </div>
                        </body></div>
                </Style>;
            }
        }
        else if (this.props.matchNum && !this.props.otherMatch1 && !this.props.otherMatch2) {
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
                    <body><div id='main'><article><p className="name1">No matches yet! Check back later to see if you have a match!</p></article></div></body></div>
            </Style>;
        }
        else if (this.props.matchBefore && !this.props.matchNext) {
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
                    <body><div id='main'><article><p className="name1">No more matches yet! Check back later to see if you have another match!</p></article></div></body></div>
            </Style>;
        }

        else return null;
    }
}
