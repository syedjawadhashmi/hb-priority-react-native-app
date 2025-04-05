import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';
import Input from '../../../common/Input';
import Buttons from '../../../common/Buttons';
import {Dropdata, SearchData} from '../../../../data/DummayData';
import {inboxProp} from '../../../../data/Types';
import {COLOR, } from '../../../../themes/StyleGuides';
import TextInputs from '../../../common/TextInputs';
import DropDown from '../../../core/DropDown';
import {Images} from '../../../../assest';

const BusinessName = (props: inboxProp) => {
  const {onpress} = props;
  const [searchBar, setSearchBar] = useState(false);
  const [search, setSearch] = useState('');
  const [ShowFeilds, setFeilds] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [size, setSize] = useState(null);
  const [filteredData, setFilteredData] = useState(SearchData);
  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.trim() === '') {
      setFilteredData(SearchData);
    } else {
      const filtered = SearchData.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const handalSelectSearch = (title: any) => {
    setSearch(title), setSearchBar(false);
    setFeilds(true);
  };

  return (
    <View style={styles.container}>
        <ScrollView >
      <Input
      IconStyle={{tintColor:COLOR.gray}}
        placeholder={'Business Name'}
        style={styles.inputStyle}
        onFocus={() => setSearchBar(true)}
        onChange={handleSearch}
        // onBlur={() => setSearchBar(false)}
        value={search}
        
      />
      {ShowFeilds && (
        <View style={styles.feildsContainer}>
          <TextInputs
            placeholder={'Business Address'}
            placeholderColor={COLOR.gray_6}
            style={styles.btnStyle}
            keyboardType="email-address"
          />
          <TextInputs
            style={styles.btnStyle}
            placeholder={'Suite/Unit/Building (optional)'}
            placeholderColor={COLOR.gray_6}
          />
          <View style={styles.CityStateContainer}>
            <TextInputs
              placeholder={'City'}
              placeholderColor={COLOR.gray_6}
              style={styles.CityAndState}
            />
            <TextInputs
              style={styles.CityAndState}
              placeholder={'State/Province'}
              placeholderColor={COLOR.gray_6}
            />
          </View>
          <View style={styles.CityStateContainer}>
            <TextInputs
              placeholder={'ZIP/Postal Code'}
              placeholderColor={COLOR.gray_6}
              style={styles.CityAndState}
            />
            <DropDown
              isOpen={openSize}
              placeText={{fontWeight: '400', fontSize: 14}}
              toggleDropdown={() => setOpenSize(openSize ? false : true)}
              options={Dropdata}
              onSelect={(e: any) => setSize(e)}
              selectedOption={size}
              container={styles.DropDown}
              placeHolder={'United States'}
            />
          </View>
        </View>
      )}

      <Buttons title={'Continue'} container={styles.button} onpress={onpress} />
      <Image source={Images.HubSparkLogo} style={styles.logo} />

      {searchBar && (
        <View
          style={
            filteredData.length > 6
              ? styles.searchBarStyle
              : styles.largeSearchBarStyle
          }>
          <FlatList
            data={filteredData}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item,index}) => (
              <TouchableOpacity
              key={index}
                style={styles.ListConTainer}
                onPress={() => handalSelectSearch(item.title)}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.discription}>{item.discription}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      </ScrollView>
    </View>
  );
};

export default BusinessName;
