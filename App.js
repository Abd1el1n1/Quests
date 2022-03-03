import React from 'react';
import Home from './Screens/Home';
import Mainq from './Screens/Mainq';
import Sideq from './Screens/Sideq';
import Newq from './Screens/Newq';
import Navigator from './Routes/homeStack';

export default function App() {
  return(
    <Navigator />
  )
}