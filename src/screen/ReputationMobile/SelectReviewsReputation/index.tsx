import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Icon} from '../../../assest';
import {Dropdata, ReputationReviewsList} from '../../../data/DummayData';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import {useState} from 'react';
import Header from '../../../component/common/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import {StarGetRating} from '../../../component/core/StarGetRating';
import RePutationFilterModal from '../../../component/core/RePutationFilterModal';
import SCREEN from '../../../data/ScrName';

const data = [
  {title: 1},
  {title: 2},
  {title: 3},
  {title: 4},
  {title: 5},
  {title: 6},
];

const SelectReviewsReputation = (props: any) => {
  const {navigation} = props;
  const [rating, setRating] = useState(5);
  const [filterModal, setFilterModal] = useState(false);
  const [saveFilter, setsaveFilter] = useState(false);
  const [toggleStates, setToggleStates] = useState<{[key: number]: boolean}>(
    {},
  ); // Track toggle states for each item

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});

  const handleSelectOption = (option: number, index: number) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [index]: option,
    }));
    setOpenDropdownIndex(null); // Close dropdown after selecting option
  };
  const handleToggle = (index: number, isOn: boolean) => {
    setToggleStates(prevState => ({
      ...prevState,
      [index]: isOn, // Update toggle state for the specific item
    }));
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Reputation"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}  >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select Reviews</Text>
      </View>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={() => setFilterModal(true)}>
        <Image source={Icon.FilterIcon} style={styles.FilterIcon} />
        <Text style={styles.FilterText}>Filter</Text>
      </TouchableOpacity>
      <View>
        <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
          style={{marginBottom: '13%'}}
          data={ReputationReviewsList}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View style={styles.ListContainer}>
                <View style={{width: '90%', alignSelf: 'center'}}>
                  <View
                    style={{...commonStyles.horizontalView, marginTop: '4%'}}>
                    <Image source={item.Icons} style={styles.listImage} />
                    <View style={styles.StarContainer}>
                      <StarGetRating rating={rating} />
                    </View>
                  </View>
                </View>

                <Text style={styles.TitleList}>{item.title}</Text>
                <Text style={styles.discription}>{item.doscription}</Text>
                <View style={styles.LineStyle} />
                <Text style={styles.DateStyle}>07-30-2024</Text>
              </View>
              <View style={styles.ToggalContainer}>
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '400',
                      color: COLOR.gray_5,
                      marginBottom: '5%',
                    }}>
                    Position
                  </Text>
                  <View>
                    <TouchableOpacity
                      onPress={() => setOpenDropdownIndex(index)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>
                        {selectedOptions[index] !== undefined
                          ? selectedOptions[index]
                          : '1'}
                      </Text>
                      <Image
                        source={Icon.DropDown}
                        tintColor={COLOR.whites}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    {openDropdownIndex === index && (
                      <View style={styles.openDropDown}>
                        {data.map(option => (
                          <TouchableOpacity
                            key={option.title}
                            onPress={() =>
                              handleSelectOption(option.title, index)
                            }>
                            <Text style={styles.optionText}>
                              {option.title}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text
                      style={styles.select}>
                      Select
                    </Text>
                    <ToggleSwitch
                      isOn={toggleStates[index] ?? false} // Set toggle state for the current item
                      onColor={COLOR.primary}
                      offColor={COLOR.whites}
                      labelStyle={{color: 'black', fontWeight: '200'}}
                      size="small"
                      onToggle={isOn => handleToggle(index, isOn)} // Handle toggle change
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          style={{...styles.lastBtn, backgroundColor: COLOR.red}}>
          <Text style={{...styles.btnText, color: COLOR.whites}}>Cancel</Text>
        </TouchableOpacity>
        <View style={{...commonStyles.verticleView}}>
          <View style={{borderBottomColor: COLOR.black, borderBottomWidth: 1}}>
            <Text style={{...styles.btnText, fontSize: normalize(11)}}>Select Reviews</Text>
          </View>
          <Image
            source={Icon.RightArrowchevron}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </View>
        <Text style={{...styles.btnText, fontSize: normalize(11)}}>Widget Design</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate(SCREEN.WidgetDesign)}
          style={{...styles.lastBtn, backgroundColor: COLOR.primary,...commonStyles.verticleView}}>
          <Text style={{...styles.btnText, color: COLOR.black}}>Next</Text>
          <Image
            source={Icon.RightArrowchevron}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <RePutationFilterModal
        visible={filterModal}
        onpress={() => setFilterModal(false)}
        saveFilter={() => setsaveFilter(true)}
      />
    </View>
  );
};
export default SelectReviewsReputation;
