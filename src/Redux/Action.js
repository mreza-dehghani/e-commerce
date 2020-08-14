const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST'
const FETCH_POST_ERROR = 'FETCH_POST_ERROR'

const FETCH_MOBILE_SUCCESS = 'FETCH_MOBILE_SUCCESS'
const FETCH_TABLET_SUCCESS = 'FETCH_TABLET_SUCCESS'
const FETCH_LAPTOP_SUCCESS = 'FETCH_LAPTOP_SUCCESS'
const FETCH_CAMERA_SUCCESS = 'FETCH_CAMERA_SUCCESS'
const FETCH_COMPUTER_PARTS_SUCCESS = 'FETCH_COMPUTER_PARTS_SUCCESS'
const FETCH_OFFICE_MACHINES_SUCCESS = 'FETCH_OFFICE_MACHINES_SUCCESS'
const FETCH_ACCOSSERISE_MAIN_SUCCESS = 'FETCH_ACCOSSERISE_MAIN_SUCCESS'
const FETCH_GAME_CONSOLE_SUCCESS = 'FETCH_GAME_CONSOLE_SUCCESS'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostError = () => {
    return {
        type: FETCH_POST_ERROR,
    }
}

export const fetchMobileSuccess = (payload) => {
    return {
        type: FETCH_MOBILE_SUCCESS,
        payload: payload
    }
}

export const fetchTabletSuccess = (payload) => {
    return {
        type: FETCH_TABLET_SUCCESS,
        payload: payload
    }
}

export const fetchLaptopSuccess = (payload) => {
    return {
        type: FETCH_LAPTOP_SUCCESS,
        payload: payload
    }
}

export const fetchCameraSuccess = (payload) => {
    return {
        type: FETCH_CAMERA_SUCCESS,
        payload: payload
    }
}

export const fetchComputePartsSuccess = (payload) => {
    return {
        type: FETCH_COMPUTER_PARTS_SUCCESS,
        payload: payload
    }
}

export const fetchOfficeMachinesSuccess = (payload) => {
    return {
        type: FETCH_OFFICE_MACHINES_SUCCESS,
        payload: payload
    }
}

export const fetchAccosseriseMainSuccess = (payload) => {
    return {
        type: FETCH_ACCOSSERISE_MAIN_SUCCESS,
        payload: payload
    }
}

export const fetchGameConsoleSuccess = (payload) => {
    return {
        type: FETCH_GAME_CONSOLE_SUCCESS,
        payload: payload
    }
}

export const addToCart = (payload, price) => {
    return {
        type: ADD_TO_CART,
        payload: payload,
        price: price
    }
}

export const removeFromCart = (payload, price) => {
    return {
        type: REMOVE_FROM_CART,
        payload: payload,
        price: price
    }
}