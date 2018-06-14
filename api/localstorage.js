import { AsyncStorage } from 'react-native'

export async function get(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null){
      // We have data!!
      console.log("asyncStorage value ", value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

export async function set(key, value) {
  try {
    console.log('set')
    await AsyncStorage.setItem(key, value)
    console.log('setted')
    return value
  } catch (error) {
    //Error saving data
  }
}