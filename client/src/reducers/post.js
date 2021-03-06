import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
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
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            };
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
        case ADD_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    loading: false,
                    comments: payload
                }
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                loading: false,
                post: {
                    ...state.post,
                    comments: state.post.comments.filter(
                        comment => comment._id !== payload
                    )
                }
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
