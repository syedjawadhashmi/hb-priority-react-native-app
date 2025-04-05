import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLOR, commonStyles, FONT, hp} from '../../../themes/StyleGuides';
import {SheetPropsSucess} from '../../../data/Types';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';

const DetailsSheet = (Prop: SheetPropsSucess) => {
  const {refs, onPressNavigate, onpressBack, item, navigation} = Prop;
  console.log(item);
  return (
    <RBSheet
      ref={refs}
      openDuration={600}
      closeDuration={600}
      closeOnPressBack={true}
      customStyles={{
        wrapper: {},

        draggableIcon: {
          backgroundColor: 'red',
          width: 200,
        },
        container: {
          height: hp(50),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLOR.gray_7,
        },
      }}>
      <TouchableOpacity onPress={onpressBack}>
        <View style={styles.line} />
      </TouchableOpacity>
      <ScrollView>
      <View style={styles.backBtn}>
        <Image source={Icon.user} style={styles.Success} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.number}>{item.number}</Text>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titlecals}>Call</Text>
          <Text style={styles.titleNumber}>{item.number}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.CallScreen)}>
          <Image source={Icon.phone_receive} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titlecals}>Message</Text>
          <Text style={styles.titleNumber}>{item.number}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREEN.Chat, {data: 'Dolores Collins'})
          }>
          <Image source={Icon.chat} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={{...styles.titleContainer, borderBottomColor: COLOR.gray_7,marginBottom:hp("20%")}}>
        <View>
          <Text style={styles.titlecals}>Email</Text>
          <Text style={styles.titleNumber}>{item.number}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SendEmail)}>
          <Image source={Icon.message} style={styles.icons} />
        </TouchableOpacity>
      </View>
      </ScrollView>
    </RBSheet>
  );
};
export default DetailsSheet;

const styles = StyleSheet.create({
  container: {},
  backBtn: {
    backgroundColor: COLOR.whites,
    width: 59,
    height: 59,
    borderRadius: 30,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '10%',
  },
  line: {
    width: 70,
    height: 7,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginTop: '3%',
  },
  title: {
    fontSize: 21,
    color: COLOR.gray_5,
    marginTop: '1%',
    alignSelf: 'center',
    fontWeight: '700',
  },
  number: {
    fontSize: 17,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_6,
    marginBottom: '5%',
    lineHeight: 20,
    alignSelf: 'center',
  },
  titleContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    paddingVertical: '1.5%',
    borderBottomColor: COLOR.gray_6,
  },
  Success: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '9%',
    tintColor: COLOR.gray_7,
  },
  titlecals: {
    fontSize: 16,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.gray_5,
  },
  titleNumber: {
    fontSize: 13,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_6,
    // lineHeight: 13,
  },
  icons: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
    right: 7,
    top: 10,
  },
});
