import { FlatList, Text, View } from 'react-native';
import styles from './style';
import { sendList } from '../../../../data/DummayData';
import { inboxProp } from '../../../../data/Types';
import InboxLists from '../../../core/InboxLists';


const Draft = (props:inboxProp) => {
  const{onpress}=props
 return (
  <View style={styles.container}>
     <FlatList
     scrollEnabled={false}
        data={sendList}
        renderItem={({item}) => (
          <InboxLists
            time={item.time}
            discription={item.discription}
            title={item.title}
            name={item.name}
            onpress={onpress}
          />
        )}
      />
  </View>
 )
}
export default Draft
