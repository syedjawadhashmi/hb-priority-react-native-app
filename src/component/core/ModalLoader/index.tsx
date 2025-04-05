import {Modal, StyleSheet, Text, View} from 'react-native';
import {ReputationModalType} from '../../../data/Types';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {COLOR, commonStyles, FONT, hp, normalize} from '../../../themes/StyleGuides';
const ModalLoader = (props: ReputationModalType) => {
  const {visible, onpress, onpressOfModal, title} = props;

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View>
          <Text style={styles.title}>Current Grabbing Reviews</Text>
          <BarIndicator color={COLOR.black} />
          </View>
       
        </View>
      </View>
    </Modal>
  );
};
export default ModalLoader;

const styles = StyleSheet.create({
  container: {flex: 1, ...commonStyles.center},
  modal: {
    width: '90%',
    height: hp('30%'),
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    elevation: 8,
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    fontSize: normalize(20),
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.gray_5,
    marginTop: '10%',
  },
});
