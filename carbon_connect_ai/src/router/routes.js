const routes = [
  {
    path: '/',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('/src/pages/IndexPage.vue') }],
  },
  {
    path: '/survey/',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('/src/pages/SurveyOverviewPage.vue') }],
  },

  {
    path: '/survey/:surveyId',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('/src/pages/SurveyPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('/src/pages/ErrorNotFound.vue'),
  },
]

export default routes
