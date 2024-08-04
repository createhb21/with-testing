export const ROUTER = {
  HOME: '/',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },
  MEMBER: {
    PROFILE: '/member/profile',
  },
  QUIZ: {
    HOME: '/quiz',
    ANSWER: '/quiz/answer',
  },
  STATISTICS: {
    HOME: '/statistics',
  },
} as const;
