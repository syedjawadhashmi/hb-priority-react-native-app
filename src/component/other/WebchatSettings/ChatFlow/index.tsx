import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ToggleSwitch from 'toggle-switch-react-native';
import {useState} from 'react';
import {Icon} from '../../../../assest';
import {ChatFlowList, MesgData} from '../../../../data/DummayData'
import Chat from '../Chat';
import Contactsfill from '../Contactsfill';
import Buttons from '../../../common/Buttons';

const ChatFlow = () => {
  const [LiveChat, setLiveChat] = useState(false);
  const [editChat, setEditChat] = useState(false);
  const [another, setAnother] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{...commonStyles.verticleView, paddingRight: '5%'}}>
        <Text style={{...styles.tittle}}>Live Chat</Text>
        <ToggleSwitch
          isOn={LiveChat}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setLiveChat(isOn);
          }}
        />
      </View>
      <Text style={styles.disciption}>
        When Live chat is turned on, website visitors can message your business
        and your team can respond directly on your website.
        <Text style={{color: COLOR.perpal_3}}>Learn more.</Text>{' '}
      </Text>
      <Text style={{...styles.tittle}}>During business hours</Text>
      <Text style={styles.disciption}>
        This is the chat flow during your business hours
      </Text>

      <View style={styles.CardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hello visitor!</Text>
          <TouchableOpacity onPress={() => setEditChat(true)}>
            <Image
              source={Icon.pan_1}
              style={styles.pen}
              tintColor={COLOR.white}
            />
          </TouchableOpacity>
        </View>

        {another ? (
          <View>
            <View style={{height:"73%"}}>
            <FlatList
              data={ChatFlowList}
              keyExtractor={index => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.ListContainer}
              renderItem={({item, index}) => (
                <Chat item={item} index={index} MesgData={MesgData} />
              )}
            />
            </View>
            <View style={styles.BottomContainer}>
              <TextInput
                placeholder={'Type a message'}
                style={styles.InputStyle}
                placeholderTextColor={COLOR.gray}
              />
              <View style={styles.TextInputConteiner}>
                <TouchableOpacity style={styles.SendButton}>
                  <Image
                    style={styles.SendIcon}
                    source={Icon.paper_plane}
                    tintColor={COLOR.gray_5}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                ...commonStyles.horizontalView,
                alignSelf: 'flex-start',
                marginLeft: '6%',
                marginTop: '2%',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.IconStyle} source={Icon.emojyPlus} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.SendButton}>
                <Image
                  style={styles.IconStyle}
                  source={Icon.attach}
                  tintColor={COLOR.gray_5}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View>
              <View
                style={[
                  styles.MessageCard,
                  {
                    flexDirection: 'row-reverse',
                  },
                ]}>
                <View>
                  <TouchableOpacity style={styles.MesgSenderContainer}>
                    <Text style={styles.MessageLabel2}>
                      I would like to learn more about this place.
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                    }}>
                    <Text style={styles.timeSenderAndRacive2}>05:25</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={styles.line
              }
            />

            <Image
              source={Icon.Chat_7}
              style={styles.ChatIcon}
            />
            <Text style={styles.weWillText}>We will text you !</Text>
            <Text style={styles.dis}>
              We will follow up with you soon. You can {'\n'}always text us at
              [Business Phone]
            </Text>
            <TouchableOpacity style={styles.btnSend} onPress={()=>setAnother(true)}  >
              <Text style={styles.sendBtnText}>Send Another Message</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.close}>
        <Image
          source={Icon.close}
          style={styles.pen}
          tintColor={COLOR.whites}
        />
      </TouchableOpacity>
      <Contactsfill close={() => setEditChat(false)} visible={editChat} />
    </View>
  );
};
export default ChatFlow;
