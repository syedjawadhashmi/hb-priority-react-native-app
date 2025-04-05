import {FlatList, View} from 'react-native';
import styles from './style';
import { inboxProp } from '../../../../data/Types';
import { InboxsendList } from '../../../../data/DummayData';
import InboxLists from '../../../core/InboxLists';

const Inbox = (props: inboxProp) => {
  const {onpress} = props;
  return (
    <View style={styles.container}>
      <FlatList
      scrollEnabled={false}
        data={InboxsendList}
        renderItem={({item}) => (
          <InboxLists
            time={item.time}
            discription={item.discription}
            title={item.title}
            name={item.name}
            onpress={onpress}
            select={item.select}
          />
        )}
      />
    </View>
  );
};
export default Inbox;
