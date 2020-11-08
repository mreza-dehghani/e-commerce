import {fetchPostRequest, fetchMobileSuccess, fetchPostError, fetchTabletSuccess, fetchLaptopSuccess, fetchCameraSuccess, fetchComputePartsSuccess, fetchOfficeMachinesSuccess, fetchAccosseriseMainSuccess, fetchGameConsoleSuccess} from './Action'

const KEY = '3ead0a1faa18fc0380563b7eaecc31dd'

export const getMobiles = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/mobile', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(fetchMobileSuccess(data))
        })
        .catch(error => {
            console.log(error.message)
            dispatch(fetchPostError())
        })
    }
}

export const getTablets = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/tablet', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchTabletSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getLaptops = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/laptop', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchLaptopSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getCameras = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/camera', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCameraSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getComputerParts = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/computer-parts', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchComputePartsSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getOfficeMechines = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/office-machines', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchOfficeMachinesSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getAccosseriesMain = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/accessories-main', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchAccosseriseMainSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}

export const getGameConsoles = () => {
    return dispatch => {
        dispatch(fetchPostRequest())
        fetch('https://oneapi.ir/api/dk/digital/category/game-console', {
            methods: 'GET',
            headers: {
                'OneAPI-Key' : KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchGameConsoleSuccess(data))
        })
        .catch(error => {
            dispatch(fetchPostError(error.message))
        })
    }
}


