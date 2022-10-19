/* REACT */
import React from 'react';

/**
 * This component class is being called on the dashboard.js
 * @author Alfie
 * Last Updated Date: Oct. 19, 2022
 */
const UserTable = ({ users_data, onEdit, onMove, onDelete }) => {
    let columns = ["FIRST NAME", "LAST NAME", "EMAIL ADDRESS", "ACTION"];

    const handleShow = (event) => {
        event.preventDefault();
        console.log('test')
    }

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((item, index) => {
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
                    let { id, first_name, last_name, email, designated_table } = user_data;

                    return (
                        <tr key={id} id={id} onClick={handleShow}>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>
                                <button onClick={(event) => onEdit(event, id)} id="edit_data_btn" type="button"><span>Edit</span></button>
                                <button onClick={(event) => onMove(event, id, designated_table)} type="button"><span className={arrow_icon}></span></button>
                                <button onClick={(event) => onDelete(event, id)} id="delete_data_btn" type="button"><span className="delete_icon"></span></button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default UserTable;