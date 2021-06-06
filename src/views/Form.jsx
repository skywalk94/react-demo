import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "msg",
            name: "",
            sex: "1",
            city: ["北京", "上海", "广州", "深圳"],
            address: "上海",
            hobby: [{
                text: "篮球",
                checked: true
            }, {
                text: "乒乓球",
                checked: true
            }, {
                text: "跑步",
                checked: false
            }]
        }
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    keyUpCode = (e) => {
        if (e.keyCode === 13) {
            console.log(this.state.name)
        }
    }
    changeSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    changeCity = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    changeHobby = (index) => {
        let hobby = this.state.hobby
        hobby[index].checked = !hobby[index].checked
        this.setState({
            hobby: hobby
        })
    }
    formSubmit = () => {
        console.log(this.state)

    }
    render() {
        return (
            <>
                <form>
                    姓名 <input type="text" value={this.state.name} onChange={this.changeName} onKeyUp={this.keyUpCode} />
                  男  <input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.changeSex} />
                  女  <input type="radio" value="2" checked={this.state.sex === '2'} onChange={this.changeSex} />
                   居住城市 <select value={this.state.address} onChange={this.changeCity}>
                        {
                            this.state.city.map((item, index) => {
                                return <option key={index}>{item}</option>
                            })
                        }

                    </select>
                    爱好 {
                        this.state.hobby.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input type="checkbox" checked={item.checked} onChange={this.changeHobby.bind(this, index)} />{item.text}
                                </div>
                            )
                        })
                    }

                </form>
                <button onClick={this.formSubmit}>提交</button>
            </>
        )
    }
}

export default Form