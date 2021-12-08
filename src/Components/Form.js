import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             topic:'react'
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    
    render() {
        return (
            <form>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username}
                 onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>


                </select>

                
            </div>
            </form>
        )
    }
}

export default Form
