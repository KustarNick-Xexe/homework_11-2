import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

const initialState = {
    photos: [],
};

const photoSlice = createSlice({
    name: "@@photo",
    initialState,
    reducers: {
        addPhoto(state, action) {
        state.photos.push({ id: uuid(), photo: action.payload });
        },
    },
});

export const { addPhoto } = photoSlice.actions;

export default photoSlice.reducer;