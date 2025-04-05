import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ToggleSwitch from 'toggle-switch-react-native';

const MeetingSettings = ({data}: {data: any}) => {
  const[lookBusy,setLookBusy]=useState(false)
  const[recurringMeeting,setRecurringMeeting]=useState(false)

  return (
    <View style={styles.container}>
      {/* Look Busy Toggle */}
      <View style={styles.toggleRow}>
        <ToggleSwitch
          isOn={lookBusy}
          onColor={COLOR.primary}
          offColor={COLOR.whites}
          labelStyle={{color: 'black', fontWeight: '900'}}
          size="small"
          onToggle={isOn => setLookBusy(lookBusy?false:true)}
        />
        <View>
          <Text style={styles.label1}>Look Busy</Text>
        </View>
        <View style={styles.percentageInput}>
          <TextInput
            style={{flex: 1, padding: 0, color: COLOR.black}}
            keyboardType="numeric"
            placeholderTextColor={COLOR.gray_5}
          />
          <Text style={{fontSize: 8, fontWeight: '400', color: COLOR.gray_5}}>
            %
          </Text>
        </View>
      </View>

      <Text style={styles.subText}>
        Hide the number of available slots by X%
      </Text>

      {/* Recurring Meeting Toggle */}
      <View style={{...commonStyles.horizontalView,marginBottom:"7%"}}>
      <ToggleSwitch
          isOn={recurringMeeting}
          onColor={COLOR.primary}
          offColor={COLOR.whites}
          labelStyle={{color: 'black', fontWeight: '900'}}
          size="small"
          onToggle={isOn => setRecurringMeeting(recurringMeeting?false:true)}
        />
        <Text style={{...styles.label1,marginLeft:"4%"}}>Recurring Meeting</Text>
      </View>

      {/* Input Fields with Dropdowns */}
      {data.Minutes.map((input: any, index: any) => (
        <View key={index}>
          <Text style={styles.label}>{input.label}</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputBox}
              placeholder={input.placeholder}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{input.unit}</Text>
              <Image
                source={Icon.DropDown}
                width={20}
                height={20}
                style={{
                  width: 10,
                  height: 10,
                  position: 'absolute',
                  right: '15%',
                  tintColor:COLOR.gray_5,
                  resizeMode:"contain"
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Increment/Decrement Buttons */}
      {data.counters.map((counter: any, index: any) => (
        <View key={index} style={{marginBottom: 20}}>
          <Text style={styles.label}>{counter.label}</Text>
          <View style={styles.counterControls}>
            <TextInput style={styles.inputBox} keyboardType="numeric" />
            <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Input Fields with Dropdowns */}
      {data.Minutes2.map((input: any, index: any) => (
        <View key={index} style={{marginBottom: 20}}>
          <Text style={styles.label}>{input.label}</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputBox}
              placeholder={input.placeholder}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{input.unit}</Text>
              <Image
                source={Icon.DropDown}
                width={20}
                height={20}
                style={{
                  width: 10,
                  height: 10,
                  position: 'absolute',
                  right: '15%',
                  resizeMode:"contain",
                  tintColor:COLOR.gray_5
                  
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default MeetingSettings;
