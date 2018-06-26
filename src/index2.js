import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render(){
        return <h1>hello,{this.props.name}</h1>
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Welcome name="liuyue"></Welcome>
                <Welcome name="zhangrui"></Welcome>
                <Welcome name="liuyuxin"></Welcome>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
