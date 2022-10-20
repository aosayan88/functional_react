/* REACT */
import React from 'react';
import { withRouter } from 'react-router-dom';


/* CONSTANTS */
import { UserTableColumns } from '../../../../config/constants';

/**
 * This component class is being called on the dashboard.js
 * @author Alfie
 * Last Updated Date: Oct. 19, 2022
 */
const UserTable = ({ users_data, onEdit, onMove, onDelete, history }) => {

    const showUserDetails = (user_data) => {
        return history.push({
            pathname: `/user/${user_data.id}`,
            state: { user: user_data }
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    {UserTableColumns.map((item, index) => {
                        return (
                            <th key={index}>{item}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {/* loop the table data to set each data in a table row */}
                {users_data?.map(user_data => {
                    let arrow_icon = user_data.designated_table === 0 ? "arrow_down_icon" : "arrow_up_icon";
                    let { id: user_id, first_name, last_name, email, designated_table } = user_data;

                    return (
                        <tr key={user_id} id={user_id} onClick={() => showUserDetails(user_data)}>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>
                                <button onClick={(event) => onEdit(event, user_id)} id="edit_data_btn" type="button"><span>Edit</span></button>
                                <button onClick={(event) => onMove(event, user_id)} type="button"><span className={arrow_icon}></span></button>
                                <button onClick={(event) => onDelete(event, user_id)} id="delete_data_btn" type="button"><span className="delete_icon"></span></button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default withRouter(UserTable);