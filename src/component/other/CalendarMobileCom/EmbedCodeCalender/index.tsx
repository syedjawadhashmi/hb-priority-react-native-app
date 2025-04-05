import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const EmbedCodeCalender = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Embed Code</Text>
      <Text style={styles.description}>
        Share securely every time with a unique link that expires after a
        booking, ensuring controlled access.
      </Text>
      <View style={styles.embedContainer}>
        <TextInput
          style={styles.inputEmbedCode}
          value={`<iframe src="https://api.hubspark.com/
widget/booking/Ipzd0K9hFhlK7C3hs9nw" style
="width: 100%;border:none;overflow: hidden;" 
scrolling="no" id="Ipzd0K9hFhlK7C3hs9nw_17
5372166578"></iframe><br><script src="https:
//link.msgsndr.com/js/form_embed.js" type="te
xt/javascript"></script>`}
          editable={false}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.copyButton}>
        <Text style={styles.copyText}>Copy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmbedCodeCalender;
