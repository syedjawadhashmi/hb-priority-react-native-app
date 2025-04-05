import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import SCREEN from '../../../data/ScrName';
import ShowCaseFields from '../../../component/core/ShowCaseFields';

const ShowcaseReviews = (props: any) => {
  const {navigation} = props;
  const handalShowCase = () => {
    navigation.navigate(SCREEN.SelectReviewsReputation);
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Reputation"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true} >
      <ShowCaseFields onpress={handalShowCase}  />
      </ScrollView>
      <View style={styles.bottomBar}></View>

    </View>
  );
};
export default ShowcaseReviews;
