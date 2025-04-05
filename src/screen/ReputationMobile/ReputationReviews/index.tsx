import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import Input from '../../../component/common/Input';
import {Icon, Images} from '../../../assest';
import {COLOR, commonStyles, wp} from '../../../themes/StyleGuides';
import {useState} from 'react';
import RespondReviewModal from '../../../component/core/RespondReviewModal';
import {ReputationReviewsList} from '../../../data/DummayData';
import ReputationCreateReplyModal from '../../../component/core/ReputationCreateReplyModal';
import SCREEN from '../../../data/ScrName';
import RePutationFilterModal from '../../../component/core/RePutationFilterModal';
import {StarGetRating} from '../../../component/core/StarGetRating';

const ReputationReviews = (props: any) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalReply, setModalReply] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [saveFilter, setsaveFilter] = useState(false);
  const [select, setSelect] = useState(0);
  const [rating, setRating] = useState(5);
  const [itemDetails, setItemDetails] = useState({});

  const handalShowCase = () => {
    navigation.navigate(SCREEN.ShowcaseReviews);
  };

  const handalOpenModal = (e: any) => {
    setItemDetails(e);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Reputation"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}  >
        <View style={styles.TextInputCIntainer}>
          <Input placeholder={'Search Messages'} style={{width: wp('68%')}} />
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setFilterModal(true)}>
            <Image source={Icon.FilterIcon} style={styles.FilterIcon} />
            <Text style={styles.FilterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handalShowCase()}
            style={{
              ...styles.selectBtn,
              backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
            }}>
            <Text style={styles.selectdText}>Need Reply</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        scrollEnabled={true}
          style={{marginBottom: '20%'}}
          data={ReputationReviewsList}
          renderItem={({item, index}) => (
            <View style={styles.ListContainer} key={index}>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View style={{...commonStyles.verticleView, marginTop: '4%'}}>
                  <View style={styles.StarContainer}>
                    <Image source={item.Icons} style={styles.listImage} />

                    <StarGetRating rating={rating} />
                  </View>
                  <TouchableOpacity
                    style={{
                      ...styles.listbtn,
                      backgroundColor:
                        index == 0 || index == 2
                          ? COLOR.perpal_3
                          : COLOR.gray_7,
                    }}
                    onPress={() => handalOpenModal(item)}>
                    <Text
                      style={{
                        ...styles.ListBtnText,
                        color:
                          index == 0 || index == 2
                            ? COLOR.whites
                            : COLOR.perpal_3,
                      }}>
                      {index == 0 || index == 2 ? 'Respond' : 'View'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.TitleList}>{item.title}</Text>
              <Text style={styles.discription}>{item.doscription}</Text>
              <View style={styles.LineStyle} />
            </View>
          )}
        />
      </ScrollView>
      <RespondReviewModal
        visible={modalVisible}
        onpressOfModal={() => setModalVisible(false)}
        onpress={() => setModalReply(true)}
        data={itemDetails}
      />
      <ReputationCreateReplyModal
        visible={modalReply}
        onpress={handalShowCase}
        onpressOfModal={() => setModalReply(false)}
      />
      <RePutationFilterModal
        visible={filterModal}
        onpress={() => setFilterModal(false)}
        saveFilter={() => setsaveFilter(true)}
      />
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default ReputationReviews;
