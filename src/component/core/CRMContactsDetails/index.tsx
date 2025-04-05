import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon, Images} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
const CRMContactsDetails = () => {


  
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={{
            ...styles.NewStageBtn,
            ...commonStyles.verticleView,
            marginBottom:"5%"
          }}>
          <Image
            source={Icon.edit}
            style={{...styles.dropDown, tintColor: COLOR.white}}
          />
          <Text style={styles.btnText}>Edit Contact</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View
            style={{
              ...commonStyles.verticleView,
              marginBottom: '5%',
              marginTop: '5%',
            }}>
            <View style={{...commonStyles.horizontalView}}>
              <View style={styles.LatterNameContainer}>
                <Text style={styles.firstName}>JD</Text>
              </View>
              <View>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.service}>CEO at Company Name</Text>
              </View>
            </View>

            <View style={styles.ImagesContainer}>
              <Image source={Images.HandymanServices1} style={styles.Images} />
            </View>
          </View>

          <TextInput
            multiline
            placeholder="Add a note..."
            style={styles.commentStyle}
            placeholderTextColor={COLOR.gray_5}
          />
          <TouchableOpacity
            style={{
              ...styles.NewStageBtn,
            }}>
            <Text style={styles.btnText}>Add This Note</Text>
          </TouchableOpacity>
          <Text style={styles.dateAndTime}>
            Lee added a note on Friday, January 26, 2024 at 1:43 PM
          </Text>

          <TextInput
            multiline
            placeholder="Add a note..."
            style={styles.commentStyle}
            placeholderTextColor={COLOR.gray_5}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Personal Info</Text>
          </View>
          <Text style={styles.emailExm}>info@example.com</Text>
          <Text style={styles.number}>(305) 555-3653 Work</Text>
          <Text style={styles.number}>(305) 555-3653 Home</Text>
          <Image source={Icon.linkedin1} style={styles.iconLinkein} />
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Background</Text>
          </View>
          <Text style={styles.dateAndTime}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </Text>
          <View>
            <Text style={styles.number}>Added on October 29, 2022</Text>
            <Text style={styles.number}>Last seen on February 4, 2024</Text>
            <Text style={styles.number}>Followed by Jane Doe </Text>
          </View>
          <View style={{...styles.infoContainer, marginTop: '8%'}}>
            <Text style={styles.info}>Tags</Text>
            <TouchableOpacity style={styles.plusBtn}>
              <Image source={Icon.plus} style={styles.plusIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{...styles.btns, backgroundColor: COLOR.gray_5,marginTop:"5%",marginBottom:"2%"}}>
            <Text style={styles.buttonText}>football-fun</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btns, backgroundColor: COLOR.perpal,marginBottom:"6%"}}>
            <Text style={styles.buttonText}>musician</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Tasks</Text>
          </View>
          <Text style={{...styles.dateAndTime,marginBottom:"5%"}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          due 4/12/2023
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default CRMContactsDetails;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: COLOR.white_4,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    borderRadius: 15,
    marginBottom: '100%',
  },

  ImagesContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: COLOR.white1,
    ...commonStyles.center,
  },
  dropDown: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLOR.black,
    marginHorizontal: '1.5%',
  },
  NewStageBtn: {
    paddingHorizontal: '3%',
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    ...commonStyles.center,
    alignSelf: 'flex-end',
    marginRight: '6%',
    paddingVertical: '1.5%',
  },
  btnText: {fontSize: 10, fontWeight: '700', color: COLOR.whites},
  Images: {width: 140, height: 140, resizeMode: 'contain'},
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
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '7%',
  },
  service: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '7%',
  },
  commentStyle: {
    padding: 10,
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    textAlignVertical: 'top',
    color: COLOR.black,
    marginBottom: '5%',
  },
  dateAndTime: {
    fontSize: 10,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginTop: '5%',
    marginBottom: '3%',
    width: '90%',
  },
  info: {fontSize: 16, fontWeight: '700', color: COLOR.perpal_2},
  infoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black,
    width: '56%',
    height: 25,
    ...commonStyles.horizontalView,
  },
  emailExm: {
    fontSize: 10,
    fontWeight: '700',
    color: COLOR.perpal_2,
    marginTop: '3%',
  },
  number: {fontSize: 10, fontWeight: '400', color: COLOR.gray_5},
  iconLinkein: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: '5%',
    marginBottom: '4%',
  },
  plusBtn: {
    width: 40,
    height: 18,
    borderRadius: 10,
    backgroundColor: COLOR.perpal,
    ...commonStyles.center,
    marginLeft: '10%',
  },
  plusIcon: {width: 10, height: 10, resizeMode: 'contain'},
  btns: {
    height: 18,
    paddingHorizontal: '3%',
    borderRadius: 15,
    ...commonStyles.center,
    alignSelf:"flex-start"
  },
  buttonText:{fontSize:8,fontWeight:"700",color:COLOR.whites}
});
