const  initialState = {
    activeLanguage: 'ru',
    TRANSLATIONS: {
        ru:{
            intro_first: "Место,",
            intro_second: "где вас ждут",
            main_title: "Aпартаменты в сердце петербурга",
            main_more: "Посмотреть номера",
            toolbar_home: "Главная",
            toolbar_rooms: "Номера",
            toolbar_about: "О нас"
        },
        en: {
            intro_first: "The place, ",
            intro_second: "where you are expected",
            main_title: "Apartments in the heart of St. Petersburg",
            main_more: "View rooms",
            toolbar_home: "Main",
            toolbar_rooms: "Rooms",
            toolbar_about: "About us"
        }
    }

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_LANGUAGE_RU':
            return {
                ...state, activeLanguage: 'ru'
            }
            
        case 'SET_LANGUAGE_EN':
            return {
                ...state, activeLanguage: 'en'
            }

        default:
            return state
    }
}

export default reducer