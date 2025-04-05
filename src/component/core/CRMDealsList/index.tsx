import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CRMDealsListProps} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import {useState} from 'react';

const CRMDealsList = (props: CRMDealsListProps) => {
  const {title, data} = props;
  const [open, setOpen] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(title)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {open === title && (
          <View style={{marginBottom: '5%'}}>
            {data.map((item: any) => (
              <View>
                <TouchableOpacity style={styles.containerList}>
                  <View style={styles.imagesContainer}>
                    <Image source={item.image} style={styles.images} />
                  </View>
                  <View>
                    <Text style={styles.Description}>Description for item</Text>
                    <Text style={styles.text}>{item.num}</Text>
                    <Text style={styles.text}>${item.finance},Finance</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
export default CRMDealsList;

const styles = StyleSheet.create({
  container: {},
  button: {
    width: '100%',
    height: 40,
    borderRadius: 14,
    backgroundColor: COLOR.perpal_3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '6%',
  },

  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: '4%',
  },
  Description: {fontSize: 14, fontWeight: '700', color: COLOR.gray_5},
  images: {width: 120, height: 120, resizeMode: 'center'},
  containerList: {
    width: '90%',
    height: 90,
    backgroundColor: COLOR.whites,
    borderRadius: 13,
    alignSelf: 'center',
    // marginBottom: '5%',
    marginTop: '5%',
    ...commonStyles.horizontalView,
  },
  text: {fontSize: 11, fontWeight: '400', color: COLOR.gray_5},
  imagesContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.gray_7,
    ...commonStyles.center,
    borderRadius: 30,
    marginLeft: '7%',
    marginRight: '4%',
  },
});
