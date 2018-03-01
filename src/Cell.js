
import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';
import CardSection from './common/CardSection';

const Cell = ({ recipe }) => {
    const { category, recipename, imgurl } = recipe;

    return (
      <View>
        <CardSection>
        <Image style={styles.image} source= {{uri:imgurl}} ></Image>
        <View style={{ flex: 1 }} >
        <Text style={styles.titleText}> { category } </Text>
        <Text style={styles.subtitleText}> { recipename } </Text>
        </View>
        </CardSection>
      </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  titleText: {
    marginTop: 10,
  },
  subtitleText: {
    marginTop: 10,
  },
})

export default Cell;