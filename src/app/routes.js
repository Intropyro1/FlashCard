const ROUTES = {
  newQuizRoute: () => "/flashcards/quizzes/new",
  quizRoute: (id) => `/flashcards/quizzes/${id}`,
  quizzesRoute: () => "/flashcards/quizzes",
  newTopicRoute: () => "/flashcards/topics/new",
  topicRoute: (id) => `/flashcards/topics/${id}`,
  topicsRoute: () => "/flashcards/topics",
};

export default ROUTES;
