import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  topics: {},
};

const topicSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizId: [],
      };
    },
    updateTopic: (state, action) => {
      const topic = action.payload;
      if (state.topics[topic.id]) {
        state.topics[topic.id] = topic;
      }
    },
    deleteTopic: (state, action) => {
      delete state.topics[action.payload];
    },
    setTopics: (state, action) => {
      state.topics = Object.fromEntries(
        action.payload.map((topic) => [topic.id, topic])
      );
    },
  },

  extraReducers: (builder) => {
    // You can add extra reducers here if needed
    builder.addCase("quizzes/addQuiz", (state, action) => {
      const { id, topicId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizId.push(id);
      }
    });
  },
});
export const { addTopic, updateTopic, deleteTopic, setTopics } =
  topicSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export const selectTopicsArray = createSelector(
  (state) => state.topics.topics,
  (topicsObj) => Object.values(topicsObj)
);
export const selectTopicById = (state, topicId) => state.topics.topics[topicId];
export const selectTopicsByQuizId = (state, quizId) =>
  Object.values(state.topics.topics).filter((topic) => topic.quizId === quizId);
export default topicSlice.reducer;
