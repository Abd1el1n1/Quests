import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './GlobalStyles';

export default function Mainqd({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.questTitle}>{navigation.getParam('title')}</Text>
            <Text style={styles.description}>Description:</Text>
            <Text style={styles.paragraph}>{navigation.getParam('body')}</Text>
            <Text style={styles.description}>Difficulty: {navigation.getParam('difficulty')}</Text>
        </View>    
    )
}