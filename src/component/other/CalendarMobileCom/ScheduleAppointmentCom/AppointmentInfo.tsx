import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLOR, commonStyles } from "../../../../themes/StyleGuides";
import { Icon } from "../../../../assest";

const AppointmentInfo = () => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JD</Text>
      </View>
      <View style={{flexDirection:'column', gap:5}}>
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.contact}>+12345678912</Text>
        <Text style={styles.email}>janedoe@gmail.com</Text>
      </View>
    </View>
    <Image source={Icon.Reloader} style={{width:20,height:20,resizeMode:"center",alignSelf:"flex-start"}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical:"3%",
    backgroundColor: COLOR.white,
    borderRadius: 10,
    position:'relative',
    padding: 10,
    marginHorizontal:10,
    ...commonStyles.verticleView
  },
   profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: COLOR.perpal,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: COLOR.white,
    fontWeight: "900",
  },
  name: {
    fontWeight: "900",
    fontSize: 16,
    color: COLOR.lightBlack,
  },
  contact: {
    color: COLOR.lightBlack,
    fontSize: 15,
    fontWeight:'700'
  },
  email: {
    color: COLOR.lightBlack,
    fontSize: 15,
    fontWeight:'700'
  },
});

export default AppointmentInfo;
