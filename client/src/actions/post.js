import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST } from './types';

//get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};

//add likes
export const addLike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {
                postId,
                likes: res.data
            }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};

//delete post
export const deletePost = postId => async dispatch => {
    if (window.confirm('Are you sure you want to delete this post?')) {
        try {
            await axios.delete(`/api/posts/${postId}`);

            dispatch({
                type: DELETE_POST,
                payload: {
                    postId
                }
            });
            dispatch(setAlert('Post Removed', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
};
//remove like
export const removeLike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {
                postId,
                likes: res.data
            }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};
