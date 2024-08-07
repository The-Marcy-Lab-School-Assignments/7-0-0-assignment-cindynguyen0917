import { useState } from 'react'
import './App.css'
import LanguageSelector from './components/LanguageSelector';
import Greeting from './components/Greeting';
import FontSizeControl from './components/FontSizeControls';

function App() {
  const [fontSize, setFontSize] = useState(24);
  const [language, setLanguage] = useState('English');
  const translations = {
    English: 'Good Morning',
    Chinese: '早上好',
    Spanish: 'Buenos Dias',
    Haitian: 'Bonjou',
    Portuguese: 'Bom Dia'
  }
  const changeLanguage = (newLanaguage) => setLanguage(newLanaguage);

  const increaseFontSize = () => setFontSize(prevSize => prevSize + 6);
  const decreaseFontSize = () => setFontSize(prevSize => prevSize - 6);

  return (
    <>
      <FontSizeControl increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} />
      <Greeting greeting={translations[language]} fontSize={fontSize} />
      <LanguageSelector changeLanguage={changeLanguage} />
    </>
  )
}

export default App
