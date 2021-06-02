import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addQuests } from '../../actions/quest';


const QuestForm = ({ addQuests }) => {
    const [qtext, setText] = useState('');

    return (
        <div>
            <h3> Add Questions... </h3> <br></br>
        
            <form onSubmit={e => {
                e.preventDefault();
                addQuests({qtext});
                setText('');
            }}>
                <div class="dropdown">
                    <button type="button" class=" dropdown-toggle" data-toggle="dropdown"> SELECT COUNTRY </button>
                    <div class="dropdown-menu">
                        <p class="dropdown-item" href="#"> USA </p>
                        <p class="dropdown-item" href="#"> INDIA </p>
                        <p class="dropdown-item" href="#"> FRANCE </p>
                        <p class="dropdown-item" href="#"> BRAZIL </p>
                        <p class="dropdown-item" href="#"> ITALY</p>
                    </div>
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