import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userList:[
                {
                    name:"张三",
                    sex:"man",
                    isAdmin:true
                },
                {
                    name:"李四",
                    sex:"woman",
                    isAdmin:false
                }
            ]
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.userList);
    }

    changeHandler(e,index){
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        let arr = [...this.state.userList];
        arr[index][name] = value;
        this.setState({'userList':arr});
    }

    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                {
                    this.state.userList.map((user,userIndex) => {
                        return (
                            <div key={userIndex}>
                                <label>
                                    姓名：
                                    <input type="text" name="name" value={user.username} onChange={(e) => this.changeHandler(e,userIndex)}/>
                                </label>
                                <label>
                                    性别：
                                    <select name="sex" value={user.sex} onChange={(e) => this.changeHandler(e,userIndex)}>
                                        <option value="man">男</option>
                                        <option value="woman">女</option>
                                    </select>
                                </label>
                                <label>
                                    是否为管理员：
                                    <input type="checkbox" name="isAdmin" checked={user.isAdmin} onChange={(e) => this.changeHandler(e,userIndex)}/>
                                </label>
                            </div>
                        );
                    })
                }

                <button type="submit">提交</button>
            </form>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
