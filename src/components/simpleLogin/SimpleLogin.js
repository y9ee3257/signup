import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class SimpleLogin extends React.Component {
    state = { show: false }

    signUp = () => {
        const payload = {
            client_id: "c8H3deTPmbO1jbgtnNFmU1kzF8hxg0Fn",
            client_secret: "8rMz44oEk1TWfwua",
            grant_type: "client_credentials",
            scope: "https://api.equifax.com/business/luminate/v1/"
        };
        axios.post("https://api.equifax.com/v1/oauth/token", payload).then(res => {
            console.log(res.data);
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.show} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Sign Up For Online Banking</ModalHeader>
                <ModalBody>
                    <form>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Name</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control form-control-sm" placeholder="First Name" />
                            </div>
                            <div class="col-sm-5">
                                <input type="text" class="form-control form-control-sm" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" placeholder="Email" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control form-control-sm" placeholder="******" />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    <Button color="primary" onClick={this.props.onSubmit}>SignUp</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default SimpleLogin;

