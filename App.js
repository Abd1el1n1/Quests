import React from 'react';
import Home from './src/Screens/Home';
import Mainq from './src/Screens/Mainq';
import Sideq from './src/Screens/Sideq';
import Newq from './src/Screens/Newq';
import Navigator from './src/Routes/homeStack';

export default function App() {
  return(
    <Navigator />
  )
}