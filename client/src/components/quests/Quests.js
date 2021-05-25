import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestItem from './QuestItem';
import { getQuests } from '../../actions/quest'

const Quests = ({ getQuests, quest: { quests, loading } }) => {
    useEffect(() => {
        getQuests();
    }, [getQuests]);

    return <Fragment>
        <h1> Questions </h1>
        <div>
            {quests.map(quest => (
                <QuestItem key={quest._id} quest={quest} />
            ))}
        </div>

    </Fragment>;
};

Quests.propTypes = {
    getQuests: PropTypes.func.isRequired,
    quest: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quest: state.quest
});

export default connect(mapStateToProps, { getQuests })(Quests);