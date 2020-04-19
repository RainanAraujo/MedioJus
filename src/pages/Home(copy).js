import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home({ navigation }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "#fff" }}>
                <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
                <View style={styles.container}>
                    <View style={styles.layout}>
                        <View style={styles.horizontalView}>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito Constitucional
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito do Tabalho
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.horizontalView}>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito do Consumidor
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito Penal
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.horizontalView}>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito Previdenciário
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Direito de Família
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.horizontalView}>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Lei do Estágio
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Estatuto da Criança e do Adolescente - ECA
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.horizontalView}>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Menor Aprendiz
                            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonOption}
                                    onPress={() => navigation.navigate("Home")}
                                >
                                    <Text style={styles.textButtonOption}>
                                        Curiosidades
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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