import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, Dimensions, StyleSheet, ScrollView } from 'react-native';
import EmbedCodeCalender from '../EmbedCodeCalender';
import OneTimeLink from '../OneTimeLinkCalender';
import SchedulingLink from '../SchedulingLink';
import styles from './style';



const { width, height } = Dimensions.get('window');


const JohnCalendarModal = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState('Scheduling Link'); // Default tab

  // Tabs data
  const tabs = ['Scheduling Link', 'One Time Link', 'Embed Code'];

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Scheduling Link':
        return (
            <SchedulingLink/>
        );
      case 'One Time Link':
        return (
          <OneTimeLink/>
        );
      case 'Embed Code':
        return (
          <EmbedCodeCalender/>
        );
      default:
        return null;
    }
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <ScrollView   >
          <View style={styles.header}>
            <Text style={styles.headerText}>John’s Calendar</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Content */}
          {renderContent()}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default JohnCalendarModal;