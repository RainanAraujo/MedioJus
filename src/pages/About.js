import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function About({ navigation }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "#fff" }}>
                <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
                <View style={styles.container}>
                    <Text>Sobre!</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fafafa"
    },
    layout: {
        alignSelf: "stretch",
        paddingHorizontal: 10,
        marginTop: 30,
        flexDirection: "column"
    },
    horizontalView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonOption: {
        backgroundColor: "#fff",
        height: hp("20%"),
        width: wp("43%"),
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#f5f5f5",
        elevation: 1,
        padding: hp("1%")

    },
    textButtonOption: {
        color: "#000",
        textAlign: "center",
        fontSize: hp("2%"),

    }
})