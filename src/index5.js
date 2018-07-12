import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input1:"张三"
        }
    }

    clickHandler(e,str){
        e.preventDefault();
        console.log(this,str);
    }

    changeHandler(e){
        this.setState({input1:e.target.value});
    }

    render(){
        return (
            <div>
                <a href="http://www.baidu.com" onClick={(e) => this.clickHandler(e,"abc")}>Click</a><br/>
                <input type="text" value={this.state.input1} onChange={(e) => this.changeHandler(e)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
