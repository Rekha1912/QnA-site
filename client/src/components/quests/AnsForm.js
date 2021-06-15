import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAns } from '../../actions/quest';

const AnsForm = ({ catId, questId, addAns }) => {
    const [atext, setText] = useState('');

    return (
        <div className="anstxt">        
            <form onSubmit={e => {
                e.preventDefault();
                addAns(catId, questId,{atext});
                setText('');
            }}>
                <div>
                    <textarea
                        name="text"
                        cols="15"
                        rows="2"
                        placeholder="Add Answer"
                        value={atext}
                        onChange={e => setText(e.target.value)}
                        required>
                    </textarea> <br></br>
                    <input type="submit" class="btn btn-dark abt" value="SUBMIT" />
                </div>
            </form>
        </div>
    )
}

AnsForm.propTypes = {
    addAns: PropTypes.func.isRequired
}

export default connect(null, {addAns}) (AnsForm)