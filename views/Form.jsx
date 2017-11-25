var React = require('react');
import 'whatwg-fetch';
import queryString from 'query-string';

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
   fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: queryString.stringify({user: this.props.user.emails[0].value, out: this.state.out, into: this.state.into})})
  }
 
  render () {
   return (
    
    <div>
                <form method="post" action="/">
                    Class You Want To Trade Out Of (e.g. "ACCT-101-003"):<br/>
                    <input type="text" name="out" value={this.state.out} onChange={this.handleChangeOut}/><br/>
                    Class You Want To Trade Into (e.g. "ACCT-102-002");<br/>
                    <input type="text" name="into" value={this.state.into} onChange={this.handleChangeInto}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
             </div>
   )
  }
 }