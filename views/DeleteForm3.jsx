var React = require('react');
var axios = require('axios')
var purecss = require('purecss');
import Style from 'style-it';

export default class DeleteForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/delete3');
  }

  render() {
    return (
      <Style>
        {`

       .oswald3 {
          font-family: Oswald,sans-serif;
          color: white;
          background-color: red;
       }

       .pure-test {
        text-align: center;
        padding-top: 0.35em;
      }
       `}
        <div>
          <head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /><link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossOrigin="anonymous" /></head>
          <div>
            <form method="post" action="/delete3" className="pure-form pure-form-aligned">
              <fieldset>
                <div className="pure-test">
                  <button type="submit" className="pure-button pure-input-rounded oswald3">Delete</button>
                </div>
              </fieldset>
            </form>
          </div></div></Style>
    )
  }
}