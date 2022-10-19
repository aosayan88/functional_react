/* REACT */
import React from 'react';

/**
 * This component class is being called on the dashboard.js
 * @author Alfie
 * Last Updated Date: Oct. 19, 2022
 */
const form = () => {
  return (
    <form id="simple_form">
        <input type="text" name="first_name" id="first_name" placeholder="First name..." />
        <input type="text" name="last_name" id="last_name" placeholder="Last name..." />
        <input type="text" name="email" id="email" placeholder="Email Address ..." />
        <button type="button" id="reset_form_btn">RESET</button>
        <button type="submit" id="add_form_btn">ADD</button>
    </form>
  )
}

export default form;