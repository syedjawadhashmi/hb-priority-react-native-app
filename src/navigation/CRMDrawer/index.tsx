import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions} from 'react-native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {DrawerCRMList} from '../../data/DummayData';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import {styles} from './style';
import * as screens from '../../screen';
import {Icon} from '../../assest';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const {navigation} = props;
  const [checkedItems, setCheckedItems] = useState<string[]>([]); // Changed type to string[] for better handling

  const handleCheckToggle = (itemIndex: string) => {
    setCheckedItems(prevState => {
      if (prevState.includes(itemIndex)) {
        return prevState.filter(index => index !== itemIndex);
      } else {
        return [...prevState, itemIndex];
      }
    });
  };

  return (
    <View {...props}>
      <View style={styles.container}>
        <View style={styles.FilterContainer}>
          <View style={{...commonStyles.horizontalView}}>
            <TouchableOpacity>
              <Image source={Icon.Filters} style={styles.FiltersIcon} />
            </TouchableOpacity>
            <Text style={styles.Filters}>Filters</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image source={Icon.close} style={styles.FiltersIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView  scrollEnabled={true} >
          {DrawerCRMList.map((item, index) => (
            <View key={index}>
              <View style={styles.titleContainer}>
              <Image source={item.images} style={styles.ItemICon}/>

                <Text style={styles.titleStyle}>{item.title}</Text>
              </View>
              {item.data.map((item, index) => (
                <View style={styles.listContainer} key={index}>
                  <TouchableOpacity
                    onPress={() => handleCheckToggle(item.name)}>
                    <Text
                      style={{
                        ...styles.nameStyle,
                        color: checkedItems.includes(item.name)
                          ? COLOR.perpal
                          : COLOR.gray_5,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
          <View style={{height: 140}} />
        </ScrollView>
      </View>
    </View>
  );
};

const CRMDrawer = () => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 200,
          height: '83%',
          marginTop:isLandscape?"0.1%": '16%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.whites,
          flex:1
        },
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen name="Companies" component={screens.Companies} />
    </Drawer.Navigator>
  );
};

export default CRMDrawer;
