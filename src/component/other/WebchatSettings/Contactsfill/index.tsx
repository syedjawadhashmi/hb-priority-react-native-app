import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import styles from './style';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import { UpdatePaymentModal } from '../../../../data/Types';

const Contactsfill = (props:UpdatePaymentModal) => {
    const{close,visible}=props
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <Modal transparent visible={visible} >
      <View style={styles.container}>
        <View style={styles.modal}>
          <ScrollView>
          <TouchableOpacity style={styles.closebtn} onPress={close} >
            <Image source={Icon.close} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={{...commonStyles.horizontalView}}>
            <View
              style={{
                paddingLeft: '5%',
                height:"100%",
                alignItems:"center"
              }}>
              <View style={styles.circle}>
                <Text style={styles.numberText}>1</Text>
              </View>
              <View
                style={{width: 2, height: 30, backgroundColor: COLOR.gray_5}}
              />
              <View style={styles.circle}>
                <Text style={styles.numberText}>2</Text>
              </View>
              <View
                style={{width: 2, height: 170, backgroundColor: COLOR.gray_5}}
              />
              <View style={styles.circle}>
                <Text style={styles.numberText}>3</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                height: '100%',
                paddingLeft: '5%',
              }}>
              <Text style={{...styles.title, marginTop: '2%'}}>
                Contacts fill out form
              </Text>
              <Text style={{...styles.title, marginTop:isLandscape?"5%": '14%'}}>
                Contacts fill out form
              </Text>
              <TextInput
                placeholder="We will text you !"
                style={styles.field}
                placeholderTextColor={COLOR.gray_3}
              />
              <View
                style={{...styles.commnetContainer,marginTop:isLandscape?"1%":"5%"}}>
                <TextInput
                  multiline
                  style={styles.commentText}
                />
                <View style={{...commonStyles.verticleView}}>
                  <Image source={Icon.emojy} style={styles.emojy} />
                  <View style={{...commonStyles.horizontalView}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: COLOR.perpal_3,
                      }}>
                      Personalize
                    </Text>
                    <Image
                      source={Icon.DropDown}
                      tintColor={COLOR.gray_5}
                      style={styles.emojy}
                    />
                  </View>
                </View>
              </View>
              <Text style={{...styles.title, marginTop:isLandscape?"5%": '10%'}}>
                Contacts fill out form
              </Text>
              <View
                style={{...styles.commnetContainer,marginTop:isLandscape?"2%":"5%"}}>
                <TextInput
                  multiline
                  style={styles.commentText}
                />
                <View style={{...commonStyles.verticleView}}>
                  <Image source={Icon.emojy} style={styles.emojy} />
                  <View style={{...commonStyles.horizontalView}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: COLOR.perpal_3,
                      }}>
                      Personalize
                    </Text>
                    <Image
                      source={Icon.DropDown}
                      tintColor={COLOR.gray_5}
                      style={styles.emojy}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default Contactsfill;
