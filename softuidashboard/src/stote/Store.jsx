import authorSlice from "@/stote/AuthorSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        authors:authorSlice.reducer
    }
})

export default store;

export const {updateAuthor} = authorSlice.actions