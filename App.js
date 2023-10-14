import React, { useEffect, useState } from "react";
import { StyleSheet, View, Modal, Text, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { COUNTRYUTILS, addIds } from "./CountryUtils";
import PropTypes from 'prop-types';



const CountryPicker = ({ onClose, visible, onCountrySelected }) => {
    const [countries, setCountries] = useState(COUNTRYUTILS)
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [showModal, setShowModal] = useState(true);
    const [countrySelected, setCountrySelected] = useState(null);


    useEffect(() => {
        addIds()
    }, [])
    const renderCountries = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.countryItem} onPress={() => {    
                    onCountrySelected(item)
                    onClose()

                }}>
                <Image source={item.flag} resizeMode="contain" style={styles.flag} />

                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    };


    const searchCountry = (value) => {

        if (value.trim() == "")
            setFilteredCountries(countries);
        else {
            const filtered = countries.filter((country) => {

                return country.name.toLowerCase().includes(value.toLowerCase())
            })

            setFilteredCountries(filtered)

        }

    }
    return (

        // visible &&
        <Modal contentContainerStyle={styles.modalContainer} showsVerticalScrollIndicator={false}

            visible={visible}>
            <View style={styles.modalContent}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.search} placeholder={'Search for country...'}
                        onChangeText={(value) => {
                            searchCountry(value)
                        }} />
                    <TouchableOpacity style={styles.closeBtn} onPress={()=>onClose()}>
                        <Image source={require("./assets/close.webp")} style={styles.flag} />

                    </TouchableOpacity>
                 </View>
                <FlatList
                    renderItem={renderCountries}
                    data={filteredCountries}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                />
                {/* </ScrollView> */}
            </View>

        </Modal>

    )

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        padding: 10,

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        padding: 20,
        zIndex: 2,
        backgroundColor: 'white',
        flex: 1

    },

    search: {
        marginEnd: 15,
        marginStart: 15,
        marginBottom: 15,
        marginTop: 30,
        height: 40,
        fontSize: 15,
        paddingStart: 15,
        borderRadius: 5,
        overflow: 'hidden',
        borderBottomColor: 'grey',
        backgroundColor: '#ddd',
        flex: 1,
        color: '#000'

    },
    closeBtn: {
        alignSelf: 'center',
         borderRadius: 19,
         marginTop:20,
         width: 38,
        height: 38,
         paddingTop: 2,
        fontWeight: 'bold',
        fontSize: 20


    },

    flag: {
        width: 40,
        height: 30,
        marginEnd: 10,
    },
    countryItem: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        fontSize: 17
    },
    text: {
        fontSize: 16,
        padding: 5
    }

});


export default CountryPicker;