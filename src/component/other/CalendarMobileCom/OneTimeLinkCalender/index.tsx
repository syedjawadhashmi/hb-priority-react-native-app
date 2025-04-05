import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faRotate } from '@fortawesome/free-solid-svg-icons'

const OneTimeLink = () => {
  return (
    <View style={styles.contentContainer}>
            
            <View style={styles.linkContainer}>
              <TextInput
                style={styles.input}
              />
              <TouchableOpacity style={styles.copyButton}>
                <Text style={styles.copyText}>Copy</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.generateButton}>
            {/* <FontAwesomeIcon icon={faRotate} color='#631363'/> */}
              <Text style={styles.generateButtonText}>Generate New Link</Text>
              
            </TouchableOpacity>
            <Text style={styles.OneTimeLink}>One Time Link</Text>
            <Text style={styles.description}>
              Share your availability every time with a unique link that expires after a booking, ensuring controlled access.
            </Text>
          </View>
  )
}

export default OneTimeLink