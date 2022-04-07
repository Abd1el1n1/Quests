import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { styles } from './GlobalStyles';

export default function Newq() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>New Quests</Text>
        </View>    
    )
}