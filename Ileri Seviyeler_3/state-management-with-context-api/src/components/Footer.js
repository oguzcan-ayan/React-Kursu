/* import React, {useContext} from 'react'; */
/* import ThemeContext from '../contexts/ThemeContext'; */
import { useTheme } from '../contexts/ThemeContext';
/* import LangContext, { useLang } from '../contexts/LangContext'; */
import { useLang } from '../contexts/LangContext';

function Footer() {

   /*  const { theme, toggleTheme } = useContext(ThemeContext); */
    const { theme, toggleTheme } = useTheme(); 
   /*  const { lang, setLang} = useContext(LangContext); */
    const { lang, setLang} = useLang();

  return (
    <>
        <hr/>

        <div>Footer</div>   
        <br/>
        <div>Active Theme : {theme}</div>
        <br/>
        <button onClick={toggleTheme}>Change Theme</button>
        <br/>
        <br/>
        <div>Active Language : {lang}</div>
        <br/>
        <button onClick={() => setLang("tr")}>TR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("de")}>DE</button>
    </>
  )
}

export default Footer;