import React from 'react';
import DepositForm from './depositForm';

class EditDeposit extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <DepositForm ReqType="PUT" depId={this.props.match.params.depositid} />
        )
    }
}

export default EditDeposit;