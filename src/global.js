import Vue from 'vue'
// register the plugin on vue
import Toasted from 'vue-toasted';
export const baseApiUrl = 'http://tecprime.com.br/api'



Vue.use(Toasted)

export const setLista =  (lista) => {
 
    localStorage.setItem("lista", JSON.stringify(lista));
}

export const getLista =  () => {

    return JSON.parse(localStorage.getItem("lista"));
}

export function showError(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, setLista, getLista }