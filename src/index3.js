import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

class Avatar extends React.Component {
    render(){
        return (
            <img src={this.props.user.avatarUrl} alt={this.props.user.name} className="Avatar"/>
        )
    }
}

class UserInfo extends React.Component {
    render(){
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user}/>
                <div className="UserInfo-name">{this.props.user.name}</div>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        )
    }
}

const author = {avatarUrl:'http://placekitten.com/g/64/64',name:'Hello LiuYue'};

ReactDOM.render(
    <App author={author} text="I hope you enjoy learning React!" date={new Date()} />,
    document.getElementById('root')
);
