/* import React, {useContext} from 'react'; */
/* import LangContext from '../contexts/LangContext'; */
import { useLang } from "../contexts/LangContext";

function ChangeLang() {

   /*  const { lang, setLang} = useContext(LangContext); */
     const { lang, setLang} = useLang(); 

  return (
    <>

    <div>Active Language : {lang}</div>
    <br/>
    <div>
        <button onClick={() => setLang("tr")}>TR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("de")}>DE</button>
    </div>
    </>
  )
}

export default ChangeLang;