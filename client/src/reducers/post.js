import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

const post = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                loading: false,
                posts: [payload, ...state.posts]
            };
        case DELETE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post => post._id !== payload.postId)
            };
        case UPDATE_LIKES:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post =>
                    post._id === payload.postId
                        ? {
                              ...post,
                              likes: payload.likes
                          }
                        : post
                )
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
};

export default post;
