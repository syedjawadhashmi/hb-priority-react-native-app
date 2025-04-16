import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import {FAQsProps} from '../../../../data/Types';
import SCREEN from '../../../../data/ScrName';

const FAQs = (props: FAQsProps) => {
  const {navigation, onpress} = props;
  const [fAQ, setFAQ] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={Icon.FQA} style={styles.FQAIcon} />
      <Text style={styles.TitleStyle}>Add Your FAQs</Text>
      <Text style={styles.discription}>
        Automatically answer questions about your business {'\n'}and build
        customer trust.
      </Text>
      {fAQ ? (
        <View style={{...commonStyles.verticleView, paddingHorizontal: '15%'}}>
          <TouchableOpacity
            style={styles.BtnContaioner}
            onPress={() => navigation.navigate(SCREEN.WebchatFAQ)}>
            <Image source={Icon.AddAn} style={styles.icon} />

            <Text style={styles.BtnText}>Add An FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.BtnContaioner,
              backgroundColor: COLOR.white1,
              borderWidth: 1,
              borderColor: COLOR.perpal_3,
            }}
            onPress={onpress}>
            <Image
              source={Icon.BulkImport}
              style={styles.icon}
              tintColor={COLOR.perpal_3}
            />
            <Text style={{...styles.BtnText, color: COLOR.perpal_3}}>
              Bulk Import
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.BtnContaioner}
          onPress={() => setFAQ(true)}>
          <Text style={styles.BtnText}>Visit FAQs page</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default FAQs;

const styles = StyleSheet.create({
  container: {},
  FQAIcon: {width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center'},
  TitleStyle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.perpal_3,
    alignSelf: 'center',
  },
  discription: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    textAlign: 'center',
  },
  BtnContaioner: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    backgroundColor: COLOR.perpal_3,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '5%',
    ...commonStyles.verticleView,
  },
  BtnText: {fontSize: 12, fontWeight: '900', color: COLOR.whites},
  icon: {width: 20, height: 20, resizeMode: 'center', tintColor: COLOR.whites},
});
