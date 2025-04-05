import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

const TimePicker = () => {
  const [hour, setHour] = useState<string>("5");
  const [minute, setMinute] = useState<string>("25");
  const [meridian, setMeridian] = useState<string>("AM");
  const [selectedHour, setSelectedHour] = useState<number>(5);

  const renderClockNumbers = () => {
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return numbers.map((num) => {
      const angle = ((num - 3) * Math.PI) / 6; // Position numbers on a circle
      const x = 60 + 80 * Math.cos(angle); // Circle center (60, 60), radius 50
      const y = 60 + 80 * Math.sin(angle);

      return (
        <TouchableOpacity
          key={num}
          style={[styles.clockNumberContainer, { top: y - 12, left: x - 12 }]} // Center numbers within their container
          onPress={() => setSelectedHour(num)}
        >
          <View
            style={[
              styles.clockNumberBackground,
              selectedHour === num && styles.selectedClockNumberBackground,
            ]}
          >
            <Text
              style={[
                styles.clockNumber,
                selectedHour === num && styles.selectedClockNumber,
              ]}
            >
              {num}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* Time Selector */}
      <View style={styles.timeContainer}>
        {/* Hour */}
        <TextInput
          value={hour}
          style={[styles.timeInput,{backgroundColor:COLOR.gray_4,paddingHorizontal:"10%"}]}
          keyboardType="numeric"
          onChangeText={setHour}
          maxLength={2}
        />
        <Text style={styles.colon}>:</Text>
        {/* Minute */}
        <TextInput
          value={minute}
          style={styles.timeInput}
          keyboardType="numeric"
          onChangeText={setMinute}
          maxLength={2}
        />

        {/* AM/PM Switch */}
        <View style={styles.meridianContainer}>
          {["AM", "PM"].map((value,index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.meridianButton,
                meridian === value && styles.meridianSelected,
              ]}
              onPress={() => setMeridian(value)}
            >
              <Text
                style={[
                  styles.meridianText,
                  meridian === value && styles.meridianSelectedText,
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Clock */}
      <View style={styles.clockContainer}>
        <View style={styles.clock}>
          {/* Numbers */}
          {renderClockNumbers()}
          {/* Hand */}
          <View
            style={[
              styles.clockHand,
              {
                transform: [
                  { rotate: `${(selectedHour ) * 30}deg` }, // Rotate hand to selected number
                ],
              },
            ]}
          />
          <View style={styles.clockCenterDot} />
        </View>
      </View>
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: "center",
    width: 250,
  },
 
  dateText: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    color: COLOR.white,
    fontSize: 18,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width:'100%',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  timeInput: {
    backgroundColor: COLOR.white,
    fontSize: 40,
    color: COLOR.lightBlack,
    fontWeight:'900',
    borderRadius: 15,
    textAlign: "center",
  },
  colon: {
    fontSize: 40,
    color: COLOR.lightBlack,
    marginHorizontal: 5,
  },
  meridianContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    borderWidth:1,
    borderRadius:15,
    overflow:'hidden',
    borderColor:COLOR.perpal
  },
  meridianButton: {
    paddingVertical: 5,
    paddingHorizontal: 2,
    backgroundColor: COLOR.gray_4,
  },
  meridianSelected: {
    backgroundColor: COLOR.perpal,
  },
  meridianText: {
    color: COLOR.black,
    fontSize: 12,
  },
  meridianSelectedText: {
    color: COLOR.white,
    fontWeight: "bold",
  },
  clockContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  clock: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: COLOR.gray_4,
    borderRadius:100
  },
  clockHand: {
    position: "absolute",
    width: 2,
    height: 70,
    left: '50%',
    right:"50%",
    bottom:'50%',
    backgroundColor: COLOR.perpal,
    transformOrigin: "center bottom", // Ensure hand rotates from the center
  },
  clockCenterDot: {
    width: 10,
    height: 10,
    borderWidth:1,
    borderRadius: 5,
    backgroundColor: COLOR.perpal,
    position: "absolute",
  },
  clockNumberContainer: {
    position: "absolute",
    width: 24,
    height: 24,
    marginTop:'20%',
    marginLeft:'20%',
    justifyContent: "center",
    alignItems: "center",
  },
  clockNumberBackground: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "transparent",
  },
  selectedClockNumberBackground: {
    backgroundColor: COLOR.perpal,
    borderRadius: 12,
  },
  clockNumber: {
    fontSize: 15,
    color: COLOR.lightBlack,
    fontWeight: "800",
  },
  selectedClockNumber: {
    color: COLOR.white,
    fontWeight: "bold",
  },
});
