import logo from './logo.svg';
import React, { Component } from 'react';
//import './App.css';
//import UserGreeting from './Components/UserGreeting';
// import Counter from './Components/Counter'
// import Welcome from './Components/Welcome'
// import Message from './Components/Message'
// import Func from './Components/FunctionClick'
// import ClassClick from './Components/ClassClick'
// import EventBind from './Components/EventBind'
// import ParentComponent from './Components/ParentComponent';
//import Ssheet from './Components/Stylesheet'
import Form from './Components/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
       {/* <Ssheet primary={true}/>
         <UserGreeting />
        <ParentComponent />
        <EventBind />

        <Func />
        <ClassClick />
        <Counter />

        <Message />

        <Hello name="Himalaya" />
        <Hello name="Vishal" />
        <Welcome name="Anuj" />   */}

      </div>
    );
  }
}

export default App;
