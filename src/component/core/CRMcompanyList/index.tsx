import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {CRMcompanyListData} from '../../../data/DummayData';
import {Icon} from '../../../assest';

const CRMcompanyList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CRMcompanyListData}
        renderItem={({item,index}) => (
          <TouchableOpacity style={styles.ListCOntainer} key={index} >
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={item.image} />
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.service}>{item.service}</Text>

            <View style={styles.contactAnddeal}>
              <View style={styles.contactCntainer}>
                <Image style={styles.iconStyle} source={Icon.contact} />
                <View>
                  <Text style={styles.contact}>{item.contact}</Text>
                  <Text style={styles.contact}>contacts</Text>
                </View>
              </View>
              <View style={{...styles.contactCntainer, left: 15}}>
                <Image style={styles.iconStyle} source={Icon.DollerIcon} />
                <View>
                  <Text style={styles.contact}>{item.deal}</Text>
                  <Text style={styles.contact}>deals</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CRMcompanyList;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    marginBottom:"20%"
  },

  ListCOntainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '4%',
    backgroundColor: COLOR.whites,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.white1,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom:"3%"
  },
  images: {width: 120, height: 120, resizeMode: 'cover'},
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  service: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  iconStyle: {width: 30, height: 30, resizeMode: 'contain', marginRight: '3%'},
  contactCntainer: {...commonStyles.verticleView},
  contact: {fontSize: 11, fontWeight: '400', color: COLOR.gray_5},
  contactAnddeal: {
    ...commonStyles.verticleView,
    paddingHorizontal: '22%',
    marginTop: '4%',
    marginBottom: '8%',
  },
});
