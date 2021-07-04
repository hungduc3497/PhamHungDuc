// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/product-list',
    name: 'product-list',
    component: () => import('@/modules/product-list/views/ProductPage.vue'),
  },
]
