const  initialState = {
    activeLanguage: 'en',
    TRANSLATIONS: {
        ru:{
            intro: "Место, где вас ждут",
            main_title: "Aпартаменты в сердце петербурга",
            main_more: "Посмотреть номера",
            toolbar_home: "Главная",
            toolbar_rooms: "Номера",
            toolbar_about: "О нас"
        },
        en: {
            intro: "",
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

        default:
            return state
    }
}

export default reducer