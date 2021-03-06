import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AdvancedLogin extends React.Component {
    state = { show: false, form: {} }

    changeForm = (field, event) => {
        const form = { ...this.state.form };
        form[field] = event ? event.target.value : undefined;
        this.setState({
            form: form
        })
    }

    render() {
        return (
            <Modal isOpen={this.props.show} toggle={this.props.toggle} size="lg">
                <ModalHeader toggle={this.props.toggle}>Advanced Sign Up For Online Banking</ModalHeader>
                <ModalBody>
                    <form>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Name</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control form-control-sm" placeholder="First Name" onChange={this.changeForm.bind(this, 'firstName')} />
                            </div>
                            <div class="col-sm-5">
                                <input type="text" class="form-control form-control-sm" placeholder="Last Name" onChange={this.changeForm.bind(this, 'lastName')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control form-control-sm" placeholder="******" onChange={this.changeForm.bind(this, 'password')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'email')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Secondary Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'email2')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Phone</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'phone')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Address</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'address')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">City</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'city')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">State</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'state')} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">ZipCode</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" onChange={this.changeForm.bind(this, 'zip')} />
                            </div>
                        </div>
                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    <Button color="primary" onClick={this.props.onSubmit.bind(this, this.state.form)}>Signup</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default AdvancedLogin;
