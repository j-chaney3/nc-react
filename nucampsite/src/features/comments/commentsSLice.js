import { createSlice } from '@reduxjs/toolkit';
import {COMMENTS} from '../../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS
};

//contains config object, name prop and inititalState object from above.
const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer; 

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};