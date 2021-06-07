import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAns } from '../../actions/quest';

const AnsForm = ({ questId, addAns }) => {
    const [atext, setText] = useState('');

    return (
        <div className="anstxt">        
            <form onSubmit={e => {
                e.preventDefault();
                addAns(questId,{atext});
                setText('');
            }}>
                <textarea
                    name="text"
                    cols="15"
                    rows="2"
                    placeholder="Add Answer"
                    value={atext}
                    onChange={e => setText(e.target.value)}
                    required>
                </textarea> <br></br>
                <input type="submit" class="btn btn-dark" value="SUBMIT" />
            </form>
        </div>
    )
}

AnsForm.propTypes = {
    addAns: PropTypes.func.isRequired
}

export default connect(null, {addAns}) (AnsForm)