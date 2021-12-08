import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message;
        if(this.state.isLoggedIn)
        {
            message= <div>Welcome Himalaya</div>
        }
        else
        {
            message= <div>Welcome Guest</div>
        }
        return <div>{message}</div>
        // return (
        //     <div>
        //         <div>Welcome Himalaya</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
