// import lib
import { lazy } from 'react'

export default [
  {
    path: '/activities',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list/index')),
  },
  {
    path: '/activities/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add/index')),
  },
  {
    path: '/activities/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit/index')),
  },
]
