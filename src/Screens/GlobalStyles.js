import { StyleSheet } from 'react-native';

    export const styles=StyleSheet.create({
        container: {
            padding: 24,
            flex: 1,
        },
        titleText: {
            fontSize: 18,
            color: '#333',
            marginTop: 10
        },
        description: {
            marginTop: 15
        },
        paragraph:{
            marginVertical: 4,
            lineHeight: 20
        },
        questTitle: {
            fontSize: 20,
            fontStyle: 'bold',
        },
        listing: {
            alignItems: 'center'
        },
        homeview: {
            alignItems: 'center',
            justifyContent:'center',
            marginTop: 40,
            borderWidth: 1,
            marginHorizontal:40,
            borderRadius:10,
            borderStyle: 'dashed',
            height:50
        },
        hometext: {
            alignSelf: 'center',
            fontSize: 30,
        }
    })