import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import TextInputs from '../../common/TextInputs';
import {Icon} from '../../../assest';
import {OnBordingModalDFT} from '../../../data/Types';
import {useState} from 'react';

const OnbordingDFYModel = (props: OnBordingModalDFT) => {
  const {visible, onpress} = props;
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const handleAddEmail = () => {
    if (emailInput) {
      setEmails([...emails, emailInput]);
      setEmailInput('');
    }
  };
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          ...commonStyles.center,
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={styles.container}>
          <ScrollView></ScrollView>
          <Text style={{...styles.Title,    marginTop: isLandscape?0:'4%',}}>
            Send Webchat installation instructions.
          </Text>
          <Text style={{...styles.Title, fontWeight: '400', marginTop: isLandscape?"1%":'4%',}}>
            Enter the email address of your website admin along with anyone else
            who will need the instructions. We’ll send over an email explaining
            how to add Webchat to your
          </Text>

          <Text style={{...styles.Email,marginTop:isLandscape?"1%": '7%',}}>Email Address</Text>
          <View style={styles.EmailContainer}>
            <TextInputs
              // IconOnpress={() => setHidePassword(hidePassword ? false : true)}
              style={styles.btnStyle}
              value={emailInput}
              placeholder={'Email'}
              keyboardType="email-address"
              placeholderColor={COLOR.gray_6}
              onChange={(e: any) => setEmailInput(e)}
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={() => handleAddEmail()}>
              <Text style={styles.BUttonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={{...styles.checkContainer,marginTop: isLandscape?"0.2%":'4%',}}>
            <TouchableOpacity>
              <Image style={styles.checkIcon} source={Icon.check} />
            </TouchableOpacity>
            <Text style={styles.checkText}>Send a copy to yourself</Text>
          </View>
          <View style={{...styles.EmailListContainer, marginTop:isLandscape?"2%": '5%',}}>
            <FlatList
            numColumns={6}
              data={emails}
              renderItem={({item}) => (
                <Text style={styles.checkText}>{item}</Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={{...styles.LastText, marginTop:isLandscape?"0.2%": '5%',}}>
            If you would like us to do this for you, free of charge, just click
            the DFY button
          </Text>
          <TouchableOpacity style={{...styles.DFTBtn,marginTop:isLandscape?"0.2%": '5.5%',}} onPress={onpress}>
            <Text style={{...styles.BUttonText, color: COLOR.black_1}}>
              DFY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default OnbordingDFYModel;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: COLOR.white1,
    elevation: 10,
    borderRadius: 15,
    paddingVertical: '7%',
  },
  Title: {
    fontSize: 15,
    fontWeight: '700',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '4%',
  },
  Email: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '6%',
  },
  btnStyle: {marginVertical: '2%', width: '76%'},
  BUttonText: {fontSize: 16, fontWeight: '700', color: COLOR.whites},
  Button: {
    paddingHorizontal: '5%',
    paddingVertical: '2.4%',
    backgroundColor: COLOR.perpal,
    borderRadius: 13,
  },
  EmailContainer: {...commonStyles.verticleView, paddingHorizontal: '5%'},
  checkIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: '3%',
    tintColor: COLOR.primary,
  },
  checkText: {fontSize: 12, fontWeight: '400', color: COLOR.gray_5,marginHorizontal:3},
  checkContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'flex-end',
    marginRight: '5%',
  },
  LastText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '77%',
    alignSelf: 'center',
  },
  DFTBtn: {
    paddingHorizontal: '9%',
    paddingVertical: '2.4%',
    backgroundColor: COLOR.primary,
    borderRadius: 13,
    ...commonStyles.center,
    alignSelf: 'flex-end',
    marginRight: '6%',
  },
  EmailListContainer: {
    width: '50%',
    height: '20%',
    marginLeft: '7%',
  },
});
