import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
import Mainq from '../Screens/Mainq';
import Sideq from '../Screens/Sideq';
import Newq from '../Screens/Newq';
import Mainqd from '../Screens/Mainqd';
import Sideqd from '../Screens/Sideqd';

const screens={
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Quest Life',
        },
    },
    Mainq: {
        screen: Mainq,
        navigationOptions: {
            title: 'Main Quests',
        },
    },
    Sideq: {
        screen: Sideq,
        navigationOptions: {
            title: 'Side Quests',
        },
    },
    Newq: {
        screen: Newq,
        navigationOptions: {
            title: 'New Quest',
        },
    },
    Mainqd: {
        screen: Mainqd,
        navigationOptions: {
            title: 'Quest Details'
        },
    },
    Sideqd: {
        screen: Sideqd,
        navigationOptions: {
            title: 'Quest Details'
        },
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#eee'},
        headerTitleAlign: 'center'
    }
});

export default createAppContainer(HomeStack);