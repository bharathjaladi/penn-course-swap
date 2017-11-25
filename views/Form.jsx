var React = require('react');
import 'whatwg-fetch';
import queryString from 'query-string';

export default class Form extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(event){ 
   event.preventDefault();
   fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: queryString.stringify({email:'bjaladi@seas.upenn.edu', out: this.state.out, into: this.state.into}))
  };
 
  render () {
   return (
    
    <div>
                <form method="post" action="/">
                    Class You Want To Trade Out Of (e.g. "ACCT-101-003"):<br/>
                    <input type="text" name="out"/><br/>
                    Class You Want To Trade Into (e.g. "ACCT-102-002");<br/>
                    <input type="text" name="into"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
             </div>
   )
  }
 }