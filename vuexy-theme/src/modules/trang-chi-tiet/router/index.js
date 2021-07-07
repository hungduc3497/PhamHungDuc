// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/detail-page',
    name: 'detail-page',
    component: () => import('@/modules/trang-chi-tiet/views/DetailPage.vue'),
    meta: {
      layout: 'full',
    },
  },
]
