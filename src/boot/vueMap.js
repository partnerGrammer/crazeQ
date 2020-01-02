import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

// "async" is optional
export default async({ /* app, router, Vue, ... */ }) => {
    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyAN5lbvcXfb7sra6LoALfZ9-uFniew8G_Y',
        }
    })
}