import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import styles from './style';
import {Icon, Images} from '../../../../assest';
import {COLOR, commonStyles, hp} from '../../../../themes/StyleGuides';
import NewOpportunitiesList from '../NewOpportunitiesList';

const NewOpportunities = () => {
  const [isExpanded, setIsExpanded] = useState('');
  const [showChat, setShowChat] = useState(false);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const data = [
    {title: 'Database Reactivation Campaign'},
    {title: 'Facebook Ad'},
  ];

  const ViewdataLsit = [
    {title: 'Campaign February 1', image: Images.Google},
    {title: 'Campaign January 1', image: Icon.facebook},
    {title: 'Campaign January 3 1', image: Images.Google},
  ];
  const CreatedataLsit = [
    {title: 'Meta Campaign', image: Icon.plus},
    {title: 'Email Campaign', image: Icon.facebook},
    {title: 'SMS', image: Icon.plus},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        {/* View Button */}
        <TouchableOpacity
          style={{
            ...styles.button,
            paddingVertical: isLandscape ? '1.5%' : '3%',
          }}
          onPress={() => setIsExpanded(isExpanded === 'View' ? '' : 'View')}>
          <Text style={styles.buttonText}>New Opportunities</Text>
        </TouchableOpacity>
        {/* Expanded Content */}
        {isExpanded === 'View' && (
          <View style={styles.expandedContent}>
            <NewOpportunitiesList />
          </View>
        )}
      </View>
      <View style={styles.dropDown}>
        {/* View Button */}
        <TouchableOpacity
          style={{
            ...styles.button,
            paddingVertical: isLandscape ? '1.5%' : '3%',
          }}
          onPress={() =>
            setIsExpanded(isExpanded === 'Assign' ? '' : 'Assign')
          }>
          <Text style={styles.buttonText}>Active Campaigns</Text>
        </TouchableOpacity>
        {/* Expanded Content */}
        {isExpanded === 'Assign' && (
          <View style={styles.expandedContent}>
            <TouchableOpacity>
              {data.map((item, index) => (
                <View style={styles.LisContaonet}>
                  <View style={{...commonStyles.horizontalView}}>
                    <Image
                      source={Images.Friday}
                      style={{width: 15, height: 15, resizeMode: 'contain'}}
                    />
                    <Text style={styles.MarketingText}>{item.title}</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      ...styles.AllBtn,
                      backgroundColor: COLOR.gray_4,
                    }}>
                    <Image
                      source={Icon.eye}
                      style={{width: 15, height: 15, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.dropDown}>
        {/* View Button */}
        <TouchableOpacity
          style={{
            ...styles.button,
            paddingVertical: isLandscape ? '1.5%' : '3%',
          }}
          onPress={() => setIsExpanded(isExpanded === 'Reply' ? '' : 'Reply')}>
          <Text style={styles.buttonText}>View Campaign</Text>
        </TouchableOpacity>
        {/* Expanded Content */}
        {isExpanded === 'Reply' && (
          <View style={styles.expandedLastContent}>
            <View
              style={{
                marginLeft: '5%',
              }}>
              {ViewdataLsit.map((item, index) => (
                <View style={styles.LisContaonet}>
                  <View style={{...commonStyles.horizontalView}}>
                    <Image
                      source={item.image}
                      style={styles.ImageStyle}
                    />
                    <Text style={styles.MarketingText}>{item.title}</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      ...styles.AllBtn,
                      backgroundColor: COLOR.gray_4,
                    }}>
                    <Image
                      source={Icon.eye}
                      style={{width: 15, height: 15, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            {showChat && (
              <View style={styles.ChatCOntainer}>
                <TextInput style={styles.ChatTExt} />
                <TouchableOpacity
                  style={{alignSelf: 'flex-end', marginRight: '5%'}}>
                  <Image
                    source={Icon.send}
                    style={{
                      ...styles.chatICon,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
      <View style={{...styles.dropDown, marginTop: '2%'}}>
        {/* View Button */}
        <TouchableOpacity
          style={{
            ...styles.button,
            paddingVertical: isLandscape ? '1.5%' : '3%',
          }}
          onPress={() =>
            setIsExpanded(isExpanded === 'Create' ? '' : 'Create')
          }>
          <Text style={styles.buttonText}>Create Campaign</Text>
        </TouchableOpacity>
        {isExpanded == 'Create' && (
          <View>
            {CreatedataLsit.map((item, index) => (
              <View style={styles.LisContaonet}>
                <Text style={styles.MarketingText}>{item.title}</Text>

                <TouchableOpacity
                  style={{
                    ...styles.AllBtn,
                    backgroundColor: COLOR.gray_4,
                  }}>
                  <Image
                    tintColor={COLOR.gray_5}
                    source={Icon.plus}
                    style={{width: 13, height: 13, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      <View style={{height: hp(10)}} />
    </View>
  );
};

export default NewOpportunities;
