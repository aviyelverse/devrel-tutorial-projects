import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        //Using state by overriding the constructors
        //Everytime you change the state it re-renders the application
        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(+1)}>+</button>
            </div>
        )
    }

    // Use this state while only setting the count to zero like
    // this.setState({ count: 0 })
    //There is a bug here
    //changeCount(amount) {
    //    this.setState({ count: this.state.count + amount })  // There is a bug here ... setState is an ASYNC function
    //   this.setState({ count: this.state.count + amount }) // If two setState is added it adds two and subs two while counting
    //}


    changeCount(amount) {
        this.setState(prevState => { return { count: prevState.count + amount } })

        // If setState is added again it increment and decrement the value by another 1
        // this.setState(prevState => { return { count: prevState.count + amount } })
    }

}

export default Counter;