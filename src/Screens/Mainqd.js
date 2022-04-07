import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './GlobalStyles';
import Icon from 'react-native-ionicons';

export default function Mainqd({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.questTitleView}>
                {/* <Icon name={navigation.getParam('icon')} /> */}
                <Text style={styles.questTitle}>{navigation.getParam('title')}</Text>
            </View>
            <View style={styles.questDescriptionView}>
                <Text style={styles.description}>Description:</Text>
                <Text style={styles.paragraph}>{navigation.getParam('body')}</Text>
            </View>
            <View style={styles.questDescriptionView}>
                <Text style={styles.description}>Difficulty: {navigation.getParam('difficulty')}</Text>
            </View>
            
        </View>    
    )
}