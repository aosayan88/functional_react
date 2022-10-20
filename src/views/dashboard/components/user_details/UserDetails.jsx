/* REACT */
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* REDUX */
import { showUser } from '../../../../redux/user';

const UserDetails = () => {
    const { user_id } = useParams();
    const dispatch = useDispatch();

    const user_data = useSelector((state) => state.user.user_data)

    useEffect(() => {
        dispatch(showUser(user_id))

        console.log(user_data)
        console.log(user_id)
    },[user_id])

    return (
        <div>
            {/* <h1>{first_name} {last_name}</h1>
            <h3>{email}</h3> */}
            <h1>User ID: {user_data}</h1>
        </div>
    )
}

export default UserDetails;