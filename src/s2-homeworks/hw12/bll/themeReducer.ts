const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id});

type changeThemeIdActionType = {
    type: string;
    id: number
}

type StateType = {
    themeId: number
}