import {FlatList, View} from 'react-native';
import styles from './style';
import { inboxProp } from '../../../../data/Types';
import { SendsendList } from '../../../../data/DummayData';
import InboxLists from '../../../core/InboxLists';

const Sent = (props: inboxProp) => {
  const {onpress} = props;

  return (
    <View style={styles.container}>
      <FlatList
      scrollEnabled={false}
        data={SendsendList}
        renderItem={({item}) => (
          <InboxLists
            time={item.time}
            discription={item.discription}
            title={item.title}
            name={item.name}
            onpress={onpress}
            to="To:"
          />
        )}
      />
    </View>
  );
};
export default Sent;
