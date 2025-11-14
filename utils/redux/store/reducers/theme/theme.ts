import { ThemeStateRedux } from "@/utils/types/reduxState";
import { createSlice } from "@reduxjs/toolkit";

const initialState = <ThemeStateRedux>{
    theme: "auto"
}

const themeSlice = createSlice({
    initialState,
    name: "theme",
    reducers: {
        CHANGE_THEME_COLOR: (state, action) => state.theme = action.payload
    }
})

export const { CHANGE_THEME_COLOR } = themeSlice.actions
export default themeSlice.reducer