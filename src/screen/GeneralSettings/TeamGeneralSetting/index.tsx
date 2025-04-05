import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './style';
import EmployeeCard from '../../../component/other/GeneralSettings/EmployeeCard';
import {Dropdata, EmployeeCardData} from '../../../data/DummayData';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import Input from '../../../component/common/Input';
import DropDown from '../../../component/core/DropDown';

const TeamGeneralSetting = (prop: any) => {
  const {navigation} = prop;
  const [State, setState] = useState(false);
  const [userRole, setUserRole] = useState('');

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
            <Text style={styles.title}>Teams</Text>
          </View>
          <View style={styles.SearchContainer}>
            <Input placeholder={'Search'} Icons={Icon.search} />
            {/* Dropdown */}
            <DropDown
              container={{width: 140}}
              isOpen={State}
              toggleDropdown={() => setState(State ? false : true)}
              options={Dropdata}
              onSelect={(item: any) => setUserRole(item)}
              selectedOption={userRole ? userRole : 'User Role'}
            />
          </View>

          <View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add Employee</Text>
            </TouchableOpacity>

            {/* Employee List */}
            <FlatList
              data={EmployeeCardData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <EmployeeCard item={item} isOdd={index % 2 !== 0} />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default TeamGeneralSetting;
