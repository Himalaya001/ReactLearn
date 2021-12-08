import React from 'react'

const Hello=props=>{
    return (
        <div className="App">
            <h1>Hello {props.name}</h1>
        </div>
    );
    // return React.createElement('div',null,'<h1>Hello</h1>')
}
export default Hello