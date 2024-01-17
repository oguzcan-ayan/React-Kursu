/* import React, {useContext} from 'react'; */
import Footer from '../components/Footer';
import ChangeTheme from '../components/ChangeTheme';
import ChangeLang from '../components/ChangeLang';
/* import ThemeContext from './ThemeContext'; */
import { useTheme } from './ThemeContext';

function Container() {

    /* const { theme } = useContext(ThemeContext); */
    const { theme } = useTheme();

  return (
    <>
        <div className={`container ${theme}`}>
        <ChangeTheme />
        <hr/>
        <ChangeLang />
        <Footer />
        </div>
    </>
  )
}

export default Container;