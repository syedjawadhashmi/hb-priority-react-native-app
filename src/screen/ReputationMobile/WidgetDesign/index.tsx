import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {useState} from 'react';
import EditReputation from '../../../component/other/ReputationModule/EditReputation';
import ViewReputation from '../../../component/other/ReputationModule/ViewReputation';

const WidgetDesign = (props: any) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);
  const [designMode, setdesignMode] = useState('');
  const [layoutShow, setlayoutShow] = useState('');
  const [textStyleData, setTextStyleData] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [ReviewsData, setReviewsData] = useState('');
  const [animationData, setAnimationData] = useState('');

  // console.log("designMode",designMode)

  const data = [
    {
      title: 'Design Preset',
    },
    {
      title: 'Layout',
    },
    {
      title: 'Container',
    },
    {
      title: 'Text',
    },
    {
      title: 'Reviews',
    },
    {
      title: 'Animation',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Reputation"
        onpesDrawer={() => navigation.openDrawer()}
      />
<ScrollView  scrollEnabled={true} >
      <Text style={styles.MainText}>
        Coustomize your widget so it display your reviews how you want your
        coustom to see them
      </Text>
      <View
        style={{
          ...commonStyles.verticleView,
          alignSelf: 'flex-end',
          marginRight: '5%',
          marginTop: '5%',
        }}>
        <TouchableOpacity
          style={{
            ...styles.lastBtn,
            backgroundColor: COLOR.primary,
            marginRight: '5%',
          }}>
          <Text style={{...styles.btnText, color: COLOR.black}}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.lastBtn, backgroundColor: COLOR.red}}>
          <Text style={{...styles.btnText, color: COLOR.whites}}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => setSelect(0)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 0 ? COLOR.primary : COLOR.whites,
          }}>
          <Image source={Icon.pen} style={styles.IconStyle} />
          <Text style={styles.selectdText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(1)}
          style={{
            ...styles.selectBtn,
            backgroundColor: select == 1 ? COLOR.primary : COLOR.whites,
          }}>
          <Image source={Icon.eye} style={styles.IconStyle} />
          <Text style={styles.selectdText}>View</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        {select == 0 ? (
          <EditReputation
            BackgroundColor={(e: any) => setBackgroundColor(e)}
            designmode={(e: any) => setdesignMode(e)}
            layoutShow={(e: any) => setlayoutShow(e)}
            TextStyleData={(e: any) => setTextStyleData(e)}
            ReviewsData={(e: any) => setReviewsData(e)}
          AnimationData={(e:any)=>setAnimationData(e)}
          />
        ) : (
          <ViewReputation
            designmode={designMode}
            layoutShow={layoutShow}
            BackgroundColor={backgroundColor}
            TextStyleData={textStyleData}
            ReviewsData={ReviewsData}
            AnimationData={animationData}
          />
        )}
      </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={{...styles.lastBtn, backgroundColor: COLOR.red}}>
          <Text style={{...styles.btnText, color: COLOR.whites}}>Cancel</Text>
        </TouchableOpacity>
        <View style={{...commonStyles.verticleView}}>
          <View style={{borderBottomColor: COLOR.black, borderBottomWidth: 1}}>
            <Text style={{...styles.btnText, fontSize: 11}}>Select Review</Text>
          </View>
          <Image
            source={Icon.RightArrowchevron}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </View>
        <Text style={{...styles.btnText, fontSize: 11}}>Widget Design</Text>
        <TouchableOpacity
          style={{
            ...styles.lastBtn,
            backgroundColor: COLOR.primary,
            ...commonStyles.verticleView,
          }}>
          <Text style={{...styles.btnText, color: COLOR.black}}>Next</Text>
          <Image source={Icon.RightArrowchevron} style={styles.IconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WidgetDesign;
