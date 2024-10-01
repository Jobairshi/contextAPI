import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ThemeStruct{
    themeMode:string,
    darkTheme:Dispatch<SetStateAction<string|null>>,
    lightTheme:Dispatch<SetStateAction<string|null>>
}

export const ThemeContext = createContext<ThemeStruct>({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme()
{
    return useContext(ThemeContext)
}