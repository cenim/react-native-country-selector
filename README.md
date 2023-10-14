This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Installation
```bash
yarn add react-native-country-picker
```
or
```bash
npm install react-native-country-picker
```
# Usage 
```JavaScript
import CountryPicker from 'react-native-country-picker'

 <CountryPicker
   visible={showPicker}
   onClose={() => setShowPicker(false)}
   onCountrySelected={(data) => {
      console.log(JSON.stringify(data))

    }}
/>

/*
OUTPUT
{"name":"Australia","phone_code":"+61","code":"AU","currency":{"code":"AUD","name":"Dollar","symbol":"$"},
"id":14,"flag":13}
*/
```

# Props

```visible``` :  ```true``` or ```false``` values Show or hide picker. 
<br>
```onClose``` :  ```function``` to perform hiding/closing the country picker. <br>
```onCountrySelected```: ```function``` . Perform an operation after selecting the country of your choice. Get the data and manipulate it :)



 




