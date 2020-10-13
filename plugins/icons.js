import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCaretDown, faBars, faCaretLeft, faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faCaretDown, faBars, faCaretLeft, faMars )

Vue.component('font-awesome-icon', FontAwesomeIcon)