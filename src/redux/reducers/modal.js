import { toggleModalOnOff } from '../actions'

const modalHandler = (state = {}, action) => {
    switch (action.type) {
        case ('TOGGLE_MODAL'):
            return { ...state, modal: !state.modal, modalType: action.modalType }
        case ('SET_BODY_SCROLL'):
            return { ...state, scroll: action.scroll }
        default:
            return { modal: false }
    }
}

export default modalHandler