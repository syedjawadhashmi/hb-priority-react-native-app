import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import Header from '../../../component/common/Header';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';
import Install from '../../../component/other/WebchatSettings/Install';
import ChatBubble from '../../../component/other/WebchatSettings/ChatBubble';
import ChatWindow from '../../../component/other/WebchatSettings/ChatWindow';
import ChatHeader from '../../../component/other/WebchatSettings/ChatHeader';
import ChatFlow from '../../../component/other/WebchatSettings/ChatFlow';
import Chatbot from '../../../component/other/WebchatSettings/Chatbot';
import styles from './style';
import LetschatForm from '../../../component/other/WebchatSettings/LetschatForm';

interface EditProps {
  designmode?: () => void;
  layoutShow?: () => void;
  BackgroundColor?: () => void;
  TextStyleData?: () => void;
  ReviewsData?: () => void;
  AnimationData?: () => void;
}

const DarwinWidget = (prop: any) => {
  const {navigation} = prop;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selector, setSelector] = useState(false);
  const [chatIcon, setChatIcon] = useState('');
  const [chatIconBackground, setChatIconBackground] = useState('');
  const [chatIconColor, setChatIconColor] = useState('');
  const [buttonTextColor, setbuttonTextColor] = useState('');
  const [buttonColor, setbuttonColor] = useState('');
  const [primaryColor, setprimaryColor] = useState('');
  const [HeaderColor, setHeaderColor] = useState('');

  const data = [
    {title: 'Install', component: <Install />},
    {
      title: 'Chat Bubble',
      component: (
        <ChatBubble
          chatIcon={(e: any) => setChatIcon(e)}
          chatIconBackground={(e: any) => setChatIconBackground(e)}
          chatIconColor={(e: any) => setChatIconColor(e)}
        />
      ),
    },
    {
      title: 'Chat Window',
      component: (
        <ChatWindow
          HeaderColor={e => setHeaderColor(e)}
          primaryColor={e => setprimaryColor(e)}
          buttonTextColor={e => setbuttonTextColor(e)}
          buttonColor={(e: any) => setbuttonColor(e)}
        />
      ),
    },
    {title: 'Chat Header', component: <ChatHeader />},
    {title: 'Chat Flow', component: <ChatFlow />},
    {title: 'Chatbot', component: <Chatbot navigation={navigation} />},
  ];
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Phone Number"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        {selector == false ? (
          <View>
            <View
              style={{
                ...commonStyles.horizontalView,
                marginTop: '5%',
                marginLeft: '5%',
              }}>
              <Text style={styles.MainTitle}>Darwin Widget</Text>
              <TouchableOpacity
                style={{...commonStyles.horizontalView, marginLeft: '3%'}}>
                <Image source={Icon.pan_1} style={styles.pen} />
                <Text style={styles.editTitle}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>2 Locations</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
                <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.btnSave, backgroundColor: COLOR.red}}>
                <Text style={styles.SaveBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{height: 30}} />
        )}

        <View style={styles.selector}>
          <TouchableOpacity
            style={{
              ...styles.selectorBtn,
              backgroundColor: selector ? COLOR.whites : COLOR.primary,
            }}
            onPress={() => setSelector(false)}>
            <View style={{...commonStyles.horizontalView}}>
              <Image source={Icon.pan_1} style={styles.pen} />
              <Text style={styles.editTitle}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.selectorBtn,
              backgroundColor: selector ? COLOR.primary : COLOR.whites,
            }}
            onPress={() => setSelector(true)}>
            <View style={{...commonStyles.horizontalView}}>
              <Image source={Icon.eye} style={styles.pen} />
              <Text style={styles.editTitle}>View</Text>
            </View>
          </TouchableOpacity>
        </View>
        {selector ? (
          <LetschatForm
            chatIcon={chatIcon}
            chatIconBackground={chatIconBackground}
            chatIconColor={chatIconColor}
            HeaderColor={HeaderColor}
            primaryColor={primaryColor}
            buttonColor={buttonColor}
            buttonTextColor={buttonTextColor}
          />
        ) : (
          <View style={styles.listContainer}>
            <FlatList
            scrollEnabled={false}
              data={data}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: COLOR.white1,
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    style={{...styles.ListContainer}}
                    onPress={() =>
                      setSelectedIndex(selectedIndex === index ? null : index)
                    }>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '800',
                        color: COLOR.whites,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>

                  {/* Show the component if the item is selected */}
                  {selectedIndex === index && item.component}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DarwinWidget;
