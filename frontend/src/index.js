import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import SignUp from './sign/signup';

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }

    this.input1 = React.createRef();
    this.input2 = React.createRef();
 
  }
  createUser = async() => {
    
    var x = this.input1.current.value;
    var y = this.input2.current.value;

   
    console.log(JSON.stringify([x,y]));

    await fetch('http://192.168.171.1:8888/createuser',{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify([x,y])
    }).then(e=>e.json().then(r=>console.log("Data Created!")));
  }
 
  render(){
    return(
      <div>
        <SignUp/>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);