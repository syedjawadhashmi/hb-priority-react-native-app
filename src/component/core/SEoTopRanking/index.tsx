import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';
import { Icon } from '../../../assest';
import { StarGetRating } from '../StarGetRating';

// Sample Data


interface propsType {
  data?: any;
}

const SEoTopRanking = (props: propsType) => {
  const { data  } = props; // Use default data if none is passed
  const renderItem = ({ item }: any) => {

    return(
    <View style={styles.Table}>
      <View style={styles.tabalContainerBox}>
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>{item.title}</Text>
        <Image source={Icon.FlagRating} style={styles.FlagIcon} />
      </View>
      <View style={styles.tabalContainerBox}>
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>1.4</Text>
      </View>
      <View style={styles.tabalContainerBox}>
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>{item.reviews}</Text>
      </View>
      <View style={styles.tabalContainerBox}>
        <StarGetRating rating={item.rating} size={5} align={'center'} />
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>{item.rating}</Text>
      </View>
      <View style={styles.tabalContainerBox}>
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>{item.type}</Text>
      </View>
      <View style={styles.tabalContainerBox}>
        <Text style={{ ...styles.TabalText, color: COLOR.gray_5 }}>{item.keyword}</Text>
      </View>
    </View>
  )}
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.TabalStatus}>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Business Name</Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Avg.{'\n'}Rank</Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Reviews</Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Rating</Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Primary Category</Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{ ...styles.TabalText, color: COLOR.whites }}>Additional Categories</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data[0]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    
    </View>
  );
};

export default SEoTopRanking;

const styles = StyleSheet.create({
  container: { marginBottom: '20%' },
  listContainer: {
    paddingBottom: 50,
  },
  TabalStatus: { ...commonStyles.verticleView, marginTop: '3%' },
  tabalStatusBox: {
    width: '16.8%',
    height: 27,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor: COLOR.gray_7,
    ...commonStyles.center,
  },
  TabalText: {
    fontSize: 9,
    fontWeight: '400',
    color: "red",
    textAlign: 'center',
  },
  TabalListContainer: {
    width: '20%',
    height: 42,
    backgroundColor: COLOR.perpal,
    borderWidth: 1,
    borderColor: COLOR.gray_7,
    justifyContent: 'center',
  },
  tabalContainerBox: {
    width: '16.8%',
    borderLeftColor: COLOR.gray_7,
    borderRightColor: COLOR.gray_7,
  },
  Table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  FlagIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
});
