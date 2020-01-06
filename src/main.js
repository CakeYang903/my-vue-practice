import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Kendo UI
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid } from '@progress/kendo-vue-grid'
import { GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
Vue.use(GridInstaller)
Vue.use(DropdownsInstaller)
Vue.use(DataSourceInstaller);
Vue.component('Grid', Grid)
// Card
import Card from '@/components/Card.vue'
Vue.component('Card', Card)
import CardLogo from '@/components/CardLogo.vue'
Vue.component('CardLogo', CardLogo)
import ThemeGrid from '@/components/ThemeGrid.vue'
Vue.component('ThemeGrid', ThemeGrid)
import Container from '@/components/Container.vue'
Vue.component('Container', Container)
// Table
import TableAddable from '@/components/TableAddable/index.vue'
Vue.component('TableAddable', TableAddable)
import RowEditable from '@/components/TableAddable/RowEditable.vue'
Vue.component('RowEditable', RowEditable)
// Inputs
import InputEnName from '@/components/input/InputEnName.vue'
Vue.component('InputEnName', InputEnName)
import InputText from '@/components/input/InputText.vue'
Vue.component('InputText', InputText)
import InputSearcher from '@/components/input/InputSearcher/index.vue'
Vue.component('InputSearcher', InputSearcher)
import DialogTable from '@/components/DialogTable.vue'
Vue.component('DialogTable', DialogTable)
import Dropdown from '@/components/Dropdown.vue'
Vue.component('Dropdown', Dropdown)
import InputOptional from '@/components/input/InputOptional.vue'
Vue.component('InputOptional', InputOptional)
// Not classified yet
import Nav from '@/components/Nav/index.vue'
Vue.component('Nav', Nav)
import Navigation from '@/frames/Navigation.vue'
Vue.component('Navigation', Navigation)
import MyFooter from '@/frames/MyFooter.vue'
Vue.component('MyFooter', MyFooter)
import Row from '@/components/Row.vue'
Vue.component('Row', Row)
import ButtonWFP from '@/components/ButtonWFP.vue'
Vue.component('ButtonWFP', ButtonWFP)
import RowControl from '@/components/RowControl.vue'
Vue.component('RowControl', RowControl)
import ToggleSwitch from '@/components/ToggleSwitch.vue'
Vue.component('ToggleSwitch', ToggleSwitch)
import ContainerOptional from '@/components/ContainerOptional.vue'
Vue.component('ContainerOptional', ContainerOptional)
// Bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Hightlight JS
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml)
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css)
import scss from 'highlight.js/lib/languages/scss';
hljs.registerLanguage('scss', scss)
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript)
// productionTip
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
