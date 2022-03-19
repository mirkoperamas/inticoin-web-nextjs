import { createContext } from 'react';
import { ILang } from './interfaces';

 type LangContextProps = {
    lang:ILang,
    handleLang:any,
}


export const LangContext = createContext<LangContextProps>({} as LangContextProps);