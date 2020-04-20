import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [{
  path: '/',
  component: () => import('pages/Login.vue')
},
{
  path: '/home',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Index.vue'),
    name: 'Homepage'
  }]
},
{
  path: '/products',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Products.vue'),
    name: 'Products'
  }]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
