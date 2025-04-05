import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import {Icon, Images} from '../../../assest';
import {ReputationModalType} from '../../../data/Types';
import {useState} from 'react';

const RespondReviewModal = (props: ReputationModalType) => {
  const {visible, onpress, onpressOfModal,data} = props;
  const [rating, setRating] = useState(0);

  const totalStars = 5;
  const StarsArray = [...Array(totalStars).keys()];

  const handleStarPress = (index: any) => {
    setRating(index + 1);
  };
  console.log(data)
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ScrollView>
          <TouchableOpacity style={styles.coreseIcon} onPress={onpressOfModal}>
            <Image
              source={Icon.crose}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>Respond To Review</Text>
          <View style={styles.ListContainer}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View style={{...commonStyles.horizontalView, marginTop: '4%'}}>
                <Image source={data.Icons} style={styles.listImage} />
                <View style={styles.StarContainer}>
                  {StarsArray.map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleStarPress(index)}
                      style={{marginHorizontal:"1.5%"}}>
                      <Image
                        source={
                          rating > index ? Icon.Star : Icon.UnselectedStart
                        }
                        style={styles.Stars}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            <Text style={styles.TitleList}>{data.title}</Text>
            <Text style={styles.discription}>
            {data.doscription}
            </Text>
          </View>

          <Text style={styles.ResponedText}>Respond to Cindy’s review:</Text>
          <TouchableOpacity
            style={{
              ...styles.ListingBtn,
              alignSelf: 'flex-start',
              marginLeft: '5%',

            }}
            onPress={onpress}>
            <Text style={{...styles.ListBtnText, color: COLOR.black}}>
              + Create Template
            </Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Your reply here..."
            placeholderTextColor={COLOR.gray_5}
            style={styles.comminText}
          />
          <View
            style={{
              ...commonStyles.verticleView,
              alignSelf: 'flex-end',
              marginRight: '5%',
            }}>
            <TouchableOpacity style={styles.ListingBtn} onPress={onpress}>
              <Text style={{...styles.ListBtnText,color:COLOR.black}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onpressOfModal}
              style={{
                ...styles.ListingBtn,
                backgroundColor: COLOR.red,
                marginLeft: '5%',
              }}>
              <Text style={{...styles.ListBtnText, color: COLOR.white}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default RespondReviewModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ' rgba(0, 0, 0, 0.5)',
    flex: 1,
    ...commonStyles.center,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: COLOR.white1,
    borderRadius: 10,
  },
  coreseIcon: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '5%'},
  Title: {
    fontSize: normalize(20),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginBottom:"3%"
  },
  Stars: {width: 22, height: 22, resizeMode: 'contain', padding: 10},
  StarContainer: {
    ...commonStyles.horizontalView,
    marginLeft:"5%",
  },

  ListContainer: {
    width: '90%',
    height: 130,
    borderRadius: 20,
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    marginBottom: '2.5%',
  },
  listImage: {width: 45, height: 45, resizeMode: 'contain'},
  listbtn: {
    width: 70,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    ...commonStyles.center,
  },
  ListBtnText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.whites},
  TitleList: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '1%',
  },
  discription: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '2%',
    width:"90%"
  },
  LineStyle: {
    width: '90%',
    height: 2,
    backgroundColor: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '5%',
  },
  ResponedText: {
    fontSize: normalize(12),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '7%',
    marginTop:"2%"

  },
  ListingBtn: {
    backgroundColor: COLOR.primary,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginBottom: '5%',
    ...commonStyles.center,
    height: 30,
    paddingHorizontal: '4%',
  },
  comminText: {
    width: '90%',
    height: 80,
    backgroundColor: COLOR.whites,
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
    textAlignVertical: 'top',
    color:COLOR.black
  },
});
