import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {EmailReplyForwardList} from '../../../data/DummayData';
import {Icon} from '../../../assest';
import * as component from '../../../component';

const EmailReplyForward = (prop: any) => {
  const {navigation} = prop;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Inbox"
        // onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>NO Subject</Text>
        </View>

        <View>
          <FlatList
            scrollEnabled={false}
            data={EmailReplyForwardList}
            renderItem={({item}) => (
              <component.EmailForwardList
                name={item.name}
                image={item.image}
                date={item.date}
                fors={item.for}
                sms={item.sms}
              />
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.selectContainer}>
        <TouchableOpacity
          style={{...styles.selectBtn, paddingHorizontal: '5%'}}>
          <Image source={Icon.Reply} style={styles.ReplyIcon} />
          <Text style={styles.selectdText}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBtn}>
          <Image source={Icon.ReplyAll} style={styles.ReplyIcon} />

          <Text style={styles.selectdText}>Reply All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBtn}>
          <Image source={Icon.replyForward} style={styles.ReplyIcon} />

          <Text style={styles.selectdText}>Forward</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EmailReplyForward;
