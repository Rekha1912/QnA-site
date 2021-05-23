import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuests } from '../../actions/quest'

const Quests = ({ getQuests, quest: { quests, loading } }) => {
    useEffect(() => {
        getQuests();
    }, [getQuests]);

    return <div/>;
};

Quests.proptypes = {
    getQuests: PropTypes.func.isRequired,
    quest: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quest: state.quest
});

export default connect(mapStateToProps, { getQuests })(Quests);