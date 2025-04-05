import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import { AllCallProp } from '../../../../data/Types';
import { Icon } from '../../../../assest';
import DetailsSheet from '../../../core/DetailsSheet';
import { PhoneNumberList } from '../../../../data/DummayData';

const Contacts = (prop: AllCallProp) => {
  const {navigation} = prop;
  const [groupedContacts, setGroupedContacts] = useState([]);
  const [DetailsContacts, setDetailsContacts] = useState({});

  const DetailsSheets = React.useRef<RBSheet>(null);

  const openDetailsSheet = (item: any) => {
    DetailsSheets.current?.open();
    setDetailsContacts(item);
  };
  useEffect(() => {
    const grouped = PhoneNumberList.reduce((acc, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    }, {});

    const groupedArray = Object.keys(grouped)
      .sort()
      .reduce((acc, letter) => {
        acc.push({title: letter, type: 'header'});
        acc = acc.concat(
          grouped[letter].sort((a: any, b: any) =>
            a.name.localeCompare(b.name),
          ),
        );
        return acc;
      }, []);

    setGroupedContacts(groupedArray);
  }, []);

  const renderItem = ({item, index}) => {
    if (item.type === 'header') {
      return (
        <View style={styles.header} key={index}>
          <Text style={styles.headerText}>{item.title}</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => openDetailsSheet(item)}
        key={index}>
        <View style={styles.iconContainer}>
          <Image style={styles.userLogo} source={Icon.user} />
        </View>
        <View>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.numberStyle}>{item.number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
      scrollEnabled={false}
        data={groupedContacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.type === 'header' ? `header-${item.title}` : `contact-${item.name}-${index}`}
        />

      <DetailsSheet
        navigation={navigation}
        item={DetailsContacts}
        refs={DetailsSheets}
        onPressNavigate={() => {
          DetailsSheets.current?.close();
        }}
        onpressBack={() => {
          DetailsSheets.current?.close();
        }}
      />
    </View>
  );
};

export default Contacts;
