import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Office Wear',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress1.png'),
  },
  {
    id: '2',
    title: 'Black',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress2.png'),
  },
  {
    id: '3',
    title: 'Church Wear',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress3.png'),
  },
  {
    id: '4',
    title: 'Lamerei',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress4.png'),
  },
  {
    id: '5',
    title: '21WN',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress5.png'),
  },
  {
    id: '6',
    title: 'Lopo',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress6.png'),
  },
];

const Item = ({ title, description, price, image }) => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
      <MaterialIcons name="add" size={24} color="black" style={styles.icon} />
    </View>
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
);

const ItemList = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#f00',
  },
  imageContainer: {
    position: 'relative',
    width: 150,
    alignItems: 'flex-start',
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 2,
  },
  row: {
    justifyContent: 'space-between',
  },
  text: {
    alignItems: 'flex-start',
    width: 150,
  },
});

export default ItemList;
