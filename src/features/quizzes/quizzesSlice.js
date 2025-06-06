import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds,
      };
    },
    updateQuiz: (state, action) => {
      const quiz = action.payload;
      const { id } = action.payload;
      if (state.quizzes[id]) {
        state.quizzes[id] = quiz;
      }
    },
    deleteQuiz: (state, action) => {
      delete state.quizzes[action.payload];
    },
    setQuizzes: (state, action) => {
      state.quizzes = Object.fromEntries(
        action.payload.map((quiz) => [quiz.id, quiz])
      );
    },
  },
});

export const { addQuiz, updateQuiz, deleteQuiz, setQuizzes } =
  quizzesSlice.actions;
export const selectQuizzes = (state) => Object.values(state.quizzes.quizzes);
export const selectQuizById = (state, quizId) => state.quizzes.quizzes[quizId];
export const selectQuizzesByTopicId = (state, topicId) =>
  Object.values(state.quizzes.quizzes).filter(
    (quiz) => quiz.topicId === topicId
  );

export default quizzesSlice.reducer;
