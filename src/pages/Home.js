import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, ScrollView, FlatList, SafeAreaView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import constitucional from "../../assets/constitucional.png"
import direitoTrabalho from "../../assets/trabalho1.png"
import estagio from "../../assets/trabalho.png"
import consumidor from "../../assets/consumidor.png"
import curiosidades from "../../assets/curiosidades.png"
import aprendiz from "../../assets/aprendiz.png"
import eca from "../../assets/eca.png"
import familia from "../../assets/familia.png"
import penal from "../../assets/penal.png"
import previdencaiario from "../../assets/previdencario.png"

const DATA = [
    {
        name: "Direito Constitucional",
        image: constitucional
    },
    {
        name: "Direito do Trabalho",
        image: direitoTrabalho
    },
    {
        name: "Direito do Consumidor",
        image: consumidor
    },
    {
        name: "Direito Penal",
        image: penal
    },
    {
        name: "Direito Previdenciário",
        image: previdencaiario
    },
    {
        name: "Direito da Família",
        image: familia
    },
    {
        name: "Lei de Estágio",
        image: estagio
    },
    {
        name: "Estatuto da Criança e do Adolescente - ECA",
        image: eca
    },
    {
        name: "Menor Aprendiz",
        image: aprendiz
    },
    {
        name: "Curiosidades",
        image: curiosidades
    },

]

export default function Home({ navigation }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#044BD9"></StatusBar>
            <FlatList
                contentContainerStyle={{ paddingTop: 10 }}
                numColumns={2}
                data={DATA}
                renderItem={({ item }) =>
                    <View style={styles.buttonOption}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}>
                            <View style={styles.imageView}>
                                <Image source={item.image} />
                            </View>

                            <Text style={styles.textButtonOption}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    </View>}
                keyExtractor={item => item.name}
            />
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
    buttonOption: {
        width: wp("47%"),
        height: wp("47%"),
        backgroundColor: "#fff",
        marginBottom: wp("3%"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        shadowColor: "#f5f5f5",
        elevation: 1,
        marginLeft: wp("2%"),

    },
    textButtonOption: {
        color: "#000",
        textAlign: "center",
        fontSize: hp("2%"),
        marginBottom: wp("3%")

    },
    imageView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 10
    },

})