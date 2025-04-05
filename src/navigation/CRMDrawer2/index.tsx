import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  DrawerCRMList,
  DrawerCRMList2,
  DrawerDataList,
} from '../../data/DummayData';
import {COLOR, commonStyles} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';
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
        <ScrollView>
          {DrawerCRMList2.map((item, index) => (
            <View key={index}>
              <View style={styles.titleContainer}>
                <Image source={item.images} style={styles.titleIcons} />
                <Text style={styles.titleStyle}>{item.title}</Text>
              </View>
              {item.data.map((items, index) => (
                <View style={styles.listContainer} key={index}>
                  {item.title == 'TAGS' ? (
                    <TouchableOpacity
                      onPress={() => handleCheckToggle(items.name)}
                      style={{
                        ...styles.button,
                        backgroundColor: checkedItems.includes(items.name)
                          ? COLOR.gray_5
                          : COLOR.perpal,
                      }}>
                      <Text style={styles.btnTitle}>{items.name}</Text>
                    </TouchableOpacity>
                  ) : item.title == 'LAST SEEN' ? (
                    <TouchableOpacity
                      onPress={() => handleCheckToggle(items.name)}>
                      <Text
                        style={{
                          ...styles.nameStyle,
                          color: checkedItems.includes(items.name)
                            ? COLOR.perpal
                            : COLOR.gray_5,
                        }}>
                        {items.name}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text style={styles.nameStyle}>{items.name}</Text>
                  )}
                  {item.title == 'STATUS' && (
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                        backgroundColor:
                          items.name == 'Cold'
                            ? COLOR.perpal
                            : items.name == 'Warm'
                            ? COLOR.black1
                            : items.name == 'Hot'
                            ? COLOR.gray_5
                            : COLOR.primary,
                        marginLeft: '15%',
                      }}
                    />
                  )}
                </View>
              ))}
            </View>
          ))}
          <View style={{height: 180}} />
        </ScrollView>
      </View>
    </View>
  );
};

const CRMDrawer2 = () => {
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
          marginTop:isLandscape?"0.5%": '16%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.white1,
        },
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen name="CRMContacts" component={screens.CRMContacts} />
    </Drawer.Navigator>
  );
};

export default CRMDrawer2;
