/* REACT */
import React, { Fragment } from 'react';

/* COMPONENTS */
import Form from './components/form/form';

/* CSS */
import "./dashboard.scss";

const dashboard = () => {
    return (
        <Fragment>
            <div className="form">
                <Form />
            </div>
            <div id="upper_table">

            </div>
            <div id="lower_table">
            
            </div>
        </Fragment>
    )
}

export default dashboard