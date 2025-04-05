import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR } from "../../../themes/StyleGuides";

const SelectRoleComponent = ({onClose}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{position:'absolute',zIndex:1,right:0,width:30, top:10,height:30}} onPress={onClose}>
            <Text style={{fontSize:20,color:COLOR.gray_5,}}>x</Text>
        </TouchableOpacity>
      {/* Dropdown Label */}
      <Text style={styles.label}>Select Role*</Text>

      {/* Role Options */}
      <View style={styles.optionsContainer}>
        {/* Owner Role */}
        <View style={styles.roleOption}>
          <Text style={styles.roleTitle}>Owner</Text>
          <Text style={styles.roleDescription}>
            Has full access to the account
            
          </Text>
          <Text style={styles.example}>
              eg. business owner of a large organization
            </Text>
        </View>

        {/* Administration Role */}
        <View style={styles.roleOption}>
          <Text style={styles.roleTitle}>Administration</Text>
          <Text style={styles.roleDescription}>
            Has full access except billing
            
          </Text>
          <Text style={styles.example}>
              eg. manager responsible for day-to-day activities
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    position:'relative'
  },
  label: {
    fontSize: 14,
    color: "#6d6d6d",
  },
  optionsContainer: {
    borderRadius: 8,
    padding: 10,
  },
  roleOption: {
    marginBottom: 16,
  },
  roleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6d6d6d",
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 12,
    color: "#6d6d6d",
    lineHeight: 20,
  },
  example: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#6d6d6d",
  },
});

export default SelectRoleComponent;
