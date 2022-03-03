import React from 'react';
import { CardViewWithIcon } from 'react-native-simple-card-view'


export default function Card(){
    return(
            <CardViewWithIcon
        androidIcon={ 'md-bonfire' }
        iosIcon={ 'ios-bonfire-outline' }
        iconBgColor={ '#b13757' }
        iconColor={ '#FFFFFF' }
        title={ 'LOREM IPSUM' }
        content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    />
    );
}