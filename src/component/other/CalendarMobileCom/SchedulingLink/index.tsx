import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const SchedulingLink = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Scheduling Link</Text>
      <View style={styles.linkContainer}>
        <TextInput
          style={styles.input}
        />
        <TouchableOpacity style={styles.copyButton}>
          <Text style={styles.copyText}>Copy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        The scheduling link is determined by the slug. Adjust its slug, and the
        scheduling link automatically adapts to the modification.
      </Text>
      <View style={styles.permanentLinkContainer}>
        <TextInput style={styles.permanentText} />
        <TouchableOpacity style={styles.copyButton}>
          <Text style={styles.copyText}>Copy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Ideal for funnels, website redirects, or ads. The permanent link remains
        constant, unaffected by slug changes.
      </Text>
    </View>
  );
};

export default SchedulingLink;
