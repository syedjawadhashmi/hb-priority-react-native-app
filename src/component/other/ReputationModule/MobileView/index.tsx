import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Images} from '../../../../assest';
import {StarGetRating} from '../../../core/StarGetRating';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {useEffect, useRef, useState} from 'react';
import {LapTopViewData} from '../../../../data/DummayData';
interface MobileView {
  designmode?: any;
  layoutShow?: any;
  BackgroundColor?: any;
  TextStyleData?: any;
  ReviewsData?: any;
  AnimationData?: any;
}

const MobileView = (props: MobileView) => {
  const {
    designmode,
    layoutShow,
    BackgroundColor,
    TextStyleData,
    ReviewsData,
    AnimationData,
  } = props;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(5);
  // console.log('Mobile', BackgroundColor);
  const handleNext = () => {
    if (currentIndex < LapTopViewData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    } else {
      setCurrentIndex(0); // Reset to first item when reaching end of list
      flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({index: prevIndex, animated: true});
    }
  };

  // Auto-slide effect when rotate is set to 1
  useEffect(() => {
    let autoSlideInterval: NodeJS.Timeout;
    if (AnimationData?.rotate === 1) {
      autoSlideInterval = setInterval(
        handleNext,
        AnimationData?.sliderValue === 40
          ? 5000
          : AnimationData?.sliderValue === 50
          ? 3000
          : AnimationData?.sliderValue === 70
          ? 2000
          : 3000,
      ); // Change every 3 seconds
    }

    return () => clearInterval(autoSlideInterval);
  }, [AnimationData?.rotate, currentIndex]);
  return (
    <View style={{}}>
      <View
        style={{
          paddingVertical: '10%',
          width: '90%',
          alignSelf: 'center',
          backgroundColor: BackgroundColor?.BackgroundColor
            ? BackgroundColor?.BackgroundColor
            : COLOR.whites,
          borderRadius: BackgroundColor?.CornerRadius
            ? parseInt(BackgroundColor?.CornerRadius)
            : 10,
          elevation: BackgroundColor?.CustomizeShadow ? 10 : 0,
        }}>
        <Image
          source={Images.MobileEmu}
          style={{
            width: '70%',
            height: 450,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}></Image>
        <View style={styles.Customer}>
          <View
            style={{
              ...commonStyles.verticleView,
              marginTop: '36%',
              width: '50%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                ...styles.title,
                width: '27%',
                color: TextStyleData.Background
                  ? TextStyleData.Background
                  : COLOR.gray_5,
                fontFamily: TextStyleData.Font && TextStyleData.Font,
                fontSize: TextStyleData.Size ? TextStyleData.Size : 11,
              }}>
              {BackgroundColor.CustomizeWidgetTitle
                ? BackgroundColor.CustomizeWidgetTitleWrite
                : 'Customer Review'}
            </Text>

            {(BackgroundColor.display === undefined ||
              BackgroundColor.display === false) && (
              <View>
                <View>
                  <Text
                    style={{
                      ...styles.ReviewsStyle,
                      color: TextStyleData.Background
                        ? TextStyleData.Background
                        : COLOR.gray_5,
                    }}>
                    501 Total Reviews{' '}
                  </Text>
                  <View
                    style={{
                      ...commonStyles.horizontalView,
                      alignSelf: 'flex-end',
                      marginRight: 4,
                    }}>
                    <StarGetRating rating={rating} size={10} />
                    <Text
                      style={{
                        ...styles.title,
                        color: TextStyleData.Background
                          ? TextStyleData.Background
                          : COLOR.gray_5,
                      }}>
                      4.69
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '20%',
              marginTop: '16%',
            }}>
            {AnimationData?.slideArrow == 2 || (
              <TouchableOpacity onPress={handlePrevious}>
                <Image
                  source={Icon.left_arrow}
                  style={{
                    ...styles.arrowIcon,
                    tintColor: COLOR.gray_5,
                  }}
                />
              </TouchableOpacity>
            )}

            <FlatList
              ref={flatListRef}
              horizontal={layoutShow.Display?false:true}
              data={LapTopViewData}
              numColumns={layoutShow?.Display ? layoutShow?.Display : 1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => (
                <View>
                  <View
                    style={{
                      paddingHorizontal: '5%',
                      paddingVertical: '10%',
                      marginLeft: '5%',
                      elevation: ReviewsData?.shadow ? 10 : 0,
                      // width: layoutShow ? layoutShow : 160,
                      width: layoutShow?.Size
                      ? layoutShow?.Size
                      : layoutShow?.Display == 1
                      ? 160
                      : layoutShow?.Display == 2
                      ? 80
                      : layoutShow?.Display == 3
                      ? 50
                      : 160,
                      backgroundColor: ReviewsData?.Background
                        ? ReviewsData.Background
                        : COLOR.gray_11,
                        height: layoutShow?.Display === 1 ? 100 : 'auto',
                      borderRadius: ReviewsData?.Radius
                        ? parseInt(ReviewsData?.Radius)
                        : 10,
                      borderWidth:
                        designmode == 'Modern'
                          ? 2
                          : designmode == 'Classic'
                          ? 1.2
                          : designmode == 'Bootstrap'
                          ? 0
                          : 1,
                      borderColor:
                        designmode == 'Custom' ? COLOR.gray_7 : COLOR.black,
                        marginBottom:15
                    }}>
                    <View style={{width: '30%', ...( layoutShow?.Display == 3||commonStyles.verticleView)}}>
                    {(ReviewsData?.DisplayReviewerSiteIcon == true ||
                  ReviewsData?.DisplayReviewerSiteIcon === undefined) && (
                      <Image
                        source={Icon.google}
                        style={{
                          ...styles.IconStyle,
                        }}
                      />)}
                      <StarGetRating rating={rating} size={   layoutShow?.Display == 1
                          ? 20
                          : layoutShow?.Display == 2 || layoutShow?.Display == 3
                          ? 7
                          : 20} />
                    </View>

                    <View>
                      {(ReviewsData?.DisplayReviewersName == true ||
                        ReviewsData?.DisplayReviewersName === undefined) && (
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '800',
                            color: TextStyleData.Background
                              ? TextStyleData.Background
                              : COLOR.gray_5,
                          }}>
                          Cind Brennan
                        </Text>
                      )}
                      {(ReviewsData?.AddBusinessDetailsToSchema == true ||
                        ReviewsData?.AddBusinessDetailsToSchema ===
                          undefined) && (
                        <Text
                          style={{
                            fontSize: TextStyleData.Size ? TextStyleData.Size : 10,
                            fontWeight: '500',
                            color: TextStyleData.Background
                            ? TextStyleData.Background
                            : COLOR.gray_5,
                          }}>
                          Coustomize your widget so it display your reviews how
                          you want your coustom to see them{' '}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
              )}
            />
            {AnimationData?.slideArrow == 2 || (
              <TouchableOpacity onPress={handleNext}>
                <Image
                  source={Icon.right_arrow}
                  style={{
                    ...styles.arrowIcon,
                    tintColor: COLOR.gray_5,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          {AnimationData?.sliderDots == 2 || (
            <View style={styles.CircleCOntainer}>
              <View style={styles.circle} />
              <View style={styles.circle} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default MobileView;

const styles = StyleSheet.create({
  container: {},
  IconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  Customer: {
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
    position: 'absolute',
  },
  title: {fontSize: 12, fontWeight: '800', color: COLOR.gray_5},
  ReviewsStyle: {
    fontSize: 10,
    fontWeight: '600',
    color: COLOR.gray_5,
    alignSelf: 'flex-end',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 16,
    backgroundColor: COLOR.gray_5,
  },
  CircleCOntainer: {
    ...commonStyles.verticleView,
    width: '10%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  arrowIcon: {width: 15, height: 15, resizeMode: 'contain'},
});
