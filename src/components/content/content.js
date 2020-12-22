import {useSelector} from "react-redux"


const Content = (props) => {
    const {data = null} = props

    const activeLang = useSelector(state => state.activeLanguage)
    const currentData = useSelector(state => state.TRANSLATIONS[activeLang])
    console.log(data)
    return currentData[data]
}
export default Content