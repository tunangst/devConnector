import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';

const Post = props => {
    const {
        getPost,
        match,
        post: { post, loading }
    } = props;

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);

    return loading || post === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <Link to='/posts' className='btn'>
                Back to posts
            </Link>
            <PostItem post={post} showActions={false} />
        </Fragment>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});
export default connect(
    mapStateToProps,
    { getPost }
)(Post);
