import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/View'

app(state, actions, view, document.querySelector('.hyperapp-root'))
