import type QuestionTypes from "@/utils/questions/question";
import type { QuestionStateRedux } from "@/utils/types/reduxState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: QuestionStateRedux = {
    quizQuestions: {} as QuestionTypes,
    quizList: [] as QuestionTypes[]
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        AUTO_UPDATE_QUIZ: (state, action) => {
            if (!state.quizList.includes(action.payload)) {
                const clonePreviousArray = state.quizList;
                clonePreviousArray.push(action.payload);
                state.quizList = clonePreviousArray;
            }
        }
    }
})

export const {
    AUTO_UPDATE_QUIZ
} = quizSlice.actions;
export default quizSlice.reducer;