import React, { useReducer } from 'react'
import { connect } from 'react-redux';
import { getUsers } from './store/actions/userAction';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers();
    }
    render() {
        let userDetail = this.props.users;
        // console.log(userDetail)
        console.log(userDetail.usersData)
        return (
            <div>
                {
                    userDetail &&
                    userDetail.usersData &&
                    < div >
                        <h1> Users :</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>_id</th>
                                    <th>email</th>
                                    <th>role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.usersData.data.users.map(user =>
                                    <tr>
                                        <td>{user._id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    users: state.user
})
export default connect(mapStateToProps, { getUsers })(Users);