import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import Input from '../../../component/common/Input';
import {Icon} from '../../../assest';
import {HomeList} from '../../../data/DummayData';
import HomeLists from '../../../component/core/HomeList';
import SCREEN from '../../../data/ScrName';
import {COLOR, commonStyles, TEXT_STYLE} from '../../../themes/StyleGuides';
import * as component from '../../../component';

const Home = (props: any) => {
  const {navigation} = props;
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [list, setList] = useState(HomeList);
  const [selectionMode, setSelectionMode] = useState(false); // Track selection mode
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Track selected items
  const [filterModal, setFilterModal] = useState(false);
  const [saveFilter, setsaveFilter] = useState(false);
  const [Action, setAction] = useState(false);

  console.log('selectionMode', selectedItems);
  const handalStatus = (e: any, i: number) => {
    if (i >= 0 && i < list.length) {
      const updatedList = [...list];
      updatedList[i] = {
        ...updatedList[i],
        status: e,
      };
      setList(updatedList);
      setOpenModalIndex(null);
      console.log('Updated Item:', updatedList[i]);
    } else {
      console.log('Invalid index, no update made.');
    }
  };

  // Handle item selection/deselection
  const toggleSelection = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(i => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  // Start selection mode on long press
  const startSelectionMode = (index: number) => {
    console.log('LoginPress', index);
    setSelectionMode(true);
    toggleSelection(index); // Select the first item on long press
  };

  const closeselector = () => {
    setSelectionMode(false);
    setSelectedItems([]);
  };

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Inbox"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView  contentContainerStyle={{flexGrow:1}} >
      <View style={styles.TextInputCIntainer}>
        <Input
          placeholder={'Search Messages'}
          IconStyle={styles.searchIcon}
          style={{width: '100%', borderRadius: 14}}
          container={{width: '75%'}}
        />
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setFilterModal(true)}>
          <Image source={Icon.FilterIcon} style={styles.FilterIcon} />
          <Text style={styles.FilterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.AllContainer}>
        <Text style={styles.MessagesText}>All Google Messages</Text>
      </TouchableOpacity>
      <View>
        {selectionMode && (
          <View style={styles.selectionModeFiels}>
            <View style={styles.fieldCrosView}>
              <Text style={styles.titleField}>Bulk Actions</Text>
              <TouchableOpacity
                style={styles.closebtn}
                onPress={() => closeselector()}>
                <Image source={Icon.crose} style={styles.closeICon} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...commonStyles.horizontalView,
                width: '80%',
                marginLeft: '8%',
              }}>
              <View style={{...commonStyles.verticleView}}>
                <Text style={{...TEXT_STYLE.regular, fontSize: 10}}>
                  Show all
                </Text>
                <Image source={Icon.DropDown} style={styles.drop} />
              </View>
              <View style={{...commonStyles.verticleView, marginLeft: '5%'}}>
                <Text style={{...TEXT_STYLE.regular, fontSize: 10}}>
                  Interactions older than{' '}
                  <Text style={{color: COLOR.perpal_3}}>15 mins</Text>
                </Text>
                <Image source={Icon.DropDown} style={styles.drop} />
              </View>
            </View>

            <View style={{...commonStyles.verticleView, marginTop: '2%'}}>
              <View style={{...commonStyles.verticleView}}>
                <Image source={Icon.minase} style={styles.minaseIcon} />
                <Text style={styles.lenghtText}>
                  {selectedItems.length} of {list.length}
                </Text>
              </View>

              <TouchableOpacity
                style={{...commonStyles.verticleView}}
                onPress={() => setAction(Action ? false : true)}>
                <Text style={styles.Actions}>Actions</Text>
                <Image source={Icon.dropDown2} style={styles.DropDownArrow} />
              </TouchableOpacity>
            </View>
          </View>
        )}
            {Action && (
        <View style={styles.ActionDropDown}>
          <TouchableOpacity>
            <Text style={styles.ActionModalText}>Mark As Read</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.ActionModalText}>Mark As Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setAction(false)} >
            <Text style={styles.ActionModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
      <FlatList
        data={list}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <HomeLists
            selectionMode={selectionMode}
            item={item}
            index={index}
            onpress={() => {
              if (selectionMode) {
                toggleSelection(index);
              } else {
                navigation.navigate(SCREEN.Chat, {data: item.name});
              }
            }}
            onLongPress={() => startSelectionMode(index)}
            openModal={() => setOpenModalIndex(index)}
            isOpenModal={openModalIndex === index}
            selectStatus={(e: any) => handalStatus(e, index)}
            isSelected={selectedItems.includes(index)}
          />
        )}
      />
      <component.InboxFilterModal
        visible={filterModal}
        onpress={() => setFilterModal(false)}
        saveFilter={() => setsaveFilter(true)}
      />
      <component.SaveFilterInboxModol
        visible={saveFilter}
        ofDropDown={() => setsaveFilter(false)}
        close={() => setsaveFilter(false)}
      />
      </ScrollView>
  
    </View>
  );
};

export default Home;
