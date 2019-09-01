import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postDep, getDep } from './store/actions/depositActions';
import { getUsers } from './store/actions/userAction';

class DepositForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                deposit:
                    ({
                        accountNumber: "",
                        bankName: "",
                        initialAmount: "",
                        StartDate: "",
                        EndDate: "",
                        interest: "",
                        tax: ""
                    })
            }

        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        if (this.props.auth.role === "ADMIN") {
            this.props.getUsers();
        }

        if (this.props.ReqType === "PUT") {
            const depId = (this.props.depId)
            this.props.getDep(this.props.auth.role === "ADMIN", depId);
        }

    }

    fieldUpdate = (e) => {
        const fname = e.target.name;
        const fval = e.target.value;
        this.setState({
            deposit:
            {
                ...this.state.deposit,
                [fname]: fval

            }
        })
    }
    handleFormCancelSubmit = (event) => {
        this.setState({
            deposit:
                ({
                    accountNumber: "",
                    bankname: "",
                    initialAmount: "",
                    StartDate: "",
                    EndDate: "",
                    interest: "",
                    tax: ""
                })
        })
    }
    handleFormSubmit = (event) => {
        const requestType = this.props.reqtype;
        event.preventDefault();
        // const userRole = this.props.auth.role;
        console.log("in handleFormSubmit ", this.props)

        switch (requestType) {
            // case 'PUT':

            case 'POST':
                this.props.postDep(this.state.deposit);
                break
            default:
                return (this.state.deposit)
        }
    }
    render() {
        //defaultValue={this.props.deposit.accountNumber}
        // if (this.props.users && this.props.users.usersData)
        //     console.log(this.props.users.usersData.data.users)
        let isAdmin = false;
        if (this.props.auth.role === "ADMIN") {
            isAdmin = true;
        }
        const requestType = this.props.reqType;
        if (this.state.deposit === undefined && requestType !== 'POST')
            return (
                <h1>Loading</h1>
            )
        else {
            return (
                <Form noValidate onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Account Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="accountNumber" placeholder="Account Number" onChange={this.fieldUpdate} defaultValue={this.props.deposit.accountNumber} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Bank Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="bankName" placeholder="Bank Name" onChange={this.fieldUpdate} defaultValue={this.props.deposit.bankName} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Amount Deposited
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="initialAmount" placeholder="Amount Deposited" onChange={this.fieldUpdate} defaultValue={this.props.deposit.initialAmount} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Start Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="StartDate" placeholder="Start Date" onChange={this.fieldUpdate} defaultValue={this.props.deposit.startDate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            End Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="EndDate" placeholder="End Date" onChange={this.fieldUpdate} defaultValue={this.props.deposit.endDate} />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Interest
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="interest" placeholder="Interest" onChange={this.fieldUpdate} defaultValue={this.props.deposit.interest} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalField">
                        <Form.Label column sm={2}>
                            Tax%
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="tax" placeholder="Tax%" onChange={this.fieldUpdate} defaultValue={this.props.deposit.tax} />
                        </Col>

                    </Form.Group>
                    {
                        isAdmin &&
                        this.props.users &&
                        this.props.users.usersData &&
                        <Form.Group as={Row} controlId="formHorizontalField">
                            <Form.Label column sm={2}>
                                user Id

                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" name="userId" placeholder="User Id" >
                                    {this.props.users.usersData.data.users.map(usr =>
                                        <option key={usr.email} value={usr._id}>
                                            {usr.email}

                                        </option>
                                    )}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    }
                    <Button className="btn-lg btn-dark" onClick={this.handleFormSubmit}><Link to="/deposits"> Save </Link> </Button>
                    <Button className="btn-lg btn-dark" onClick={this.handleFormCancelSubmit}><Link to="/deposits"> Cancel </Link></Button>
                </Form>
            )
        };
    }
}
const mapStateToProp = state => ({
    auth: state.auth.userData.data,
    deposit: state.deposits.depositData,
    users: state.user
})

export default connect(mapStateToProp, { postDep, getDep, getUsers })(DepositForm);
// export default DepositForm;