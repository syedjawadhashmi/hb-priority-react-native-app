import React from 'react';
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './style';
import {HomelistProps} from '../../../data/Types';
import {Icon, Images} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const HomeLists = (props: HomelistProps) => {
  const {
    item,
    onpress,
    index,
    openModal,
    isOpenModal,
    selectStatus,
    isSelected,
    onLongPress,
    selectionMode,
  } = props;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  // Status data
  const statusOptions = [
    {name: 'SERVICE', color: '#1E7FC6'},
    {name: 'MARKETING', color: '#EA7513'},
    {name: 'SALES', color: '#ED1150'},
    {name: 'SUPPORT', color: '#3B9E71'},
  ];

  return (
    <View
      key={index}
      style={
        selectionMode && {...commonStyles.verticleView, paddingHorizontal: '3%'}
      }>
              {isOpenModal && (
        <View style={styles.modals}>
          {statusOptions.map((statusItem, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => selectStatus(statusItem.name)}
              style={{
                ...styles.modalItem,
                backgroundColor: statusItem.color,
                width:isLandscape?58:60,
                ...commonStyles.center
              }}>
              <Text style={styles.modalText}>{statusItem.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {/* Modal for selecting status */}

      {selectionMode && (
        <TouchableOpacity onPress={onpress}>
          <Image
            source={isSelected ? Icon.check_1 : Icon.uncheck_1}
            style={styles.checkIcon}
          />
        </TouchableOpacity>
      )}
      {/* Main list item */}
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: isSelected ? COLOR.gray_7 : COLOR.white1,
          width: selectionMode ? '92%' : '90%',
          borderColor: isSelected ? COLOR.primary : COLOR.black_1,
        }}
        key={index}
        onPress={onpress}
        onLongPress={onLongPress}
        delayLongPress={500} 
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {item.image ? (
            <Image source={item.image} style={styles.icon} />
          ) : (
            <Image source={Images.NotImage} style={styles.EmptyIcon} />
          )}
        </View>

        <View style={{width: '78%', marginLeft: '5%'}}>
          <View style={styles.nameAndtimeContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View  style={{...commonStyles.verticleView}}>
          <Text style={styles.discription}>{item.discription}</Text>

          {item.status && (
        <TouchableOpacity
          style={{
            ...styles.statusbtn,
            backgroundColor:
              item.status === 'SERVICE'
                ? '#1E7FC6'
                : item.status === 'MARKETING'
                ? '#EA7513'
                : item.status === 'SALES'
                ? '#ED1150'
                : '#3B9E71',
          }}>
          <Text style={{fontSize: 7, fontWeight: '700', color: COLOR.whites}}>
            {item.status}
          </Text>
        </TouchableOpacity>
      )}
          </View>

          {/* Missed Call status */}
          {item.Status === 'Missed Call' && (
            <View style={commonStyles.horizontalView}>
              <Image style={styles.MissedCall} source={Icon.MissedCall} />
              <Text style={styles.status}>{item.Status}</Text>
            </View>
          )}
        </View>

        {/* Three dot menu icon */}
        <TouchableOpacity onPress={openModal}>
          <Image source={Icon.ThreeDot} style={styles.ThreeDot} />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Display selected status as button */}
     

    </View>
  );
};

export default HomeLists;
