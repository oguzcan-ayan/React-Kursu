import './App.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LangContextProvider } from './contexts/LangContext';
import Container from './contexts/Container';
/* import Footer from './components/Footer'; for throwing an error  */

function App() {
  return (
   <>
   {/*  <ThemeContext.Provider value="light">
      <ContextTheme />
    </ThemeContext.Provider> */}
    <LangContextProvider>
    <ThemeContextProvider>
        <Container />
    </ThemeContextProvider>
    {/* <Footer /> for throwing an error */}
    </LangContextProvider>
   </>
  );
}

export default App;
