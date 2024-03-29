import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestItem from './QuestItem';
import { getQuests } from '../../actions/quest'
import quest from '../../reducers/quest';

const Quests = ({ getQuests, quest: { quests, loading }, auth: {user}}) => {
    useEffect(() => {
       // getQuests();
    }, [getQuests]);

    return <Fragment> 
                <div className="container-fluid catbox">
                    <h1 className="uname">Welcome, {user !== null && user.name}</h1>
                    <div className="catlist">
                        <h3> COUNTRIES </h3> <br></br>
                        <button onClick={() => getQuests('USA')} className="btn ubt"> USA </button> <br></br><br></br>
                        <button onClick={() => getQuests('Canada')} className="btn ubt"> CANADA </button> <br></br><br></br>
                        <button onClick={() => getQuests('India')} className="btn ibt"> INDIA </button> <br></br><br></br>
                        <button onClick={() => getQuests('France')} className="btn fbt"> FRANCE </button> <br></br><br></br>
                        <button onClick={() => getQuests('Brazil')} className="btn bbt"> BRAZIL </button> <br></br><br></br>
                        <button onClick={() => getQuests('Italy')} className="btn ibt"> ITALY </button> <br></br><br></br>
                    </div>
               </div>
               <div class="catcol">
                <Link to = '/dashboard' className="btn catbtn">  NEW QUESTION </Link>
                </div>
                <div className="qnatext">
                    {quests !== undefined && quests.map(quest => (
                        <QuestItem key={quest._id} quest={quest} />
                    ))}
                </div>
    </Fragment>;
};

Quests.propTypes = {
    getQuests: PropTypes.func.isRequired,
    quest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quest: state.quest,
    auth: state.auth
});

export default connect(mapStateToProps, { getQuests })(Quests);