import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './GlobalStyles';

export default function Home({navigation}) {

    return(
        <View style={{
            padding: 24,
            flex: 1,
            justifyContent: 'center'
            }}>
            <TouchableOpacity onPress={() => navigation.push('Mainq')}>
                <View style={styles.homeview}>
                    <Text style={styles.hometext}>Main Quests</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Sideq')}>
                <View style={styles.homeview}>
                    <Text style={styles.hometext}>Side Quests</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Newq')}>
                <View style={styles.homeview}>
                    <Text style={styles.hometext}>New Quest</Text>
                </View>
            </TouchableOpacity>
        </View>    
    )
}