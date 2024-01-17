/* import React, {useContext} from 'react'; */
import { useTheme } from '../contexts/ThemeContext';
/* import ThemeContext from '../contexts/ThemeContext'; */

function ChangeTheme() {

    /* const { theme, toggleTheme } = useContext(ThemeContext); */
    const { theme, toggleTheme } = useTheme();

  return (
    <>
    <div>Active Theme : {theme}</div>
    <br/>
    <button onClick={toggleTheme}>Change Theme</button>
    </>
  )
}

export default ChangeTheme;