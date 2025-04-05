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
import {COLOR, commonStyles, hp, normalize} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {MessagePaymentProps} from '../../../../data/Types';
import {useState} from 'react';
import InvoiceTitle from '../../../core/InvoiceTitle';

const SaveFilterInboxModol = (props: MessagePaymentProps) => {
  const {visible, ofDropDown, close} = props;
  const [filter, setFilter] = useState('');
  const [radio, unRadio] = useState(0);
  const [keywords, setKeywords] = useState([]); // Initial array is empty
  const [currentKeyword, setCurrentKeyword] = useState('');

  console.log('Show', currentKeyword.trim());
  const addKeyword = () => {
    if (currentKeyword.trim() && !keywords.includes(currentKeyword)) {
      setKeywords([...keywords, currentKeyword.trim()]);
      setCurrentKeyword(''); // Clear the TextInput after adding
    }
  };

  // Function to remove a keyword
  const removeKeyword = (keywordToRemove: any) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ScrollView>
          <TouchableOpacity style={styles.closebtn} onPress={close}>
            <Image source={Icon.crose} style={styles.closeICon} />
          </TouchableOpacity>
          <Text style={styles.Title}>Save Filter</Text>
          <Text style={styles.discription}>
            Start by giving it a name and choose who can view it.{' '}
          </Text>
          <InvoiceTitle
            title="Name Your Filter*"
            onChange={(e: any) => setFilter(e)}
          />

          <Text
            style={{
              ...styles.Title,
              fontSize: 12,
              marginTop: hp('4%'),
              marginBottom: '2%',
            }}>
            Visible to{' '}
          </Text>
          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => unRadio(1)}
              style={{marginLeft: '7%'}}>
              <Image
                source={radio == 1 ? Icon.radio_buttonOn : Icon.radio_buttonof}
                style={styles.checkIcon}
                tintColor={radio == 1 ?COLOR.primary:COLOR.gray_5}

              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.discription,
                fontSize: 12,
                marginTop: 0,
                marginLeft: '2%',
              }}>
              Only Me
            </Text>
          </View>
          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => unRadio(2)}
              style={{marginLeft: '7%'}}>
              <Image
                source={radio == 2 ? Icon.radio_buttonOn : Icon.radio_buttonof}
                style={styles.checkIcon}
                tintColor={radio == 2 ?COLOR.primary:COLOR.gray_5}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.discription,
                fontSize: 12,
                marginTop: 0,
                marginLeft: '2%',
              }}>
              Specific Users
            </Text>
          </View>

          {radio == 2 && (
            <View>
              <TextInput
                style={styles.textKeyword}
                value={currentKeyword}
                onChangeText={setCurrentKeyword}
                onSubmitEditing={addKeyword} // Add the keyword when user presses Enter/Done
                placeholder="Enter keywords"
                returnKeyType="done" // Shows Done/Enter button on the keyboard
              />
              <View style={styles.keywordContainer}>
                {keywords.map((keyword, index) => (
                  <View style={styles.keywordBox} key={index}>
                    <Text style={styles.keywordText}>{keyword}</Text>
                    <TouchableOpacity onPress={() => removeKeyword(keyword)}>
                      <Image
                        source={Icon.crose}
                        style={{width: 8, height: 8, resizeMode: 'contain'}}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          )}
          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => unRadio(3)}
              style={{marginLeft: '7%'}}>
              <Image
                source={radio == 3 ? Icon.radio_buttonOn : Icon.radio_buttonof}
                style={styles.checkIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.discription,
                fontSize: 12,
                marginTop: 0,
                marginLeft: '2%',
              }}>
              Specific Teams{' '}
            </Text>
          </View>
          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => unRadio(4)}
              style={{marginLeft: '7%'}}>
              <Image
                source={radio == 4 ? Icon.radio_buttonOn : Icon.radio_buttonof}
                style={styles.checkIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.discription,
                fontSize: 12,
                marginTop: 0,
                marginLeft: '2%',
              }}>
              Users Across Locations{' '}
            </Text>
          </View>

          {radio == 2 && (
            <View style={styles.ErrorCotainer}>
              <Image source={Icon.Error} style={styles.checkIcon} />
              <Text style={styles.discription}>
                Users will see conversations only from locations they have
                access to.
              </Text>
            </View>
          )}

          <View style={styles.ButtpnContainer}>
            <TouchableOpacity style={styles.cancleButton} onPress={close}>
              <Text style={{...styles.BtnText, color: COLOR.perpal_3}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ofDropDown}>
              <Text style={{...styles.BtnText, color: COLOR.whites}}>Save</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default SaveFilterInboxModol;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.center,
    backgroundColor: COLOR.blackBlur,
  },
  modal: {
    width: '90%',
    backgroundColor: COLOR.white,
    paddingVertical: '3%',
    borderRadius: 14,
  },
  Title: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  closebtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '1  %'},
  closeICon: {width: 17, height: 17, resizeMode: 'contain'},
  discription: {
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
    width: '90%',
  },
  checkContainer: {flexDirection: 'row', alignSelf: 'center'},
  checkIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
  },
  button: {
    alignSelf: 'flex-end',
    width: '30%',
    borderRadius: 12,
    marginRight: '5%',
    marginTop: '10%',
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },

  textKeyword: {
    width: '90%',
    height: 35,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    padding: 0,
    alignSelf: 'center',
    color: COLOR.black,
    paddingHorizontal:"5%"
    
  },
  ButtpnContainer: {...commonStyles.horizontalView, alignSelf: 'flex-end',marginBottom:'3%'},
  cancleButton: {
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.perpal,
    alignSelf: 'flex-end',
    borderRadius: 12,
    marginRight: '5%',
    marginTop: '10%',
    ...commonStyles.center,
    paddingHorizontal: '5%',
    paddingVertical: '1.5%',
  },
  ErrorCotainer: {
    ...commonStyles.horizontalView,
    width: '90%',
    height: 60,
    borderRadius: 15,
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: '5%',
  },
  keywordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: '6%',
  },
  keywordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  keywordText: {
    marginRight: 5,
  },

  BtnText: {fontSize: 13, fontWeight: '700', color: COLOR.whites},
});
