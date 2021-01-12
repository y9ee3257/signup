import React from 'react';
import './home.css';
import SimpleLogin from '../simpleLogin/SimpleLogin';
import AdvancedLogin from '../advancedLogin/AdvancedLogin';
import axios from 'axios';

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

    onSubmit = (form) => {
        this.getOauthToken().then((result) => {
            if (result && result.access_token) {
                this.signUp(form, "result.access_token")
            }
        })
    }

    signUp = (form, token) => {
        const config = {
            headers: {
                'Authorization': "Bearer " + token
            }
        }
        const payload = {
            "id": "EID_MD7999",
            "application": {
                "applicationSource": "I",
                "primaryApplicant": {
                    "currentAddress": {
                        "city": form.city,
                        "postalCode": form.zip,
                        "stateOrProvince": form.state,
                        "streetName": form.address
                    },
                    "mobilePhone": {
                        "phoneNumber": form.phone
                    },
                    "person": {
                        "personName": {
                            "firstName": form.firstName,
                            "lastName": form.lastName
                        }
                    },
                    "personalEmail": {
                        "emailAddress": form.email
                    },
                },
                "recordType": "APPLICATION"
            }
        }
        axios.post("https://api.equifax.com/luminate/v1/fraud-decisions/consumer-account-opening", payload, config).then(res=>{
            console.log(res);
        })
    }

    getOauthToken = () => {
        const bodyFormData = new URLSearchParams()
        bodyFormData.append('client_id', 'c8H3deTPmbO1jbgtnNFmU1kzF8hxg0Fn');
        bodyFormData.append('client_secret', '8rMz44oEk1TWfwua');
        bodyFormData.append('grant_type', 'client_credentials');
        bodyFormData.append('scope', 'https://api.equifax.com/business/luminate/v1/');
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post("https://api.equifax.com/v1/oauth/token", bodyFormData, config);
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg fixed-top home">
                    <div class="container">
                        <a class="navbar-brand" href="#"><img class="logo" style={{ maxWidth: "120px", marginTop: "-15px" }} src="imgs/logo.png" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <ul class="navbar-nav mr-auto">
                            </ul>
                            <div class="form-inline">
                                <form class="" id="login-form">
                                    <div>
                                        <input type="email" id="UsernameField1" placeholder="Email" class="form-control" required email />
                                        <input type="password" id="PasswordField1" placeholder="Password" class="form-control" required />
                                        <input id="login_session_id" type="hidden" name="login_session_id" value="" />
                                        <button class="btn btn-danger my-2 my-sm-0" type="submit"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign in</button>
                                    </div>
                                    <div class="form-bottom">Sign Up For Online Banking:
                                        <b>
                                            <a href="#" onClick={this.toggleSimpleLogin}> Light Sign Up </a>
                                        </b> or
                                        <b>
                                            <a href="#" onClick={this.toggleAdvancedLogin}> Full Sign Up </a>
                                        </b> | Forgot <b><a href="#" data-toggle="modal" data-target="#forgot_password_modal"> Password </a></b> ?
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                <div class="container-fluid">
                    <div class="row py-5" style={{ background: "#e8e8e8" }}>
                        <br /><br />
                        <div class="col-lg-4 col-sm-4">
                            <img class="img-fluid" src="imgs/card.jpg" alt="Credit Card" />
                        </div>
                        <div class="col-lg-8 col-sm-8">
                            <div class="media-body">
                                <h1 class="media-heading">Open a checking account</h1>
                                <p>Get extra protection with a debit chip card when used at chip-enabled terminals and ATMs.</p>
                                <p class=""><a class="btn btn-danger" href="#" role="button">Get Started &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div class="row">
                        <div class="col-md-4">
                            <h2>Give Us a Call</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-md-4">
                            <h2>Visit Us in Person</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-md-4">
                            <h2>Want More Info?</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <footer>
                    <p>&copy; 2017 Member Bank. All rights reserved. | ABA/Routing Number: 000111222</p>
                </footer>
                <SimpleLogin show={this.state.showSimpleLogin} toggle={this.toggleSimpleLogin} onSubmit={this.onSubmit}></SimpleLogin>
                <AdvancedLogin show={this.state.showAdvancedLogin} toggle={this.toggleAdvancedLogin} onSubmit={this.onSubmit}></AdvancedLogin>
            </div>
        )
    }
}

export default Home;