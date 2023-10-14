import React, { useState } from "react";
import { View,Text,Image } from "react-native";
import CountryPicker from "./App";


const Example = () => {
    const [showPicker, setShowPicker] = useState(true);


    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
             <Text style={{alignSelf:'center',marginTop:100}} onPress={()=>{
                setShowPicker(true)
            }}>OPEN</Text>
              <CountryPicker
                visible={showPicker}  
                onClose={() => setShowPicker(false)}
                onCountrySelected={(data) => {
                    console.log(JSON.stringify(data))
                }}
            />


        </View>
    )

}

export default Example;