import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextInterface {
    darkModeOn: boolean
    setDarkModeOn: Dispatch<SetStateAction<boolean>>
    englishLanguage: boolean
    setEnglishLanguage: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    darkModeOn: true,
    setDarkModeOn: (): void => {throw new Error('setDarkModeOn function must be overridden')},
    englishLanguage: false,
    setEnglishLanguage: (): void => {throw new Error('setEnglishLanguage function must be overridden')}
}

const Context = createContext <ContextInterface>(defaultState)

export default Context