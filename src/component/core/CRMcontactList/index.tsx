import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CRMcontactListProps} from '../../../data/Types';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import {useState} from 'react';
const CRMcontactList = (props: CRMcontactListProps) => {
  const {name, status, activetime, Icons, index, onpress} = props;
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckToggle = (itemIndex: number) => {
    setCheckedItems(prevState => {
      if (prevState.includes(itemIndex)) {
        return prevState.filter(index => index !== itemIndex);
      } else {
        return [...prevState, itemIndex];
      }
    });
  };
  const firstTwoLetters = name.slice(0, 2);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheckToggle(index)}>
        <Image
          source={checkedItems.includes(index) ? Icon.check : Icon.uncheck}
          style={styles.checkBox}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.ListContainer} onPress={onpress}>
        <View style={{...commonStyles.horizontalView}}>
          <View style={{...commonStyles.center}}>
            <View style={styles.LatterNameContainer}>
              <Text style={styles.firstName}>{firstTwoLetters}</Text>
            </View>
            <Image style={styles.linkedIn} source={Icons} />
          </View>

          <View style={{marginLeft: '7%', bottom: 5}}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={{...styles.btnStyle, backgroundColor: COLOR.gray_5}}>
                <Text style={styles.btnText}>football-fun</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnText}>musician</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.dotView}>
          <View style={styles.dotStyle} />
          <Text style={styles.activeTime}>last activity</Text>
          <Text style={styles.activeTime}>{activetime}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CRMcontactList;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.horizontalView,
    backgroundColor: COLOR.whites,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_7,
    paddingLeft: '3%',
    width: '100%',
    paddingRight: '4%',
  },
  checkBox: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.gray_5,
    bottom: 15,
  },
  ListContainer: {
    width: '80%',
    paddingVertical: '4%',
    ...commonStyles.verticleView,
    marginLeft: '3%',
  },
  firstName: {
    fontSize: 15,
    fontWeight: '800',
    color: COLOR.whites,
  },
  LatterNameContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLOR.gray_9,
    ...commonStyles.center,
  },
  linkedIn: {width: 20, height: 20, resizeMode: 'contain', marginTop: '15%'},
  name: {fontSize: 14, fontWeight: '700', color: COLOR.gray_5},
  status: {fontSize: 12, fontWeight: '400', color: COLOR.gray_5},
  btnText: {fontSize: 8, fontWeight: '700', color: COLOR.whites},
  btnStyle: {
    backgroundColor: COLOR.perpal,
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    borderRadius: 10,
    marginRight: '5%',
  },
  btnContainer: {
    ...commonStyles.horizontalView,
    marginTop: '4%',
  },
  activeTime: {
    fontSize: 10,
    fontWeight: '500',
    color: COLOR.gray_5,
    alignSelf: 'flex-end',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: COLOR.perpal,
    alignSelf: 'flex-end',
    marginBottom: '5%',
  },
  dotView: {
    alignSelf: 'flex-end'
  },
});