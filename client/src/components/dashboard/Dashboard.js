import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = props => {
    return <Fragment> 
        <h3> COUNTRIES </h3>
        <div className="container-fluid catbox">
            <div className="catlist">
                     <button className="btn"> USA </button> <br></br><br></br>
                     <button className="btn"> INDIA </button> <br></br><br></br>
                     <button className="btn"> FRANCE </button> <br></br><br></br>
                     <button className="btn"> BRAZIL </button> <br></br><br></br>
                     <button className="btn"> ITALY </button> <br></br><br></br>
            </div>
            <div class="catcol">
            <Link to = '/quests' className="btn btn-secondary">  NEW QUESTION </Link>

                <p> content </p>
            </div>
        </div>
    </Fragment>

};

Dashboard.propTypes = {};

export default Dashboard;