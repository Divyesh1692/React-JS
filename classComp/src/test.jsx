import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.num
        };
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    
    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

}

export default Test;
