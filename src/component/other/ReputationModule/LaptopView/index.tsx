import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {StarGetRating} from '../../../core/StarGetRating';
import {useState, useRef, useEffect} from 'react';
import {LapTopViewData} from '../../../../data/DummayData';

interface LaptopProps {
  designmode?: any;
  layoutShow?: any;
  BackgroundColor?: any;
  TextStyleData?: any;
  ReviewsData?: any;
  AnimationData?: any;
}

const LaptopView = (props: LaptopProps) => {
  const {
    designmode,
    layoutShow,
    BackgroundColor,
    TextStyleData,
    ReviewsData,
    AnimationData,
  } = props;

  const [rating, setRating] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  console.log(AnimationData);
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
    <View>
      <View
        style={{
          ...styles.Customer,
          backgroundColor: BackgroundColor?.BackgroundColor
            ? BackgroundColor?.BackgroundColor
            : COLOR.whites,
          borderRadius: BackgroundColor?.CornerRadius
            ? parseInt(BackgroundColor?.CornerRadius)
            : 10,
          elevation: BackgroundColor?.CustomizeShadow ? 10 : 0,
        }}>
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: 10,
            marginTop: '6%',
          }}>
          <Text
            style={{
              ...styles.title,
              color: TextStyleData.Background
                ? TextStyleData.Background
                : COLOR.gray_5,
              fontFamily: TextStyleData.Font && TextStyleData.Font,
              fontSize: TextStyleData.Size ? TextStyleData.Size : 19,
            }}>
            {BackgroundColor.CustomizeWidgetTitle
              ? BackgroundColor.CustomizeWidgetTitleWrite
              : 'Customer Review'}
          </Text>
          {(BackgroundColor.display === undefined ||
            BackgroundColor.display === false) && (
            <View>
              <Text
                style={{
                  ...styles.ReviewsStyle,
                  color: TextStyleData.Background
                    ? TextStyleData.Background
                    : COLOR.gray_5,
                }}>
                501 Total Reviews
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
          )}
        </View>
        <View
          style={{
            ...commonStyles.verticleView,
            paddingHorizontal: '5%',
            marginTop: '16%',
          }}>
          {AnimationData?.slideArrow == 2 || (
            <TouchableOpacity onPress={handlePrevious}>
              <Image
                source={Icon.left_arrow}
                style={{
                  ...styles.IconStyle,
                  tintColor: COLOR.gray_5,
                }}
              />
            </TouchableOpacity>
          )}
          <FlatList
            ref={flatListRef}
            horizontal={layoutShow.Display ? false : true}
            data={LapTopViewData}
            numColumns={layoutShow?.Display ? layoutShow?.Display : 1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
              <View
                style={{
                  elevation: ReviewsData?.shadow ? 10 : 0,
                  width: layoutShow?.Size
                    ? layoutShow?.Size
                    : layoutShow?.Display == 1
                    ? 235
                    : layoutShow?.Display == 2
                    ? 110
                    : layoutShow?.Display == 3
                    ? 70
                    : 235,
                  marginBottom: '2%',
                  backgroundColor: ReviewsData?.Background
                    ? ReviewsData.Background
                    : COLOR.gray_11,
                  height: layoutShow?.Display === 1 ? 100 : 'auto',
                  borderRadius: ReviewsData?.Radius
                    ? parseInt(ReviewsData?.Radius)
                    : 10,
                  ...(layoutShow?.Display == 1
                    ? commonStyles.verticleView
                    : layoutShow?.Display == 2 ||
                      layoutShow?.Display == 3 ||
                      commonStyles.verticleView),
                  paddingHorizontal: '5%',
                  marginLeft: 10,
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
                }}>
                <View>
                  {(ReviewsData?.DisplayReviewerSiteIcon == true ||
                    ReviewsData?.DisplayReviewerSiteIcon === undefined) && (
                    <Image
                      source={Icon.google}
                      style={{
                        ...styles.IconStyle,
                      }}
                    />
                  )}
                </View>
                <View style={{width: '80%'}}>
                  <View style={{width: '30%'}}>
                    <StarGetRating
                      rating={rating}
                      size={
                        layoutShow?.Display == 1
                          ? 20
                          : layoutShow?.Display == 2 || layoutShow?.Display == 3
                          ? 8
                          : 20
                      }
                    />
                  </View>
                  <View style={{...commonStyles.verticleView}}>
                    {layoutShow?.Display ?null: (
                      <View>
                        {((ReviewsData?.DisplayReviewersName == true ||
                          ReviewsData?.DisplayReviewersName === undefined) &&
                          ReviewsData.DataFormat === 'Hidden') || (
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '800',
                              color: TextStyleData.Background
                                ? TextStyleData.Background
                                : COLOR.gray_5,
                            }}>
                            07.03.2024
                          </Text>
                        )}
                      </View>
                    )}

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
                  </View>
                  {(ReviewsData?.AddBusinessDetailsToSchema == true ||
                    ReviewsData?.AddBusinessDetailsToSchema === undefined) && (
                    <Text
                      style={{
                        fontSize: TextStyleData.Size ? TextStyleData.Size : 10,
                        fontWeight: '500',
                        color: TextStyleData.Background
                          ? TextStyleData.Background
                          : COLOR.gray_5,
                      }}>
                      Customize your widget so it displays your reviews how you
                      want your customers to see them.
                    </Text>
                  )}
                </View>
              </View>
            )}
          />
          {AnimationData?.slideArrow == 2 || (
            <TouchableOpacity onPress={handleNext}>
              <Image
                source={Icon.right_arrow}
                style={{
                  ...styles.IconStyle,
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
  );
};

export default LaptopView;

const styles = StyleSheet.create({
  IconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  Customer: {
    width: '90%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {fontSize: 18, fontWeight: '800', color: COLOR.gray_5},
  ReviewsStyle: {fontSize: 18, fontWeight: '600', color: COLOR.gray_5},
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
});
