// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';
import MainApp from './MainApp'; // Your main app component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, you can replace this with actual loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <LoadingScreen /> : <MainApp />}
    </NavigationContainer>
  );
};

export default App;
