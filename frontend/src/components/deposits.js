import React from 'react';
import { connect } from 'react-redux';
import { getDeps } from './store/actions/depositActions';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Layouts/styling.css'

class Deposits extends React.Component {
    constructor(props) {
        super(props);
        let isAdmin = false;
        if (!(this.props.auth.userData === "")) {
            if (this.props.auth.userData.data.role === "ADMIN") {
                isAdmin = true;
            }
        }

        this.props.getDeps(isAdmin);

    }
    render() {
        let loadDeps = this.props.deposits.loadDeps;
        let depsData = (this.props.deposits.depositsData === "")
        let sum = 0;
        if (!depsData) {
            this.props.deposits.depositsData.map(sumdep => {
                return sum = Number(sum) + Number(sumdep.initialAmount);
            })
        }
        return (

            < div >
                <h1> Deposits  </h1>
                {
                    loadDeps &&
                    <h2> Loading...</h2>
                }
                {
                    !loadDeps &&
                    depsData &&
                    <h2> No Deposits found...</h2>
                }
                {
                    !loadDeps &&
                    !depsData &&
                    <div>
                        {
                            this.props.deposits.depositsData.map(eachDep =>
                                <Link to={`/deposit/${eachDep._id}`}>
                                    <div className="tile-element" >
                                        <h3>{eachDep.initialAmount}</h3>
                                        <h6>From: {eachDep.StartDate}</h6>
                                        <h6>To: {eachDep.EndDate}</h6>
                                        <h6>Interest: {eachDep.interest}</h6>
                                    </div>
                                </Link>
                            )}
                    </div>
                }
                <Button bsclass="custom-btn" className="btn-lg btn-dark">
                    <Link to="/createdeposit"> Create Deposit </Link>
                </Button>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    deposits: state.deposits,
    auth: state.auth
})

export default connect(mapStateToProps, { getDeps })(Deposits);