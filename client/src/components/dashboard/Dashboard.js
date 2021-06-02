import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import QuestForm from '../quests/QuestForm';

const Dashboard = props => {
    return <Fragment> 
        <QuestForm />
    </Fragment>
};

Dashboard.propTypes = {};

export default Dashboard;