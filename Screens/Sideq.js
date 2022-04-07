import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles, dCardStyle } from './GlobalStyles';
import { CardViewWithIcon } from 'react-native-simple-card-view';


export default function Sideq({navigation}) {


    const [squests, setSquests] = useState([
        {title: 'Buy new jeans', difficulty: '1', body: 'Black or gray, also not too tight', icon: 'cash-outline', key: '1'},
        {title: 'Finish battlepass', difficulty: '3', body: 'Do daily doubles for easy grind', icon: 'game-controller-outline', key: '2'},
        {title: 'Finish book', difficulty: '4', body: 'A chapter a day should be managable', icon: 'book-outline', key: '3'},
    ])


    return(

        <View style={styles.container}>
            <FlatList
                data={squests}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push('Sideqd', item)}>
                        <View style={styles.listing}>
                            <CardViewWithIcon
                                androidIcon={ item.icon }
                                iosIcon={ 'ios-bonfire-outline' }
                                iconBgColor={ '#8b1e3f' }
                                iconColor={ '#FFFFFF' }
                                title={ item.title }
                                style={dCardStyle}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>    
    )
}