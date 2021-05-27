import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuests } from '../../actions/quest';


const QuestForm = ({ addQuests }) => {
    const [qtext, setText] = useState('');

    return (
        <div>
            <h3> Add Questions </h3>
    
            <form onSubmit={e => {
                e.preventDefault();
                addQuests({qtext});
                setText('');
            }}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Add Question"
                    value={qtext}
                    onChange={e => setText(e.target.value)}
                    required>
                </textarea>
                <input type="submit" class="btn btn-dark" value="submit" />
            </form>
        </div>
    )
}

QuestForm.propTypes = {
    addQuests: PropTypes.func.isRequired
}

export default connect(null, {addQuests}) (QuestForm)