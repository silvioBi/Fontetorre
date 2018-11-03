import { toggleModalOnOff } from '../actions'

const toggleModal = (state = {}, action) => {
    switch (action.type) {
        case ('TOGGLE_MODAL'):
            return { ...state, modal: !state.modal, modalType: action.modalType }
        default:
            return state
    }
}

export default toggleModal