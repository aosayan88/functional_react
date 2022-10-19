/* REACT */
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

/* REDUX */
import { addUser, updateUser, deleteUser } from '../../redux/user';

/* COMPONENTS */
import Form from './components/form/Form';
import UserTable from './components/user_table/UserTable';

/* CSS */
import "./dashboard.scss";

const Dashboard = () => {
    const dispatch = useDispatch();
    const users_data = useSelector((state) => state.user.users_data)

    // const [users_data, setUsers_data] = useState([
    //     { id: 1, designated_table: 0, first_name: "Alfie", last_name: "Osayan", email: "aosayan@village88.com"},
    //     { id: 2, designated_table: 0, first_name: "Ruel", last_name: "Ytac", email: "ruel.ytac@village88.com"},
    //     { id: 3, designated_table: 0, first_name: "Michael", last_name: "Choi", email: "mchoi@village88.com" },
    //     { id: 4, designated_table: 1, first_name: "Test1", last_name: "Test1", email: "aosayan@village88.com"},
    //     { id: 5, designated_table: 1, first_name: "Test2", last_name: "Test2", email: "ruel.ytac@village88.com"},
    //     { id: 6, designated_table: 1, first_name: "Test3", last_name: "Test3", email: "mchoi@village88.com"}
    // ]);

    const [form_data, setForm_data] = useState({
        id: users_data.length + 1,
        designated_table: 0,
        first_name: "",
        last_name: "",
        email: ""
    });

    const [current_id, setCurrent_id] = useState(null);

    useEffect(() => {
        console.log(users_data)
    }, [users_data])

    /*
    * DOCU: This function will submit the form data to the table
    * Last Updated Date: July 28, 2022
    * @function
    * @author Alfie Osayan
    */
    const handleSubmitForm = (event) => {
        event.preventDefault();

        if(current_id) {
            dispatch(updateUser(form_data));
            clearForm();
        }
        else {
            dispatch(addUser(form_data));
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
        setCurrent_id(0);
        setForm_data({
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

        setForm_data({
            ...form_data,
            [event.target.name]: field_value
        });

        //this.validateSimpleFormInputs();
    }

    const onMove = (event) => {
        event.stopPropagation();
        console.log('On Move');
    }

    /**
        * DOCU: This function will delete the specific row in the table
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @author Alfie
    */
    const handleDeleteRowData = (event, id) => {
        event.stopPropagation();
        /* if the user clicks the confirm button, will delete the data to the table */
        if (window.confirm("Are you sure you want to delete?")) {
            deleteUser(id);
            console.log(id)
        }
    }

    /**
        * DOCU: This function will set the form in updating state
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @author Alfie
    */
    const onEdit = (event, current_id) => {
        event.stopPropagation();

        setCurrent_id(current_id);
        let current_user_data = users_data.filter(row_data => row_data.id === current_id);

        let { id, designated_table, first_name, last_name, email } = current_user_data[0];

        setForm_data({
            id,
            designated_table,
            first_name,
            last_name,
            email
        });
    }

    /**
        * DOCU: This function checks if a string has white spaces
        * Last Updated Date: Oct. 19, 2022
        * @function
        * @author Alfie
    */
    const hasNoWhiteSpace = (string) => {
        return string.trim().length !== 0;
    }

    return (
        <Fragment>
            <div className="form">
                <Form onSubmit={handleSubmitForm} form_data={form_data} onChange={handleInputChange} current_id={current_id}/>
            </div>
            <div id="upper_table">
                <UserTable users_data={users_data.filter(row_data => row_data.designated_table === 0)} onMove={onMove} onDelete={handleDeleteRowData} onEdit={onEdit} />
            </div>
            <div id="lower_table">
                <UserTable users_data={users_data.filter(row_data => row_data.designated_table === 1)} onMove={onMove} onDelete={handleDeleteRowData} onEdit={onEdit} />
            </div>
        </Fragment>
    )
}

export default Dashboard;