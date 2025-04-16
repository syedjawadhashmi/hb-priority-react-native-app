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
import {useState} from 'react';
import DropDown from '../../../core/DropDown';
import {Dropdata} from '../../../../data/DummayData';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {UpdatePaymentModal} from '../../../../data/Types';

const EditFAQ = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const [opencompany, setOpencompany] = useState(false);
  const [company, setcompany] = useState(null);
  const [onpenPersonalize, setOpenPersonalize] = useState(false);
  const [selectPersonalize, setSelectPersonalize] = useState('');
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const PersonalizeData = [
    {
      title: 'Contact Address',
    },
    {
      title: 'Order ID',
    },
    {
      title: 'Order Status',
    },
    {
      title: 'Order Number',
    },
  ];
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Edit FAQ</Text>
            <TouchableOpacity onPress={close}>
              <Image
                source={Icon.close}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.QuestionText}>Question</Text>
          <TextInput
            placeholder="Testing Question 1"
            style={styles.QuestionInput}
            multiline
          />
          <Text style={styles.QuestionText}>Answer</Text>
          <View
            style={{
              backgroundColor: COLOR.whites,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 15,
              marginBottom: '2%',
            }}>
            <TextInput
              placeholder="Testing Question 1"
              style={{...styles.QuestionInput, width: '100%'}}
              multiline
            />
            <View
              style={{
                ...commonStyles.verticleView,
                paddingHorizontal: '5%',
                marginBottom: '3%',
              }}>
              <TouchableOpacity>
                <Image
                  source={Icon.emojy}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{...commonStyles.verticleView}}
                onPress={() =>
                  setOpenPersonalize(onpenPersonalize ? false : true)
                }>
                <Text style={styles.Personalize}>Personalize</Text>
                <Image
                  source={Icon.DropDown}
                  tintColor={COLOR.black}
                  style={{width: 10, height: 10, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>

          {onpenPersonalize && (
            <View style={{...styles.PersonalizeDropDown,bottom:isLandscape?"19%":-10}}>
              {PersonalizeData.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectPersonalize(item.title), setOpenPersonalize(false);
                  }}
                  style={{
                    height: 35,
                    backgroundColor:
                      selectPersonalize == item.title
                        ? COLOR.white1
                        : COLOR.whites,
                    paddingHorizontal: '8%',
                  }}>
                  <Text
                    style={{
                      ...styles.dropText,
                      color:
                        selectPersonalize == item.title
                          ? COLOR.perpal_3
                          : COLOR.gray_5,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={styles.ex}>ex: text</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <DropDown
            isOpen={opencompany}
            toggleDropdown={() => setOpencompany(opencompany ? false : true)}
            options={Dropdata}
            onSelect={(e: any) => setcompany(e)}
            selectedOption={company}
            title={'Show On'}
            placeHolder={'All Locations'}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={save}
              style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
              <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={close}
              style={{...styles.btnSave, backgroundColor: COLOR.red}}>
              <Text style={styles.SaveBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default EditFAQ;
