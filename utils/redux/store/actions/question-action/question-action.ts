import { AUTO_UPDATE_QUIZ } from "../../reducers/question-reducer/question-reducer";

export const handleDispatchQuestionState = (state: any) => {
    return (dispatch: any) => {
        dispatch(AUTO_UPDATE_QUIZ(state))
    }
}