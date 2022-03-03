import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from './QuestComponents/Header';
import Data from './QuestComponents/Input';
import QuestItem from './QuestComponents/QuestItem';
import Card from './QuestComponents/Card';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const getFonts = async () => {
    console.log('cheackpoint')
    return await Font.loadAsync({
    'dancing-bold': require('./QuestComponents/Fonts/DancingScript-Bold.ttf'),
  });
  }

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const [quest, setQuest] = useState([
    {name: 'Establish first quest', key: '0'}
  ]);

  const [num, setNum]=useState('1');

  const Click = (key) => {
    setQuest((prevQuest) => {
      setNum(num + 1);
      return prevQuest.filter(quest => quest.key != key);
    });
  }

  const submitQuest = (text) => {
    setQuest(() => {
      setNum(num + 1);
      quest.push(
        { name: text, key: num },
      );
      return quest
    });
    console.log(quest);
  }

  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.marginb}>
          <Data submitQuest={submitQuest} />
          <View style={styles.content}>
          <Card />
            <FlatList
              style={styles.flat}
              data = {quest}
              renderItem = {({ item }) => (
                <QuestItem item={item} Click={Click} />
              )}
            />
          </View>
        </View>
      </View>
    );
  } else {
    <AppLoading 
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
      onError={
        e=> console.log(e.message)
      }
    />
  }
   

}
  

const styles=StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1.
  },
  content: {
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  marginb: {
  },
  flat: {
  }
})