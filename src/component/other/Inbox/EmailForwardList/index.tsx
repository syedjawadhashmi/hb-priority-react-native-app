import {Image, Text, View} from 'react-native';
import styles from './style';

interface EmailForwardListProps {
  name?: string;
  date?: any;
  image?: any;
  sms?: any;
  fors?: string;
}

const EmailForwardList = (prop: EmailForwardListProps) => {
  const {name, date, image, sms, fors} = prop;
  return (
    <View style={styles.container}>
      <View style={styles.mainCOntainer} >
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.for}>{fors}</Text>
      <Text style={styles.discription}>{sms}</Text>
    </View>
  );
};
export default EmailForwardList;
