import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {useRoute} from '@react-navigation/native';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {MesgData, SettingChat} from '../../../data/DummayData';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {useState} from 'react';
import * as component from '../../../component';

const assignList = [
  {name: 'SERVICE', color: '#1E7FC6'},
  {name: 'MARKETING', color: '#EA7513'},
  {name: 'SALES', color: '#ED1150'},
  {name: 'SUPPORT', color: '#3B9E71'},
];
const Chat = (props: any) => {
  const {navigation} = props;
  const rout = useRoute();
  const {data} = rout.params;
  const [assign, setAssign] = useState('');
  const [assignModal, setAssignModal] = useState(false);
  const [sattingModal, setSattingModal] = useState(false);
  const [payment, setPaymentModal] = useState(false);
  const [template, setTemplateModal] = useState(false);
  const [emptyChat, setEmptyChat] = useState(true);

  const haldalAssign = (data: any) => {
    setAssign(data);

    setAssignModal(false);
  };

  const handalSatting = (data: any, index: any) => {
    setSattingModal(false);
    index == 3 && setPaymentModal(true);
  };

  const DocoPicker = () => {
    component.handleDocumentSelection();
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: COLOR.gray}}>
        <Header
          firstIcon={Icon.Back}
          title="Inbox"
          onpesDrawer={() => navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: COLOR.gray,
          }}>
          <View style={styles.TitleCOntainer}>
            <Text
              style={{
                ...styles.titleStyle,
                color: COLOR.gray_5,
              }}>
              {data}
            </Text>
            <View style={{...commonStyles.verticleView}}>
              <TouchableOpacity
                onPress={() => setAssignModal(true)}
                style={styles.Unassignedbtn}>
                {assign ? (
                  <View
                    style={{
                      ...styles.statusbtn,
                      backgroundColor:
                        assign == 'SERVICE'
                          ? '#1E7FC6'
                          : assign == 'MARKETING'
                          ? '#EA7513'
                          : assign == 'SALES'
                          ? '#ED1150'
                          : '#3B9E71',
                    }}>
                    <Text style={styles.modalText}>{assign}</Text>
                  </View>
                ) : (
                  <Text
                    style={{
                      ...styles.modalText,
                      color: COLOR.gray_5,
                      marginRight: 5,
                    }}>
                    Unassigned
                  </Text>
                )}
                <Image source={Icon.DropDown} style={styles.DropDownIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSattingModal(true)}>
                <Image source={Icon.ThreeDot} style={styles.ThreeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {assignModal && (
        <View style={styles.modals}>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '10%',
              marginBottom: '4%',
            }}>
            <Text
              style={{
                ...styles.modalText,
                color: COLOR.gray_5,
              }}>
              ASSIGN TO:
            </Text>
            <TouchableOpacity onPress={() => setAssignModal(false)}>
              <Image
                source={Icon.crose}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          {assignList.map((items, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => haldalAssign(items.name)}
              style={{...styles.modalItem, backgroundColor: items.color}}>
              <Text style={styles.modalText}>{items.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {sattingModal && (
        <View style={styles.Sattingmodals}>
          {SettingChat.map((items, index) => (
            <TouchableOpacity
              onPress={() => handalSatting(items, index)}
              key={index}>
              <Text
                style={{
                  ...styles.sattingText,
                  color: index == 4 ? COLOR.red_1 : COLOR.gray_5,
                }}>
                {items}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {emptyChat ? (
        <View style={{marginBottom: '50%'}}>
          <FlatList
            data={MesgData}
            keyExtractor={index => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.ListContainer}
            renderItem={({item, index}) => (
              <component.ChatList item={item} index={index} MesgData={MesgData} />
            )}
          />
        </View>
      ) : (
        <View style={{backgroundColor: 'red', flex: 1}}></View>
      )}
      <View
        style={styles.SMSEmailContainer}>
        <View style={styles.containertitle}>
          <TouchableOpacity>
            <Text style={styles.SmSText}>SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '3%'}}>
            <Text style={styles.SmSText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '3%'}}>
            <Text style={styles.SmSText}>Webchat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '3%'}}>
            <Text style={styles.SmSText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '3%'}}>
            <Text style={styles.SmSText}>Internal Note</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TextinputsCOntainer}>
          <View style={styles.BottomContainer}>
            <TextInput
              placeholder={'Type a message'}
              style={styles.InputStyle}
              placeholderTextColor={COLOR.gray_5}
            />
            <View style={styles.TextInputConteiner}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.IconStyle} source={Icon.happy} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.SendButton}
                onPress={() => DocoPicker()}>
                <Image style={styles.IconStyle} source={Icon.attach} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.SendButton}>
                <Image style={styles.SendIcon} source={Icon.paper_plane} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnLast}
              onPress={() => setTemplateModal(true)}>
              <Text style={styles.lastbtnText}>Template</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.btnLast, marginLeft: '5%'}}>
              <Text style={styles.lastbtnText}>Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <component.MessagePayment
        close={() => setPaymentModal(false)}
        visible={payment}
        ofDropDown={() => setPaymentModal(false)}
      />
      <component.MessageTemplate
        close={() => setTemplateModal(false)}
        visible={template}
        ofDropDown={() => setTemplateModal(false)}
      />
    </View>
  );
};
export default Chat;
