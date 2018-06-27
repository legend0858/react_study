import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Clock /><Clock /><Clock />
    </div>,
    document.getElementById('root')
);
