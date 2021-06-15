import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuests } from '../../actions/quest';

const QuestForm = ({ addQuests }) => {
    const [qtext, setText] = useState('');
    const [id, setCatName] = useState('');

    return (
        <div>
            <h3> Add Questions... </h3> <br></br>
            <form onSubmit={e => {
                e.preventDefault();
                addQuests({qtext,id});
                setText('');
                setCatName('');
            }}>
                <div class="dropdown">
                    <select value={id} onChange={e => setCatName(e.target.value)} name="catname">
                        <option value="">Select Country </option>
                        <option value="60c7d08f94bd82377c6947c1">USA</option>
                        <option value="60c7d01a94bd82377c6947c0">CANADA</option>
                        <option value="5fa478ad34fab71fe020cc06">INDIA</option>
                        <option value="5fa481ecc883373afce1c734">FRANCE</option>
                        <option value="5fa4822fc883373afce1c736">BRAZIL</option>
                        <option value="5fa4820bc883373afce1c735">ITALY</option>
                    </select>
                </div>
                <textarea
                    name="text"
                    cols="30"
                    rows="3"
                    placeholder="Add Question"
                    value={qtext}
                    onChange={e => setText(e.target.value)}
                    required>
                </textarea> <br></br>
                <input type="submit" class="btn btn-dark" value="SUBMIT" />
            </form>
        </div>
    )
}

QuestForm.propTypes = {
    addQuests: PropTypes.func.isRequired
}

export default connect(null, {addQuests}) (QuestForm)
