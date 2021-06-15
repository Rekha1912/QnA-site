import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import AnsForm from './AnsForm';
import quest from '../../reducers/quest';


const QuestItem = ({ auth, quest: { _id, catname, questions, answers, user, qtext, atext, date } }) =>
        <div className="mainblock">
            <h2> {catname} </h2>
            <h3> {questions !== undefined && questions.map(item => (
                <div>
                    <div className="qtxt"> 
                        <p> {item.qtext} </p>
                        <p className="date"> {item.username}, <Moment format='MM/DD/YY'>{item.date}</Moment> </p>
                        <AnsForm catId={_id} questId={item._id} /> 
                    </div>
                    <div>{item.answers.map(aitem => (
                        <div className="atxt">{aitem.atext}
                            <p className="date"> {aitem.username}, <Moment format='MM/DD/YY'>{aitem.date}</Moment></p>
                        </div>
                    ))}
                    </div> <br></br>
                </div> 
            ))} </h3>
        </div>

QuestItem.propTypes = {
    
    quest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {}) (QuestItem)