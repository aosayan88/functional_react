/* REACT */
import React from 'react';
import { useForm } from "react-hook-form";

/* COMPONENTS */


/**
 * This component class is being called on the dashboard.js
 * @author Alfie
 * Last Updated Date: Oct. 19, 2022
 */
const Form = ({ onSubmit, onChange, form_data, current_id }) => {
    //const { register, handleSubmit } = useForm();

    const modules = {
        toolbar: [
            // options here
        ]
    }

    return (
        <form id="simple_form" onSubmit={onSubmit}>
            <input type="text" onChange={onChange} name="first_name" id="first_name" placeholder="First name..." value={form_data.first_name}/>
            <input type="text" onChange={onChange} name="last_name" id="last_name" placeholder="Last name..." value={form_data.last_name}/>
            <input type="text" onChange={onChange} name="email" id="email" placeholder="Email Address ..." value={form_data.email}/>
            <button type="button" id="reset_form_btn">RESET</button>
            <button type="submit" id="add_form_btn">{current_id ? "UPDATE" : "ADD"}</button>
        </form>

        // <form id="simple_form" onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" onChange={onChange} {...register("first_name")} id="first_name" placeholder="First name..." value={form_data.first_name}/>
        //     <input type="text" onChange={onChange} {...register("last_name")} id="last_name" placeholder="Last name..." value={form_data.last_name}/>
        //     <input type="text" onChange={onChange} {...register("email")} id="email" placeholder="Email Address ..." value={form_data.email}/>
        //     <button type="button" id="reset_form_btn">RESET</button>
        //     <button type="submit" id="add_form_btn">ADD</button>
        // </form>
    )
}

export default Form;