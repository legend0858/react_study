import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showTag: true,
            showText: "Hello world",
            showList: [
                "张三",
                "李四",
                "王五"
            ]
        }
    }

    render(){
        return (
            <div>
                {/*判断例子，类似v-if*/}
                {this.state.showTag && <p>{this.state.showText}</p>}

                {/*循环例子，类似v-for*/}
                <ul>
                    {this.state.showList.map((item) =>
                        <li>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
