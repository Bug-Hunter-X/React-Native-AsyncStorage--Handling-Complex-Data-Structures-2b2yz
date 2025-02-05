To fix this, use `JSON.stringify` to convert the object to a string before storing it, and `JSON.parse` to convert the string back to an object after retrieving it.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

// Correct Usage
storeData('myData', { name: 'John', age: 30 });

getData('myData').then(data => console.log(data)); // Output: { name: 'John', age: 30 }
```