import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { styles } from './GlobalStyles';

export default function Home({navigation}) {

    return(
        <ImageBackground source={require('./images/sword.jpg')} resizeMode="cover" style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('Mainq')}>
                <View>
                    <Card containerStyle={styles.card}>
                        <View style={styles.homeview}>
                            <Icon name='star' color='#8B1E3F' reverse/>
                            <Text style={styles.hometext}>Main Quests</Text>     
                        </View>
                    </Card>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Sideq')}>
                <View>
                    <Card containerStyle={styles.card}>
                        <View style={styles.homeview}>
                            <Icon name='book' color='#8B1E3F' reverse/>
                            <Text style={styles.hometext}>Side Quests</Text>
                        </View>                        
                    </Card> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Newq')}>
                <View>
                    <Card containerStyle={styles.card}>
                        <View style={styles.homeview}>
                            <Icon name='mail' color='#8B1E3F' reverse/>
                            <Text style={styles.hometext}>New Quest</Text>   
                        </View>
                    </Card>     
                </View>
            </TouchableOpacity>
        </ImageBackground>
   
    )
}