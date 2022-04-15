
import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);
 
function App() {
  const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="App" id={theme}>
          <Form />
          <div className='switch'>
            <label>{theme === 'light' ? 'Light Mode' : 'Dark mode'}</label>
            <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
          </div>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
