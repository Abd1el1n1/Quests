import { StyleSheet } from 'react-native';

    export const styles=StyleSheet.create({
        container: {
            padding: 24,
            flex: 1,
            backgroundColor: '#ffffff',
            
        },
        titleText: {
            fontSize: 18,
            color: '#333',
            marginTop: 10
        },
        description: {
            marginHorizontal: 10,
            color:'#ffffff',
        },
        paragraph:{
            marginVertical: 4,
            lineHeight: 20,
            marginHorizontal: 10,
            color:'#ffffff',
        },
        questTitle: {
            fontSize: 40,
            fontFamily: 'bold'
        },
        listing: {
            alignItems: 'center'
        },
        homeview: {
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-around',
        },
        hometext: {
            alignSelf: 'center',
            fontSize: 30,
        },
        cardview: {
            height:40,
        },
        questTitleView: {
            flexDirection: 'row'
        },
        questDescriptionView: {
            backgroundColor: '#8b1e3f',
            borderRadius: 7,
            marginTop: 10,
            
        },
        card: {
            borderRadius: 10,
        }
    })

    export const dCardStyle = {
        bgColor: '#7e8987',
        borderRadius: 10,
        width: 300,
        margin: 10,
        }