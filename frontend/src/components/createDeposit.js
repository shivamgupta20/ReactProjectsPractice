import React from 'react';
import DepositForm from './depositForm';

class createDeposit extends React.Component {

    render() {
        return (
            <div>
                <h1> Create Deposits </h1>
                <DepositForm reqtype="POST" />
            </div>
        )
    }
}

export default createDeposit;