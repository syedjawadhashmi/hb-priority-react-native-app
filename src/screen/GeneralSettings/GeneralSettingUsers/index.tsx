import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import Input from '../../../component/common/Input';
import {COLOR, commonStyles, wp} from '../../../themes/StyleGuides';
import {useState} from 'react';
import {Users_Ins} from '../../../data/DummayData';
import SCREEN from '../../../data/ScrName';
import AddUserModal from '../../../component/other/GeneralSettings/AddUserModal';
import ImportUsersModal from '../../../component/other/GeneralSettings/ImportUsersModal';

const GeneralSettingUsers = (prop: any) => {
  const {navigation} = prop;
  const [dropDown, setDropDown] = useState(false);
  const [dropDownText, setDropDownText] = useState('');
  const [search, setSearch] = useState('');
  const [userModal, setUserModal] = useState(false);
  const [importuserModal, setImportUserModal] = useState(false);

  const data = [
    {
      title: 'Add A Single User',
    },
    {title: 'Add Multiple Users'},
  ];

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="General Settings"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.AmmountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Users</Text>
          </View>

          <Text style={styles.titleMain}>2 Users</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '5%',
            }}>
            <Input
              placeholder={'Search'}
              Icons={Icon.search}
              style={styles.FieldStyle}
              onChange={(e: any) => setSearch(e)}
              IconStyle={{tintColor: COLOR.gray}}
              textStyle={{fontSize: 12}}
            />

            <TouchableOpacity
              style={styles.dropDown}
              onPress={() => setDropDown(dropDown ? false : true)}>
              <View style={{...commonStyles.verticleView}}>
                <Text style={styles.DropText}>
                  {dropDownText ? dropDownText : 'Add Users'}
                </Text>
                <Image
                  source={Icon.DropDown}
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: 'center',
                    tintColor: COLOR.perpal_2,
                  }}
                />
              </View>

              {dropDown && (
                <View style={{}}>
                  {data.map((item: any) => (
                    <TouchableOpacity
                      style={{zIndex: 0}}
                      onPress={() => {
                        setDropDownText(item.title), setDropDown(false);
                        setUserModal(true);
                      }}>
                      <Text style={styles.DropText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={{marginBottom: '10%'}}>
            <View style={styles.TabalStatus}>
              <View style={{...styles.tabalStatusBox, borderTopLeftRadius: 10}}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}>
                  Name
                </Text>
              </View>
              <View style={styles.tabalStatusBox}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}>
                  Role
                </Text>
              </View>
              <View style={styles.tabalStatusBox}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}>
                  Locations
                </Text>
              </View>
              <View style={styles.tabalStatusBox}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}>
                  Lastupdate
                </Text>
              </View>
              <View style={{...styles.tabalStatusBox}}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}>
                  LastLogin
                </Text>
              </View>
              <View
                style={{...styles.tabalStatusBox, borderTopRightRadius: 10}}>
                <Text style={{...styles.TabalText, color: COLOR.whites}}></Text>
              </View>
            </View>
            <View>
              {Users_Ins.map((item, index) => (
                <View
                  style={{
                    ...commonStyles.verticleView,
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...styles.TabalText,
                        color: COLOR.gray_5,
                        marginLeft: '15%',
                      }}>
                      {item.Name}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                    }}>
                    <Text
                      style={{
                        ...styles.TabalText,
                        color: COLOR.gray_5,
                        marginLeft: '15%',
                      }}>
                      {item.Role}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                    }}>
                    <Text
                      style={{
                        ...styles.TabalText,
                        color: COLOR.gray_5,
                        marginLeft: '15%',
                      }}>
                      {item.Locations}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                    }}>
                    <Text
                      style={{
                        ...styles.TabalText,
                        color: COLOR.gray_5,
                        marginLeft: '15%',
                      }}>
                      {item.LastUpdated}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                    }}>
                    <Text
                      style={{
                        ...styles.TabalText,
                        color: COLOR.gray_5,
                        marginLeft: '15%',
                      }}>
                      {item.LastLogin}
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.TabalListContainer,
                      backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(SCREEN.BillingDashboard)
                      }>
                      <Image source={Icon.ThreeDot} style={styles.threeDot} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>

      <AddUserModal
        isVisible={userModal}
        onClose={() => {
          setUserModal(false);
        }}
        onAdd={() => {
          setImportUserModal(true), setUserModal(false);
        }}
      />
      <ImportUsersModal
        visible={importuserModal}
        onClose={() => setImportUserModal(false)}
      />
    </View>
  );
};
export default GeneralSettingUsers;
