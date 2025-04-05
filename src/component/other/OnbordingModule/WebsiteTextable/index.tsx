import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Buttons from '../../../common/Buttons';
import {Icon, Images} from '../../../../assest';
import {inboxProp} from '../../../../data/Types';
import TextInputs from '../../../common/TextInputs';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {WebView} from 'react-native-webview';
import OnbordingDFYModel from '../../../core/OnbordingDFYModel';
import {useState} from 'react';

const WebsiteTextable = (props: inboxProp) => {
  const {onpress} = props;
  const [modal, setModal] = useState(false);
  const [webShow, setWebShow] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>Make your{'\n'} website textable. </Text>
        <Text style={styles.discription}>What’s your business website?</Text>
        <View style={styles.HttpContainer}>
          <Text style={styles.http}>https://</Text>
          <TextInputs
            style={styles.btnStyle}
            placeholderColor={COLOR.gray_6}
            Icons={Icon.crose}
            IconStyle={styles.IconCrose}
            defaultValue={webShow == '' ? 'digitalhp.com' : webShow}
            onChange={(e: any) => setWebShow(e)}
            IconOnpress={() => setWebShow('')}
          />
        </View>
        <Buttons
          title={'Preview my website'}
          container={styles.ContinueBtn}
          onpress={() => setModal(true)}
        />
        <View
          style={{
            height: 230,
            width: 300,
            alignSelf: 'center',
            marginTop: '3%',
          }}>
          <WebView
            automaticallyAdjustContentInsets={false}
            javaScriptEnabled={false}
            source={{uri: `https://${webShow ? webShow : 'digitalhp.com'}/`}}
            style={styles.webView}
          />
          <Image source={Images.overlay_webchat} style={styles.overlay} />
        </View>
        <Image source={Images.HubSparkLogo} style={styles.logo} />
        <OnbordingDFYModel visible={modal} onpress={onpress} />
      </ScrollView>
    </View>
  );
};
export default WebsiteTextable;
