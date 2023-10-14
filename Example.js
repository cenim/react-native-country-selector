import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import CountryPicker from "./App";


const Example = () => {
    const [showPicker, setShowPicker] = useState(true);
    const [countryData, setCountryData] = useState(null)


    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={{ alignSelf: 'center', marginTop: 100 }} onPress={() => {
                setShowPicker(true)
            }}>OPEN</Text>
            <CountryPicker
                visible={showPicker}
                onClose={() => setShowPicker(false)}
                onCountrySelected={(data) => {
                    setCountryData(data)
                    console.log(JSON.stringify(data))
                }}
            />
            {
                countryData && <View style={{ flexDirection: 'column' }}>
                    <Text></Text>
                    <Text>{JSON.stringify(countryData)}</Text>

                    <Image source={countryData.flag} style={{width:50,height:50}}/>
                </View>
            }



        </View>
    )

}

export default Example;