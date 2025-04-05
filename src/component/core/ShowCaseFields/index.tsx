import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import React from 'react';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';
import { Icon, Images } from '../../../assest';
import { inboxProp } from '../../../data/Types';
// import {Icon, Images} from '../../../../assest';
// import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
// import { inboxProp } from '../../../../data/Types';

const data = [
  {
    title: 'Cindy Brennan',
    discription:
      'They exceeded my expectations in every way, and I am grateful for their dedication to excellence. ',
    icons: Images.Google,
    star: 5,
  },

  {
    title: 'Maddie Connor',
    discription:
      'They exceeded my expectations in every way, and I am grateful for their dedication to excellence. ',
    icons: Images.SophiaHart,
    star: 5,
  },
];

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  const totalStars = 5;

  return (
    <View style={{...commonStyles.horizontalView}}>
      {Array.from({length: totalStars}, (_, index) => (
        <Image
          key={index}
          source={index < rating ? Icon.Star : Icon.UnselectedStart}
          style={{
            width: index < rating ? 12 : 10,
            height: index < rating ? 12 : 10,
            resizeMode: 'contain',
            marginRight: 2,
          }}
        />
      ))}
    </View>
  );
};
const ShowCaseFields = (props:inboxProp) => {
  const {onpress}=props
  const [rating, setRating] = React.useState<number>(3);
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Showcase Reviews</Text>
        </View>
        <View style={styles.ReviewContainer}>
          <View style={styles.ReviewView}>
            <Text style={styles.ReviewText}>Customer Reviews</Text>
            <View style={{...commonStyles.horizontalView}}>
              <StarRating rating={rating} />
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          <View>
            {data.map((item,index) => (
              <View style={styles.listContainer} key={index}>
                <Image source={item.icons} style={styles.listIcon} />
                <View style={{width: '85%'}}>
                  <StarRating rating={item.star} />
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listDoscription}>{item.discription}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.widgetText}>List Widget</Text>
        <Text style={styles.DisplayText}>
          Display reviews in an ordered,
          <Text style={{color: COLOR.perpal_3}}> customizable </Text>list
        </Text>
        <TouchableOpacity style={styles.ListingBtn} onPress={onpress} >
          <Text style={styles.ListBtnText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.AmmountContainer}>
        <View style={styles.ReviewContainer}>
          <View style={styles.ReviewView}>
            <Text style={styles.ReviewText}>Customer Reviews</Text>
            <View style={{...commonStyles.horizontalView}}>
              <StarRating rating={rating} />
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>

          <View style={{...commonStyles.verticleView, paddingHorizontal: '5%'}}>
            <View
              style={styles.CustomContainer}>
                <Text style={styles.BoxRiviewText}>
                  From the moment I called, their customer service was
                  outstanding – friendly, responsive, and efficient.
                </Text>
              <View style={{flex: 1, backgroundColor: COLOR.white1}}>
                <View style={styles.ReviewBoxIcons}>
                  <Image
                    source={Images.Google}
                    style={{width: 15, height: 15, resizeMode: 'contain'}}
                  />
                </View>
                <View style={{alignSelf: 'center', marginTop: '8%'}}>
                  <StarRating rating={rating} />
                  <Text style={styles.BoxTitle}>Cindy Brennan</Text>
                </View>
              </View>
            </View>
            <View
             style={styles.CustomContainer}>
                <Text style={styles.BoxRiviewText}>
                  They exceeded my expectations in every way, and I am grateful
                  for their dedication to excellence.
                </Text>
              <View style={{flex: 1, backgroundColor: COLOR.white1}}>
                <View style={styles.ReviewBoxIcons}>
                  <Image
                    source={Images.SophiaHart}
                    style={{width: 15, height: 15, resizeMode: 'contain'}}
                  />
                </View>
                <View style={{alignSelf: 'center', marginTop: '8%'}}>
                  <StarRating rating={rating} />
                  <Text style={styles.BoxTitle}>Maddie Connor</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.widgetText}>Carousel Widget</Text>
        <Text style={styles.DisplayText}>
          Display reviews in a compact animated carousel.
        </Text>
        <TouchableOpacity style={styles.ListingBtn} onPress={onpress} >
          <Text style={styles.ListBtnText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.AmmountContainer}>
        <Image
          source={Images.codeImage}
          style={{
            resizeMode: 'contain',
            width: '80%',
            height: 180,
            alignSelf: 'center',
            marginTop: '8%',
          }}
        />
        <Text style={{...styles.widgetText,marginTop:"3%"}}>JSON Feed</Text>
        <TextInput style={styles.comment} />
        <Text
          style={{
            ...styles.DisplayText,
            alignSelf: 'center',
            width: '80%',
            textAlign: 'center',
          }}>
          Use just the review data only to completely customize the layout to
          fit your interface's code the way you want it
        </Text>
        <TouchableOpacity style={styles.ListingBtn}  onPress={onpress} >
          <Text style={styles.ListBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ShowCaseFields;
