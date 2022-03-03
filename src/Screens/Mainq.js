import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './GlobalStyles';
import { CardViewWithIcon } from 'react-native-simple-card-view';

export default function MainQ({navigation}) {

    const [mquests, setMquests] = useState([
        {title: 'Get a job', difficulty: '3', body: '5k monthly, with flexible hours', key: '1'},
        {title: 'Get a girlfriend', difficulty: '4', body: 'Cool, funny, goodlooking', key: '2'},
        {title: 'Get own place', difficulty: '5', body: 'Affordable, good location', key: '3'},
    ])

    return(
        <View style={styles.container}>
            <FlatList
                data={mquests}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push('Mainqd', item)}>
                        <View style={styles.listing}>
                            <CardViewWithIcon
                                androidIcon={ 'md-bonfire' }
                                iosIcon={ 'ios-bonfire-outline' }
                                iconBgColor={ '#b13757' }
                                iconColor={ '#FFFFFF' }
                                title={item.title}
                            
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>    
    )
}