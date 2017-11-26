var React = require('react');
var axios = require('axios')
import queryString from 'qs';
var purecss = require('purecss');

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
     <div>
     <head><link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous" /></head>
    <div>
                {/* <form method="post" action="/">
                    Class You Want To Trade Out Of:<br/>
                    <input type="text" class="pure-input-rounded" name="out" value={this.state.out} onChange={this.handleChangeOut} placeholder="(e.g. 'ACCT-101-003)'"/><br/>
                    Class You Want To Trade Into (e.g. "ACCT-102-002");<br/>
                    <input type="text" name="into" value={this.state.into} onChange={this.handleChangeInto}/><br/>
                    <input type="submit" value="Submit"/>
                </form> */}
  <form method="post" action="/" class="pure-form pure-form-aligned">
  <fieldset>
  <div class="pure-control-group">
      <label for="out">Class you want to trade out of</label>
      <input id="out" type="text" name="out" value={this.state.out} onChange={this.handleChangeOut} placeholder="e.g. ACCT-101-003" />
  </div>

  <div class="pure-control-group">
      <label for="into">Class you want to trade into</label>
      <input id="into" type="text" name="into" value={this.state.into} onChange={this.handleChangeInto} placeholder="e.g. ACCT-102-001" />
  </div>
  <div class="pure-controls">

      <button type="submit" class="pure-button pure-button-primary pure-input-rounded">Swap!</button>
  </div>
</fieldset>
</form>
             </div></div>
   )
  }
 }