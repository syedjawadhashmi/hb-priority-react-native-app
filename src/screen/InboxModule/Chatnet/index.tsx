import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {ChatNetList} from '../../../data/DummayData';
import SCREEN from '../../../data/ScrName';
import {Icon} from '../../../assest';
import {useState} from 'react';
import {COLOR, commonStyles, TEXT_STYLE} from '../../../themes/StyleGuides';
import * as component from '../../../component';

const Chatnet = (prop: any) => {
  const {navigation} = prop;
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [list, setList] = useState(ChatNetList);
  const [selectionMode, setSelectionMode] = useState(false); // Track selection mode
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Track selected items
  const [filterModal, setFilterModal] = useState(false);
  const [saveFilter, setsaveFilter] = useState(false);

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

  const toggleSelection = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter(i => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const startSelectionMode = (index: number) => {
    console.log('LoginPress', index);
    setSelectionMode(true);
    toggleSelection(index); 
  };

  const closeselector = () => {
    setSelectionMode(false);
    setSelectedItems([]);
  };
  return (
    <View style={styles.container}>
      <component.Header
        firstIcon={Icon.bars}
        title="Inbox"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.TextInputCIntainer}>
          <component.Input
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
        <View style={styles.AllContainer}>
          <Text style={styles.MessagesText}>All incoming Activity</Text>
        </View>
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
              style={{...commonStyles.verticleView, paddingHorizontal: '4%'}}>
              <View style={{...commonStyles.verticleView}}>
                <Text style={{...TEXT_STYLE.regular, fontSize: 12}}>
                  Show all
                </Text>
                <Image source={Icon.DropDown} style={styles.drop} />
              </View>
              <View style={{...commonStyles.verticleView}}>
                <Text style={{...TEXT_STYLE.regular, fontSize: 12}}>
                  Interactions older than 15 mins
                </Text>
                <Image source={Icon.DropDown} style={styles.drop} />
              </View>
            </View>

            <View style={{...commonStyles.verticleView, marginTop: '2%'}}>
              <View style={{...commonStyles.verticleView}}>
                <Image
                  source={Icon.minase}
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: 'center',
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: COLOR.gray_5,
                    marginLeft: '3%',
                  }}>
                  {list.length} of {selectedItems.length}
                </Text>
              </View>

              <TouchableOpacity style={{...commonStyles.verticleView}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: COLOR.gray_5,
                    marginRight: 10,
                  }}>
                  Actions
                </Text>
                <Image
                  source={Icon.dropDown2}
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: 'center',
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <FlatList
          scrollEnabled={false}
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <component.HomeLists
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
export default Chatnet;
