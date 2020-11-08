

const initialState = {
    addedItems: [],
    total: 0,
    loading: false,
    mobiles: [],
    tablets: [],
    laptops: [],
    cameras: [],
    computerParts: [],
    officeMachines: [],
    accessoriseMain: [],
    gameConsoles: [],
    error: false,
    user: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload],
                total: state.total + action.price
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                addedItems: state.addedItems.filter((index) => index !== action.payload),
                total: state.total - action.price
            }
        case 'FETCH_MOBILE_SUCCESS':
            return{
                ...state,
                loading: false,
                mobiles: [...state.mobiles, action.payload]
            }
        case 'FETCH_TABLET_SUCCESS':
            return{
                ...state,
                loading: false,
                tablets: state.tablets.concat(action.payload)
            }
        case 'FETCH_LAPTOP_SUCCESS':
            return {
                ...state,
                loading: false,
                laptops: state.laptops.concat(action.payload),
                error: action.payload
            }
        case 'FETCH_CAMERA_SUCCESS':
            return {
                ...state,
                loading: false,
                cameras: state.cameras.concat(action.payload),
                error: action.payload
            }

        case 'FETCH_COMPUTER_PARTS_SUCCESS':
            return {
            ...state,
            loading: false,
            computerParts: state.computerParts.concat(action.payload),
            error: action.payload
        }
        case 'FETCH_OFFICE_MACHINES_SUCCESS':
            return {
            ...state,
            loading: false,
            officeMachines: state.officeMachines.concat(action.payload),
            error: action.payload
        }
        case 'FETCH_ACCOSSERISE_MAIN_SUCCESS':
            return {
            ...state,
            loading: false,
            accessoriseMain: state.accessoriseMain.concat(action.payload),
            error: action.payload
        }  
        case 'FETCH_GAME_CONSOLE_SUCCESS':
            return {
            ...state,
            loading: false,
            gameConsoles: state.gameConsoles.concat(action.payload),
            error: action.payload
        }        


        case 'FETCH_POST_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'PAY':
            return {
                ...state,
                addedItems: [],
                total: 0
            }
        case 'USER_SIGN_UP':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}