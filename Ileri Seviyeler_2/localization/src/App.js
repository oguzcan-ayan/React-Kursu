import { useState, useEffect } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl';

function App() {

  const messages = {
    "tr-TR": {
     title: "Merhaba Dünya",
     description: "Bugün {count} yeni mesajınız var."
    },
  
    "en-EN": {
     title: "Hello World",
     description: "Today, you have {count} new messages."
    }
   }
  
  const isLang = localStorage.getItem("lang"); 
  const defaultLang = isLang ? isLang : navigator.language;
  const [lang, setLang] = useState(defaultLang); 
  
   useEffect(() => {
      localStorage.setItem("lang", lang);
   }, [lang]);

  return (
    <>
    <IntlProvider locale={lang} messages={messages[lang]}>
      <FormattedMessage id="title">

      </FormattedMessage>

      <br/>
  
      <FormattedMessage id="description" values={{count : 5}}>

      </FormattedMessage>

      <br/>
      <br/>

      <button onClick={() => setLang('tr-TR')}>TR</button>
      <button onClick={() => setLang('en-EN')}>EN</button>

    </IntlProvider>
    </>
  );
}

export default App;
