/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import {SharedElement} from 'react-navigation-shared-element';
import React, {useState, useRef} from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {ScrollView} from 'react-native';

export default Page = ({navigation, route}) => {
  const {icon, name, content, id, background, link} = route.params.selected;
  const [sectionsState, setSectionsState] = useState([]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <View style={styles.container}>
        <View style={styles.contentTopic}>
          <View
            style={
              sectionsState != '' ? {display: 'none'} : styles.headerTopic
            }>
            <ImageBackground
              source={background}
              style={styles.imageBackground}
              imageStyle={{borderTopRightRadius: 30, borderTopLeftRadius: 30}}>
              <View style={styles.textureHeader}>
                <View style={styles.backgroundIcon}>
                  <SharedElement id={`item.${id}.photo`}>
                    <Image source={icon} />
                  </SharedElement>
                </View>
              </View>
            </ImageBackground>
          </View>
          <ScrollView
            style={{marginTop: 10}}
            showsVerticalScrollIndicator={false}>
            <Accordion
              underlayColor="#EDEDED"
              sections={content}
              sectionContainerStyle={{
                borderRadius: 10,

                paddingHorizontal: 15,
              }}
              activeSections={sectionsState}
              onChange={(index) => setSectionsState(index)}
              renderHeader={(item) => (
                <View style={styles.buttonItem}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              )}
              renderContent={(item) => (
                <>
                  {item.data?.map((element) => {
                    <Text style={styles.paragraph}>{element.data}</Text>;
                    if (element.type === 'paragraph') {
                      return (
                        <Text style={styles.paragraph}>{element.data}</Text>
                      );
                    } else if (element.type === 'item') {
                      return <Text style={styles.item}>{element.data}</Text>;
                    } else if (element.type === 'subItem') {
                      return <Text style={styles.subItem}>{element.data}</Text>;
                    } else if (element.type === 'subSubItem') {
                      return (
                        <Text style={styles.subSubItem}>{element.data}</Text>
                      );
                    } else if (element.type === 'quote') {
                      return <Text style={styles.quote}>{element.data}</Text>;
                    } else if (element.type === 'titleCenter') {
                      return (
                        <Text style={styles.titleCenter}>{element.data}</Text>
                      );
                    }
                  })}
                </>
              )}
            />
            {name == 'Outras Legislações' ? (
              <>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() =>
                    Linking.openURL(
                      'http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm',
                    )
                  }>
                  <Text style={{fontFamily: 'Roboto-Medium'}}>
                    Lei Maria da Penha
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() =>
                    Linking.openURL(
                      'http://www.planalto.gov.br/ccivil_03/leis/l8069.htm',
                    )
                  }>
                  <Text style={{fontFamily: 'Roboto-Medium'}}>
                    Estatuto da Criança e do Adolescente
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() =>
                    Linking.openURL(
                      'http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/L13834.htm',
                    )
                  }>
                  <Text style={{fontFamily: 'Roboto-Medium'}}>
                    Lei das Fake News Eleitorais
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => Linking.openURL(link)}>
                <Text style={{fontFamily: 'Roboto-Medium'}}>
                  Documentação Oficial
                </Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#0455BF',
  },
  contentTopic: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  headerTopic: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textureHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#0455BF50',
  },
  backgroundIcon: {
    height: 120,
    width: 120,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },

  paragraph: {
    fontSize: 20,
    color: '#656565',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 10,
  },

  item: {
    fontSize: 20,
    color: '#656565',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  subItem: {
    fontSize: 20,
    color: '#656565',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 50,
  },
  subSubItem: {
    fontSize: 20,
    color: '#656565',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 80,
  },
  quote: {
    fontSize: 18,
    color: '#656565',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 40,
    fontFamily: 'Roboto-Light',
  },
  titleCenter: {
    fontSize: 20,
    color: '#494848',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    lineHeight: 30,
    marginBottom: 10,
  },
  buttonItem: {
    paddingVertical: 8,
    borderColor: '#F1F1F1',
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
  },
  title: {
    fontSize: 18,
    color: '#494848',
    textAlign: 'justify',
    lineHeight: 30,
    fontFamily: 'Roboto-Medium',
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: '#0455BF',

    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
