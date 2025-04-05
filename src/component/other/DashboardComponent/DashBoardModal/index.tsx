import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {useState} from 'react';
import {InboxFilterModalProps} from '../../../../data/Types';

const data = [
  {
    title: 'Live Chat',
    icons: Icon.MicroPhone,
  },
  {
    title: 'Live Video',
    icons: Icon.livecall,
  },
  {
    title: 'Phone Call',
    icons: Icon.PhoneCallsecond,
  },
  {
    title: 'Email',
    icons: Icon.Emailsecond,
  },

  {
    title: 'Create Ticket',
    icons: Icon.CreateTicket,
  },
];

const DashBoardModal = (prop: InboxFilterModalProps) => {
  const [selector, setSelector] = useState(null);
  const {visible, saveFilter, onpress} = prop;
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modelStyle}>
          <TouchableOpacity style={styles.crossBtn} onPress={onpress}>
            <Image source={Icon.crose} style={styles.cross} />
          </TouchableOpacity>

          <View>
            {data.map((item, index: any) => (
              <View
                style={{
                  ...commonStyles.horizontalView,
                  marginBottom: '4%',
                  marginLeft: '5%',
                }}>
                <TouchableOpacity
                  onPress={() => setSelector(index)}
                  style={styles.selctor}>
                  {selector == index && <View style={styles.selectorS} />}
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Image style={styles.icon} source={item.icons} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default DashBoardModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.red,
    ...commonStyles.center,

  },
  cross: {width: 16, height: 16, resizeMode: 'contain'},
  crossBtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '2%'},
  modelStyle: {
    width: '65%',
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: '5%',
  },
  titleContainer: {...commonStyles.horizontalView},
  title: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  icon: {width: 20, height: 20, resizeMode: 'contain', marginLeft: '5%'},
  selctor: {
    width: 25,
    height: 25,
    backgroundColor: COLOR.gray_7,
    ...commonStyles.center,
    borderRadius: 15,
  },
  selectorS: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: COLOR.perpal_3,
  },
});
