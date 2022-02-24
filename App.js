import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from './src/components/Header';
import Data from './src/components/Input';
import QuestItem from './src/components/QuestItem';
import Card from './src/components/Card';

export default function App() {
  const [quest, setQuest] = useState([
    {name: 'Establish first quest', key: '0'}
  ])

  const [num, setNum]=useState('1')

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