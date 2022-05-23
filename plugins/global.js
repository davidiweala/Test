import Vue from 'vue'
import VueCtkDateTimePicker from 'nuxt-ctk-date-time-picker'
import 'nuxt-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import Skeleton from 'vue-loading-skeleton';
 


Vue.use(Skeleton)

 Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)
