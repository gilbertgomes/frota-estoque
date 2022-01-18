import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    name: 'Login',
    component: () =>
        import ( /* webpackChunkName: "login" */ '@/views/Login/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/components/Dashboard/Dashboard.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/components/Navegacao/EstoqueApoio.vue')
  },
  {
    path: '/catalogoproduto',
    name: 'Catalogoproduto',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/CatalogoProduto/Catalogoproduto.vue')
  },
  {
    path: '/fornecedor',
    name: 'Fornecedor',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Fornecedor/Fornecedor.vue')
  },
  {
    path: '/tipoproduto',
    name: 'Tipoproduto',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/TipoProduto/Tipoproduto.vue')
  },
  {
    path: '/entrada',
    name: 'Entrada',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Estoque/Entrada/Entrada.vue')
  },
  {
    path: '/unidade',
    name: 'Unidade',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Unidade/Unidade.vue')
  },
  {
    path: '/referencia',
    name: 'Referencia',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Referencia/Referencia.vue')
  },
  {
    path: '/saida',
    name: 'Saida',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Estoque/Saida/Saida.vue')
  },
  {
    path: '/saldo',
    name: 'Saldo',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/Estoque/Saldo/Saldo.vue')
  },
  {
    path: '/oc',
    name: 'Oc',
    component: () =>
        import ( /* webpackChunkName: "Dashboard" */ '@/views/OC/Oc.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
