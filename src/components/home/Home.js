import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import SimpleLogin from '../simpleLogin/SimpleLogin';
import AdvancedLogin from '../advancedLogin/AdvancedLogin';
import './home.css';

class Home extends React.Component {
    state = {}

    toggleSimpleLogin = () => {
        this.setState({
            showSimpleLogin: !this.state.showSimpleLogin
        });
    }

    toggleAdvancedLogin = () => {
        this.setState({
            showAdvancedLogin: !this.state.showAdvancedLogin
        });
    }

    render() {
        return (
            <div>
                <div className='row mt-3'>
                    <div className='col-md-6 text-center'>
                        <a className="navbar-brand" href="#"><img className="logo" src="logo.png"/></a>
                    </div>
                    <div className="form-inline col-md-6">
                        <form className="" id="login-form">
                            <div>
                                <input type="email" id="UsernameField1" placeholder="Email" className="form-control mr-1" required="" email="" />
                                <input type="password" id="PasswordField1" placeholder="Password" className="form-control mr-1" required="" />
                                <button className="btn btn-danger my-2 my-sm-0" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</button>
                            </div>
                            <div className="form-bottom">
                                Sign Up For Online Banking: 
                                <b>
                                    <a href="#" onClick={this.toggleSimpleLogin}> Light Sign Up</a>
                                </b> or 
                                <b>
                                    <a href="#" onClick={this.toggleAdvancedLogin}> Full Sign Up</a>
                                </b> | Forgot 
                                    <b>
                                    <a href="#" data-toggle="modal" data-target="#forgot_password_modal"> Password</a>
                                </b> ?
                            </div>
                        </form>
                    </div>
                </div>
                <SimpleLogin show={this.state.showSimpleLogin} toggle={this.toggleSimpleLogin}></SimpleLogin>
                <AdvancedLogin show={this.state.showAdvancedLogin} toggle={this.toggleAdvancedLogin}></AdvancedLogin>
            </div >

        )
    }
}

export default Home;