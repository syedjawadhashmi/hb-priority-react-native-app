import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './style';
import contactData from '../../../../data/DummayData';
import {COLOR, TEXT_STYLE, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';


interface prrops{
  onpress?:()=>void
}
const NewOpportunitiesList = (props:prrops) => {
  const{onpress}=props
  const renderItem = ({item}: {item: (typeof contactData)[0]}) => {
    // Determine the call icon based on the callType
    const getCallIcon = () => {
      switch (item.callType) {
        case 'missed':
          return Icon.MissedCallIcon; 
        case 'received':
          return Icon.ReceivedCallIcon; 
        case 'outgoing':
          return Icon.OutgoingCallIcon; 
        default:
          return Icon.OutgoingCallIcon; 
      }
    };

    return (
      <View style={[styles.card, commonStyles.verticleView]}>
        {/* Icon and Name */}
        <View style={styles.contactInfo}>
          <Image
            source={item.icon || Icon.DefaultProfileIcon}
            style={styles.icon}
          />
        </View>
        <View style={styles.nameAndIcons}>
          <Text style={[TEXT_STYLE.text_medium, styles.contactName]}>
            {item.name}
          </Text>
          <View style={[commonStyles.horizontalView, styles.iconsWraper]}>
            {/* Call Icon */}
            {item.call && (
              <Image source={getCallIcon()} style={styles.actionIcon} />
            )}
            {/* Message Icon */}
            {item.message && (
              <Image source={Icon.Message_1} style={styles.actionIcon} />
            )}
          </View>
        </View>
        {/* Task Button */}
        <View >
        <TouchableOpacity style={{...styles.taskButton,backgroundColor:COLOR.primary}} onPress={onpress} >
            <Text style={[TEXT_STYLE.text_small, {color: COLOR.gray_5}]}>
            +CRM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton} onPress={onpress} >
            <Text style={[TEXT_STYLE.text_small, {color: COLOR.whites}]}>
              + Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{...commonStyles.mainContainer,backgroundColor:COLOR.gray_4}}>
      <FlatList
      scrollEnabled={false}
        data={contactData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default NewOpportunitiesList;
