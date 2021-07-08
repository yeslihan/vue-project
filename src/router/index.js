import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import DataBinding from '../views/DataBinding.vue'
// import DataBindingHtml from '../views/DataBindingHtml.vue'
// import DataBindingInputText from '../views/DataBindingInputText.vue'
// import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
// import DataBindingTextarea from '../views/DataBindingTextarea.vue'
// import DataBindingSelect from '../views/DataBindingSelect.vue'
// import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
// import DataBindingRadio from '../views/DataBindingRadio.vue'
// import DataBindingAttr from '../views/DataBindingAttr.vue'
// import DataBindingButton from '../views/DataBindingButton.vue'
// import DataBindingList from '../views/DataBindingList.vue'
// import DataBindingIf from '../views/DataBindingIf.vue'
// import EventClick from '../views/EventClick.vue'
// import EventKey from '../views/EventKey.vue'
// import Watch from '../views/Watch.vue'
// import Computed from '../views/Computed.vue'
// import AxiosList from '../views/AxiosList'
// import NestedComponent from '../views/NestedComponent'
// import ParentComponent from '../views/ParentComponent'
// import SlotUseModalLayout from '../views/SlotUseModalLayout'
// import ProvideInject from '../views/ProvideInject'
import Calculator from '../views/Calculator';
import CompositionAPI from '../views/CompositionAPI';
import Mixins from '../views/Mixins';
import StoreAccess from '../views/StoreAccess';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import(/* webpackPrefetch: true */ '../views/About.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path:'/compositionapi',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path:'/mixins',
    name: 'Mixins',
    component: Mixins
  },
  {
    path:'/storeaccess',
    name: 'StoreAccess',
    component: StoreAccess
  }
  /*
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattr',
    name: 'DataBindingAttr',
    component: DataBindingAttr
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/databindingif',
    name: 'DataBindingIf',
    component: DataBindingIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventkey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/axioslist',
    name: 'AxiosList',
    component: AxiosList
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/slotusemodallayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  }
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
