import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import { StarGetRating } from '../../../core/StarGetRating';
const data = [
  {
    title: 'Cindy Brennan',
    description:
    'Hi, I was wondering if you could share more details about pricing? Thank you.',
    rating: 5,
    type: 'Modern',
  },
  {
    title: 'Cindy Brennan',
    description:
    'Hi, I was wondering if you could share more details about pricing? Thank you.',
    rating: 5,
    type: 'Classic',
  },
  {
    title: 'Cindy Brennan',
    description:
    'Hi, I was wondering if you could share more details about pricing? Thank you.',
    rating: 5,
    type: 'Bootstrap',
  },
  {
    title: 'Cindy Brennan',
    description:
    'Hi, I was wondering if you could share more details about pricing? Thank you.',
    rating: 5,
    type: 'Custom',
  },
];
interface designProps{
designMode?:()=>void
}


const DesignPreset = (pops:designProps) => {
  const{designMode}=pops
  const [selector, setSelector] = useState(null);
  
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View>
          <TouchableOpacity
            key={index}
            style={{...styles.listContainer,  borderColor: selector == index ? COLOR.black : COLOR.white1,
            }}
            onPress={() => {setSelector(index),designMode(item.type)}}>
            <View
              style={{
                ...styles.seconContainer,
                borderWidth:index== 0?3:index==1.7?1:index==2?0:1,

                borderColor: index == 3 ? COLOR.gray_7 : COLOR.black,
                
              }}>
              <StarGetRating rating={item.rating} size={9} />

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.discription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.type}>{item.type}</Text>
        </View>
      ))}
    </View>
  );
};

export default DesignPreset;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: '5%',
  },
  listContainer: {
    flexBasis: '35%',
    backgroundColor: COLOR.whites,
    // marginBottom: 1,
    // padding: 10,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 110,
    justifyContent: 'flex-end',
    width: 90,
  },
  seconContainer: {
    width: 75,
    height: 90,
    backgroundColor: COLOR.white1,
    borderRadius: 14,
    alignSelf: 'flex-end',
    ...commonStyles.center,
    paddingHorizontal:'2%'
  },

  type: {
    fontSize: 15,
    fontWeight: '800',
    color: COLOR.black,
    alignSelf: 'center',
    marginBottom: '5%',
    marginTop: '3%',
  },
  title:{fontSize:8,fontWeight:"800",color:COLOR.gray_5},
  discription:{fontSize:7,fontWeight:"400",color:COLOR.gray_5}


});
