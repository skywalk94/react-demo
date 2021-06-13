import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.routes)
    }
    render() {
        return (
            <Router>
                <div>
                    用户
                    <Link to="/user">用户首页</Link>
                    <Link to="/user/info">-----用户信息页</Link>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {
                                this.props.routes.map((item) => {
                                    return (
                                        <Route exact={item.exact} path={item.path} key={item.path} component={item.component} />
                                    )
                                })
                            }
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default User;