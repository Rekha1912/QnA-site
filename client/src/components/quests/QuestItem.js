import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const QuestItem = ({ auth, quest: { _id, catname, questions, answers, user, qtext, atext, date } 
}) => 
        <div>
            <h3> Category {catname} </h3>
            <h2> {user} </h2>

        </div>

QuestItem.propTypes = {
    quest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {}) (QuestItem)