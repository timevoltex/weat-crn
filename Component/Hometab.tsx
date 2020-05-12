import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Hometab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Home Tab</Text>
      <Button title="go to detail" onPress={() => navigation.navigate('Detail', {itemId:86, otherParam:'anything you want here'})}/>
    </View>
  )
}
export default Hometab

export const Detail = ({route, navigation}) => {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return(
    <View style={styles.container}>
      <Text>This is Detail Tab</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="go to detail" onPress={() => navigation.push('Detail', {itemId:Math.floor(Math.random()*100)})}/>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')}/>
      <Button title="go to back" onPress={() => navigation.goBack('Detail')}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});