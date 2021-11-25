import React, { Component } from 'react';
import { ThemeContext } from './App';
// It is harder to deal with context in class component
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
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(+1)}>+</button>
                        <br />
                        <button style={style} onClick={() => this.resetzero(0)}> Reset Counter</button>
                    </div>
                )}
            </ThemeContext.Consumer>

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

    resetzero() {
        this.setState(() => { return { count: 0 } })
    }

}

export default Counter;