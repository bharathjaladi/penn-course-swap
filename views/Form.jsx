var React = require('react');
var axios = require('axios')
var purecss = require('purecss');
import Style from 'style-it';

export default class Form extends React.Component {
  constructor(props){
   super(props);
   this.state = {
    out: '',
    into: ''
  }
   this.handleChangeOut = this.handleChangeOut.bind(this);
   this.handleChangeInto = this.handleChangeInto.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOut(event) {
    this.setState({out: event.target.value});
  }

  handleChangeInto(event) {
    this.setState({into: event.target.value});
  }
 
  handleSubmit(event){ 
   event.preventDefault();
   axios.post('/', {out: this.state.out, into: this.state.into});
  }
 
  render () {
   return (
     <Style>
       {`
       .oswald {
        font-family: Oswald,sans-serif;
        color: #1098F7;
       }

       .oswald2 {
          font-family: Oswald,sans-serif;
       }

       .oswald3 {
          font-family: Oswald,sans-serif;
          color: white;
          background-color: #1098F7;
       }
       .pure-control-group {
         text-align: center;
       }

       .pure-test {
        text-align: center;
        padding-top: 0.35em;
      }
       `}
     <div>
     <head><link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" /><link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossOrigin="anonymous" /></head>
    <div>
  <form method="post" action="/" className="pure-form pure-form-aligned">
  <fieldset>
  <div className="pure-control-group">
      <label htmlFor="out" className="oswald">Class you want to swap out</label>
      <input id="out" type="text" name="out" className="oswald2" value={this.state.out} onChange={this.handleChangeOut} placeholder="e.g. ACCT-101-003" />
  </div>

  <div className="pure-control-group">
      <label htmlFor="into" className="oswald">Class you want to swap in</label>
      <input id="into" type="text" name="into" className="oswald2" value={this.state.into} onChange={this.handleChangeInto} placeholder="e.g. ACCT-102-001" />
  </div>
  <div className="pure-test">
      <button type="submit" className="pure-button pure-input-rounded oswald3">Swap!</button>
  </div>
</fieldset>
</form>
             </div></div></Style>
   )
  }
 }