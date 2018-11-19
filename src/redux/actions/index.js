export const toggleModalOnOff = (modalType) => ({
    type: 'TOGGLE_MODAL',
    modalType: modalType,
})

export const setScrollPosition = (scroll) => ({
    type: 'SET_BODY_SCROLL',
    scroll: scroll,
})