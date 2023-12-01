import { createContext, useEffect, useState } from 'react';

const LightModeContext = createContext();

function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);
  const toggleLightMode = () => {
    setLightMode(!lightMode);
    updateLightMode(!lightMode);
  };

  useEffect(() => {
    const isLight = localStorage.theme === 'light';
    setLightMode(isLight);
    updateLightMode(isLight);
  }, []);

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
}

function updateLightMode(lightMode) {
  if (lightMode) {
    document.documentElement.classList.add('light');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.remove('light');
    localStorage.theme = 'dark';
  }
}

export { LightModeProvider };
export default LightModeContext;
