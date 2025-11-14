import { combineReducers } from "redux";
import themeReducer from "./theme/theme";
import questionReducer from "./question-reducer/question-reducer";
export const rootReducers = combineReducers({
    themeReducer: themeReducer,
    quizReducer: questionReducer
})