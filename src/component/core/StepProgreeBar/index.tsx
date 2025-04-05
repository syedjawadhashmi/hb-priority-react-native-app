import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import { COLOR } from '../../../themes/StyleGuides';

// Helper function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Function to render elements
const renderElements = (count, handleCircleClick, filteredReports) => (
  <View style={{flexDirection:"row",}} >
    {(() => {
      const elements = [];

      // Render red circles and dates
      for (let i = 0; i < count - 1; i++) {
        elements.push(
          <TouchableOpacity
            key={`circle-${i}`}
            style={styles.circleContainer}
            onPress={() => handleCircleClick(i)}
          >
            <View style={[styles.circle, styles.redCircle]} />
            <Text style={styles.dateText}>
              {formatDate(filteredReports[i].date).split('\n')[0]}
            </Text>
            <Text style={styles.dateText}>
              {formatDate(filteredReports[i].date).split('\n')[1]}
            </Text>
          </TouchableOpacity>
        );
      }

      // Render yellow circle with date for the most recent report
      if (count > 0) {
        elements.push(
          <TouchableOpacity
            key="yellow-circle"
            style={styles.circleContainer}
            onPress={() => handleCircleClick(count - 1)}
          >
            <View style={[styles.circle, styles.yellowCircle]}>
              <View style={styles.innerCircle} />
            </View>
            <Text style={styles.dateText}>
              {formatDate(filteredReports[filteredReports.length - 1].date).split('\n')[0]}
            </Text>
            <Text style={styles.dateText}>
              {formatDate(filteredReports[filteredReports.length - 1].date).split('\n')[1]}
            </Text>
          </TouchableOpacity>
        );
      }

      // Render hardcoded blue circles for testing
      for (let i = count; i < count + 20; i++) {
        elements.push(
          <View key={`test-circle-${i}`} style={{ ...styles.circleContainer, bottom: 4 }}>
            <View style={[styles.circle, styles.blueCircle]} />
            <Text style={styles.dateText}>Test Date</Text>
            <Text style={styles.dateText}>2024</Text>
          </View>
        );
      }

      return elements;
    })()}
  </View>
);

// Main Component
const ScrollableComponent = ({ count, handleCircleClick, filteredReports }) => {
  const scrollContainerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(count > 5);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasScrolledOnce = useRef(false); // Flag to track if the user has scrolled once
// console.log("scrollContainerRef",panResponder.panHandlers)
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        // Prevent further scrolling after the first scroll
        if (hasScrolledOnce.current) return;

        isDragging.current = true;
        startX.current = evt.nativeEvent.pageX;
        scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
      },
      onPanResponderMove: (evt) => {
        if (!isDragging.current || hasScrolledOnce.current) return;

        const walk = (evt.nativeEvent.pageX - startX.current) * 2;
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
        }
      },
      onPanResponderRelease: () => {
        if (!isDragging.current) return;

        isDragging.current = false;
        hasScrolledOnce.current = true; // Disable further scrolling after the first release
      },
    })
  ).current;

  return (
    <View style={styles.scrollContainer}  ref={scrollContainerRef} {...panResponder.panHandlers}>
      <ScrollView
        horizontal
        style={styles.scrollView}
    // Disable further scrolling once done
      >
        {renderElements(count, handleCircleClick, filteredReports)}
      </ScrollView>
      <View style={{width:"100%",height:1,backgroundColor:COLOR.black,position:"absolute",top:15}} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    width: 304,
    height: 60,
    alignItems: 'center',
    marginLeft:"5%"

  },
  scrollView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  circleContainer: {
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  redCircle: {
    backgroundColor: '#CF232A',
  },
  yellowCircle: {
    backgroundColor: '#FAAC18',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F4F4F4',
  },
  blueCircle: {
    backgroundColor: '#00A2FF',
  },
  dateText: {
    color: COLOR.black,
    fontSize: 8,
    textAlign: 'center',
  },
});

export default ScrollableComponent;
