import {FlatList, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';

const Profile_QA = () => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const data = [
    {
      title: 'Business Hours',
      sabTitle: 'We are currently closed.Our regular business hours are:',
    },

    {
      title: 'Location',
      sabTitle: "We're located at:",
      dis: '5 Estate Dr A Bluffton, SC 29910',
    },
    {
      title: 'Services',
      sabTitle: 'We offer these services:',
      dis: 'Self Storage Services,Moving & Storage Services, Personal Storage, Business  Storage, RV & ...',
    },
    {
      title: 'Payment Options',
      sabTitle: 'We accept the following:',
      dis: 'We accept all major credit cards.',
    },
    {
      title: 'Languages',
      sabTitle: 'Thanks for asking. We speak English only',
    },
    {
      title: 'Contact Details',
      sabTitle: 'We are currently closed.',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({item, index}) => (
          <View   >
            <Text
              style={{
                ...styles.title,
                marginBottom: '4%',
                marginLeft: '5%',
                marginTop: '5%',
              }}>
              {item.title}
            </Text>
            <View style={{...styles.box,width:isLandscape?300:150}}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: COLOR.gray_7,
                  paddingVertical: '5%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...styles.title,
                    fontWeight: '400',
                    fontSize: 10,
                    marginLeft: '3%',
                  }}>
                  {item.sabTitle}
                </Text>
              </View>
              {index == 0 && (
                <View style={{marginLeft: '5%', marginTop: '5%'}}>
                  <Text style={styles.time}>
                    <Text style={{color: COLOR.perpal_3}}>Mon - Sat:</Text> 8:30
                    am - 5 pm
                  </Text>
                  <Text style={styles.time}>
                    <Text style={{color: COLOR.perpal_3}}>Sun:</Text> 10 am - 2
                    pm
                  </Text>
                </View>
              )}
              <Text
                style={{
                  ...styles.title,
                  fontWeight: '900',
                  fontSize: 10,
                  marginLeft: '5%',
                  width: index == 1 ? '65%' : index == 2 ? '60%' : '90%',
                  marginTop: '4%',
                  marginBottom: '5%',
                }}>
                {item.dis}
              </Text>
              {index == 2 && (
                <Text
                  style={{
                    ...styles.title,
                    fontWeight: '900',
                    fontSize: 10,
                    marginLeft: '5%',
                    marginTop: '2%',
                    marginBottom: '5%',
                    color: COLOR.perpal_3,
                  }}>
                  See All
                </Text>
              )}
              {index == 1 && (
                <Text
                  style={{
                    ...styles.title,
                    fontWeight: '900',
                    fontSize: 10,
                    marginLeft: '3%',
                    marginBottom: '7%',
                    color: COLOR.perpal_3,
                  }}>
                  Get Directions
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Profile_QA;

const styles = StyleSheet.create({
  container: {alignSelf: 'center',marginBottom:"10%"},
  title: {fontSize: 12, fontWeight: '600', color: COLOR.gray_5},
  box: {
    width: 150,
    marginHorizontal: '2%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
  },
  sabTitle: {},
  time: {fontSize: 10, fontWeight: '700', color: COLOR.gray_5},
});
