import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import PropTypes from 'prop-types';

const CommentForm = props => {
    const { addComment, postId } = props;

    const [text, setText] = useState('');

    return (
        <div
            className='post-form'
            onSubmit={event => {
                event.preventDefault();
                addComment(postId, { text });
                setText('');
            }}
        >
            <div className='bg-primary p'>
                <h3>Leave a Comment</h3>
            </div>
            <form className='form my-1'>
                <textarea
                    name='text'
                    cols='30'
                    rows='5'
                    placeholder='Create a post'
                    value={text}
                    onChange={event => setText(event.target.value)}
                    required
                ></textarea>
                <input
                    type='submit'
                    className='btn btn-dark my-1'
                    value='Submit'
                />
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
};

export default connect(
    null,
    { addComment }
)(CommentForm);
