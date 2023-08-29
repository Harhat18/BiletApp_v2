import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductCart.style';

const ProductCart = ({data, onSelect}) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{data.title.toUpperCase()}</Text>
        </View>
        <View style={styles.image_container}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{data.category}</Text>
          </View>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>
        <View style={styles.info_container}>
          <Text style={styles.place}>{data.place}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCart;