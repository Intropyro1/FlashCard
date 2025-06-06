import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back,
      };
    },
    updateCard: (state, action) => {
      const { id, front, back } = action.payload;
      if (state.cards[id]) {
        state.cards[id] = { ...state.cards[id], front, back };
      }
    },
    deleteCard: (state, action) => {
      delete state.cards[action.payload];
    },
    setCards: (state, action) => {
      state.cards = Object.fromEntries(
        action.payload.map((card) => [card.id, card])
      );
    },
  },
});

export const { addCard, updateCard, deleteCard, setCards } = cardsSlice.actions;
export const selectCards = (state) => Object.values(state.cards.cards);
export const selectCardById = (state, cardId) => state.cards.cards[cardId];
export const selectCardsByQuizId = (state, quizId) =>
  Object.values(state.cards.cards).filter((card) => card.quizId === quizId);
export const selectCardsByTopicId = (state, topicId) =>
  Object.values(state.cards.cards).filter((card) => card.topicId === topicId);
export default cardsSlice.reducer;
