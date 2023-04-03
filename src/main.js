import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faHeart, faUserSecret} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faHeart)


import './assets/main.css'
import './assets/extra.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
