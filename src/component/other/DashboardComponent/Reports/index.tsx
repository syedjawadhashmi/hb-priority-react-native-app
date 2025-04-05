import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import LinearGradient from 'react-native-linear-gradient';
import GradientProgressBar from '../../../core/GradientProgressBar';

const {width, height} = Dimensions.get('window');
const Reports = () => {
  const progress = 70;
  const progressPercentage = `${progress}%`;

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Reports</Text>
      <View style={styles.DotContiner}>
        <LinearGradient
          colors={['#64C08A', '#00A550', '#00914C']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{...styles.RateDot, backgroundColor: '#00914C'}}
        />
        <Text style={styles.DotTitle}>Good</Text>
      </View>

      <View style={styles.DotContiner}>
        <LinearGradient
          colors={['#FFE7A3', '#FFCA05', '#FAAC18']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{...styles.RateDot, backgroundColor: '#00914C'}}
        />
        <Text style={styles.DotTitle}>Incorrect</Text>
      </View>
      <View style={styles.DotContiner}>
        <LinearGradient
          colors={['#F37E5F', '#EC1C24', '#CF232A']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{...styles.RateDot, backgroundColor: '#00914C'}}
        />
        <Text style={styles.DotTitle}>Doesn’t exist</Text>
      </View>
      <View style={styles.BarCOntainer}>
        <View>
          <GradientProgressBar
            progress={70}
            colors1={'#00914C'}
            colors2={'#00A550'}
            colors3={'#64C08A'}
          />
        </View>
        <View>
          <GradientProgressBar
            progress={90}
            colors1={'#FAAC18'}
            colors2={'#FFCA05'}
            colors3={'#FFE7A3'}
          />
        </View>
        <View>
          <GradientProgressBar
            progress={50}
            colors1={'#CF232A'}
            colors2={'#EC1C24'}
            colors3={'#F37E5F'}
          />
        </View>
      </View>
    </View>
  );
};
export default Reports;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_9,
    borderColor: COLOR.perpal_3,
  },
  Title: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.black,
    marginTop: '5%',
    marginLeft: '10%',
  },
  RateDot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    marginRight: '6%',
  },
  DotTitle: {fontSize: normalize(6), fontWeight: '700', color: COLOR.gray_5},
  DotContiner: {
    ...commonStyles.horizontalView,
    marginLeft: '10%',
    marginTop: '2%',
  },
  barStyle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: '10%',
    marginTop: '3%',
  },
  BarCOntainer: {marginTop: '5%', marginLeft: '10%'},
});
