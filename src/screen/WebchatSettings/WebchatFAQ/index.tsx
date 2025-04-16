import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {WebchatFAQQuestion} from '../../../data/DummayData';
import EditFAQ from '../../../component/other/WebchatSettings/EditFAQ';

const WebchatFAQ = (props: any) => {
  const {navigation} = props;
  const [dropwDown, setDropDown] = useState(false);
  const [dropwDownText, setDropDownText] = useState('');
  const [editModal, setEditModal] = useState(false);

  const handalDrop = (num: number) => {
    if (num == 1) {
      setDropDownText('Add an FAQ');
      setDropDown(false);
    } else {
      setDropDownText('Bulk Import');
      setDropDown(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Webchat Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true} >
      <View style={styles.titleContaoner}>
        <Text style={styles.Title}>82 FAQs</Text>
        <View style={styles.ButnDrawer}>
          <TouchableOpacity
            onPress={() => setDropDown(dropwDown ? false : true)}
            style={{...commonStyles.verticleView}}>
            <Text style={styles.dropDownText}>
              {dropwDownText ? dropwDownText : 'Add FAQs'}
            </Text>
            <Image source={Icon.DropDown} style={styles.DropDownIcon} />
          </TouchableOpacity>

          {dropwDown && (
            <View>
              <TouchableOpacity onPress={() => handalDrop(1)}>
                <Text style={styles.dropDownText}>Add an FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handalDrop(2)}>
                <Text style={styles.dropDownText}>Bulk Import</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <FlatList
      scrollEnabled={false}
        data={WebchatFAQQuestion}
        renderItem={({item, index}) => (
          <View>
            <View style={{...commonStyles.horizontalView}}>
              <Text style={styles.QText}>Q{1 + index}</Text>
              <Text style={{...styles.QText, color: COLOR.gray_5}}>
                {item.Qtn}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Image source={Icon.user_5} style={styles.userIcon} />
              <Text style={styles.loctionText}>All Locations</Text>
            </View>

            <View style={styles.AnsContainer}>
              <Text
                style={{
                  ...styles.loctionText,
                  marginLeft: '5%',
                  marginTop: '4%',
                }}>
                Answer
              </Text>
              <Text
                style={{
                  ...styles.loctionText,
                  marginLeft: '5%',
                  marginTop: '1%',
                  fontWeight: '800',
                  fontSize: 14,
                  marginBottom:"3%"
                }}>
                {item.Ans}
              </Text>
            </View>
            <View
              style={{...commonStyles.horizontalView, alignSelf: 'flex-end'}}>
              <TouchableOpacity
                style={{
                  ...styles.BtnContaioner,
                  backgroundColor: COLOR.primary,
                }}
                onPress={() => setEditModal(true)}>
                <Text style={{...styles.BtnText, color: COLOR.black_2}}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.BtnContaioner, backgroundColor: COLOR.red}}>
                <Text style={styles.BtnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <EditFAQ
        visible={editModal}
        close={() => setEditModal(false)}
        save={() =>setEditModal(false)}
      />
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default WebchatFAQ;
