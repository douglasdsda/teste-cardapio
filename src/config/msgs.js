import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.message ? 'Operação realidada com sucesso!' : payload.message,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    'Oops.. Erro inesperado.',
    { type: 'error', icon: 'times' }
)