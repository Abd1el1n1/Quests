import React, {useState} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { styles, dCardStyle } from './GlobalStyles';
import { CardViewWithIcon } from 'react-native-simple-card-view';


export default function MainQ({navigation}) {


    const [mquests, setMquests] = useState([
        {title: 'Get a job', difficulty: '3', body: '5k monthly, with flexible hours', icon: 'briefcase-outline', key: '1'},
        {title: 'Get a girlfriend', difficulty: '4', body: 'Cool, funny, goodlooking', icon: 'heart-outline', key: '2'},
        {title: 'Get own place', difficulty: '5', body: 'Affordable, good location', icon: 'home-outline', key: '3'},
    ])

    return(
        <View style={styles.container}>
            
            <FlatList
                data={mquests}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push('Mainqd', item)}>
                        <View style={styles.listing}>
                            <CardViewWithIcon
                                androidIcon={ item.icon }
                                iosIcon={ 'ios-' + item.icon }
                                iconBgColor={ '#8b1e3f' }
                                iconColor={ '#ffffff' }
                                title={ item.title }
                                titleFontSize={ 22 }
                                style={dCardStyle}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>    
    )
}