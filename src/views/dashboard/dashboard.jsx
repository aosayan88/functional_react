/* REACT */
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

/* REDUX */
import { addUser, updateUser, deleteUser, moveUser } from '../../redux/user';

/* COMPONENTS */
import Form from './components/form/Form';
import UserTable from './components/user_table/UserTable';

/* CSS */
import "./dashboard.scss";

/* CONSTANTS */
import { UserTableType } from "../../config/constants";

const Dashboard = () => {
    const dispatch = useDispatch();
    const users_data = useSelector((state) => state.user.users_data)

    const [user_form_data, setUserFormData] = useState({
        id: users_data.length + 1,
        designated_table: 0,
        first_name: "",
        last_name: "",
        email: ""
    });

    const [current_user_id, setCurrentUserId] = useState(null);
    /*
    * DOCU: This function will submit the form data to the table
    * Last Updated Date: July 28, 2022
    * @function
    * @author Alfie Osayan
    */
    const handleSubmitUserForm = (event) => {
        event.preventDefault();

        if(current_user_id) {
            dispatch(updateUser(user_form_data));
            clearForm();
        }
        else {
            dispatch(addUser(user_form_data));
            clearForm();
        }
    }

    /**
        * DOCU: This function will reset the form in default
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @author Alfie
    */
    const clearForm = () => {
        setCurrentUserId(0);
        setUserFormData({
            id: users_data.length + 1,
            designated_table: 0,
            first_name: "",
            last_name: "",
            email: ""
        })
      }

    /**
        * DOCU: This function will handle changes in form inputs
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @author Alfie
    */
    const handleInputChange = (event) => {
        event.preventDefault();

        let field_value = event.target.value;

        setUserFormData({
            ...user_form_data,
            [event.target.name]: field_value
        });
    }

    /**
        * DOCU: This function will move the data to upper or lower table
        * Last Updated Date: Oct. 20, 2022
        * @function
        * @author Alfie
    */
    const handleMoveUser = (event, id) => {
        event.stopPropagation();
        
        dispatch(moveUser(id));
    }

    /**
        * DOCU: This function will delete the specific row in the table
        * Last Updated Date: Oct. 20, 2022
        * @function
        * @author Alfie
    */
    const handleDeleteUserData = (event, id) => {
        event.stopPropagation();
        /* if the user clicks the confirm button, will delete the data to the table */
        if (window.confirm("Are you sure you want to delete?")) {
            dispatch(deleteUser(id));
        }
    }

    /**
        * DOCU: This function will set the form in updating state
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @params {object} current_user_id - Requires to determine the current user id that is on edit state.
        * @author Alfie
    */
    const handleEditUserData = (event, current_user_id) => {
        event.stopPropagation();

        setCurrentUserId(current_user_id);

        let current_user_data = users_data.filter(row_data => row_data.id === current_user_id);

        let { id, designated_table, first_name, last_name, email } = current_user_data[0];

        setUserFormData({
            id,
            designated_table,
            first_name,
            last_name,
            email
        });
    }

    /**
        * DOCU: This function will render the user table data
        * Last Updated Date: Oct. 20, 2022
        * @function
        * @params {object} user_table_type - Requires to determine the table type.
        * current_user_id
        * @author Alfie
    */
    const renderUserTable = (user_table_type, user_designated_table) => {
        return (
            <div id={ user_table_type }>
                <UserTable users_data={users_data.filter(row_data => row_data.designated_table === user_designated_table)} onMove={handleMoveUser} onDelete={handleDeleteUserData} onEdit={handleEditUserData} />
           </div>
        )
    }

    return (
        <Fragment>
            <div className="form">
                <Form onSubmit={handleSubmitUserForm} form_data={user_form_data} onChange={handleInputChange} current_id={current_user_id}/>
            </div>
            {renderUserTable("upper_table", UserTableType.IS_UPPER_TABLE)};
            {renderUserTable("lower_table", UserTableType.IS_LOWER_TABLE)};
        </Fragment>
    )
}

export default Dashboard;