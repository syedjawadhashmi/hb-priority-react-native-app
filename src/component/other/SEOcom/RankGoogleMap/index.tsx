import {FlatList,  Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import styles from './style';
import {
  AveragePositions,
  Context,
  Location,
  RankGoogleMapProps,
  Report,
} from '../../../../data/Types';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import KeywordPicker from '../../../core/KeywordPicker';
import ScrollableComponent from '../../../core/StepProgreeBar';
import SEoTopRanking from '../../../core/SEoTopRanking';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import ProgressBars from '../../../core/ProgressBars';

const outerBarWidth = 302; // Fixed width for the outer bar
const calculateAveragePosition = (contexts: Context[]) => {
  if (contexts.length === 0) return 0;
  return contexts.reduce((acc, ctx) => acc + ctx.position, 0) / contexts.length;
};

const findPreviousReportForKeyword = (
  reports: Report[],
  keyword: string,
  currentDate: string,
) => {
  // Find the most recent previous report for the same keyword before the current date
  const previousReports = reports
    .filter(
      report =>
        report.keyword === keyword &&
        new Date(report.date) < new Date(currentDate),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return previousReports.length > 0 ? previousReports[0] : null;
};

const calculateKeywordDeltaAcrossAllKeywords = (
  currentReport: Report,
  previousReport: Report | null,
  placeId: string,
) => {
  let keywordsUp = 0;
  let keywordsDown = 0;

  if (previousReport) {
    const previousLocationsByKeyword: {[keyword: string]: Location[]} = {};
    const currentLocationsByKeyword: {[keyword: string]: Location[]} = {};

    console.log('Previous Report Locations:', previousReport.locations);
    console.log('Current Report Locations:', currentReport.locations);

    // Organize locations by keyword, filtering by place_id
    previousReport.locations.forEach(location => {
      if (location.place_id === placeId) {
        const keyword = previousReport.keyword;
        if (previousLocationsByKeyword[keyword]) {
          previousLocationsByKeyword[keyword].push(location);
        } else {
          previousLocationsByKeyword[keyword] = [location];
        }
      }
    });

    currentReport.locations.forEach(location => {
      if (location.place_id === placeId) {
        const keyword = currentReport.keyword;
        if (currentLocationsByKeyword[keyword]) {
          currentLocationsByKeyword[keyword].push(location);
        } else {
          currentLocationsByKeyword[keyword] = [location];
        }
      }
    });

    console.log('Previous Locations By Keyword:', previousLocationsByKeyword);
    console.log('Current Locations By Keyword:', currentLocationsByKeyword);

    // Compare each keyword's average position between current and previous reports
    Object.keys(currentLocationsByKeyword).forEach(keyword => {
      const currentKeywordLocations = currentLocationsByKeyword[keyword];
      const previousKeywordLocations = previousLocationsByKeyword[keyword];

      if (previousKeywordLocations && currentKeywordLocations) {
        const currentAveragePosition = calculateAveragePosition(
          currentKeywordLocations.flatMap(loc => loc.searchContexts),
        );
        const previousAveragePosition = calculateAveragePosition(
          previousKeywordLocations.flatMap(loc => loc.searchContexts),
        );

        console.log(
          `Keyword: ${keyword}, Current Avg Position: ${currentAveragePosition}, Previous Avg Position: ${previousAveragePosition}`,
        );

        if (currentAveragePosition < previousAveragePosition) {
          keywordsUp++;
        } else if (currentAveragePosition > previousAveragePosition) {
          keywordsDown++;
        }
      }
    });
  }

  return {keywordsUp, keywordsDown};
};

const RankGoogleMap = (props: RankGoogleMapProps) => {
  const {keywords, locations, reports} = props;
  const [averagePosition, setAveragePosition] = useState<number | null>(null);
  const [averagePositions, setAveragePositions] = useState<AveragePositions>(
    {},
  );
  const [keywordsDelta, setKeywordsDelta] = useState<{
    keywordsUp: number;
    keywordsDown: number;
  }>({keywordsUp: 0, keywordsDown: 0});

  const [selectedKeyword, setSelectedKeyword] = useState<string>(keywords[0]);
  console.log('averagePosition', averagePosition);
  const [currentLocations, setCurrentLocations] = useState<Location[]>(
    locations[0],
  );
  const [selectedKeywordIndex, setSelectedKeywordIndex] = useState<number>(0);
  const [overallAverageChange, setOverallAverageChange] = useState<
    number | null
  >(null);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [greenCircleCount, setGreenCircleCount] = useState(0);
  const [yellowCircleCount, setYellowCircleCount] = useState(0);
  const [redCircleCount, setRedCircleCount] = useState(0);
  const [fillPercent1, setFillPercent1] = useState(0);
  const [fillPercent2, setFillPercent2] = useState(0);
  const [fillPercent3, setFillPercent3] = useState(0);
  const [allKeywordsAverage, setAllKeywordsAverage] = useState<number | null>(
    null,
  );
  const [modals,setModals]=useState(false)

  const [specificLocation, setSpecificLocation] = useState();
  // console.log('specificLocation', specificLocation.gps_coordinates.latitude);
  const combinedKeywords = useMemo(() => {
    // Extract unique keywords from reports
    const uniqueReportKeywords = Array.from(
      new Set(reports.map((report: any) => report.keyword)),
    );

    // Combine prop keywords and unique report keywords, removing duplicates
    return Array.from(new Set([...keywords, ...uniqueReportKeywords]));
  }, [keywords, reports]);

  useEffect(() => {
    const keyword = combinedKeywords[selectedKeywordIndex];
    const filtered = reports.filter(
      (report: any) => report.keyword === keyword,
    );

    // Sort filtered reports by date in ascending order
    filtered.sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    setFilteredReports(filtered);
    setSelectedKeyword(keyword);

    if (scrollContainerRef.current) {
      const circleWidth = 42;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const visibleCircles = Math.floor(containerWidth / circleWidth);
      //const totalCircles = filtered.length + 20; // Total circles, including hardcoded ones
      const totalCircles = filtered.length;

      const isOverflowing = totalCircles > visibleCircles;
      setIsOverflowing(isOverflowing);

      if (isOverflowing) {
        const remainingCircles = totalCircles - visibleCircles;

        if (remainingCircles > 0) {
          scrollContainerRef.current.scrollLeft =
            remainingCircles * circleWidth;
        } else {
          scrollContainerRef.current.scrollLeft = 0;
        }
      } else {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
  }, [combinedKeywords, selectedKeywordIndex, reports]);

  const handleKeywordChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedKeyword = combinedKeywords[event];
    // console.log("evertShow",event)

    setSelectedKeywordIndex(event);

    if (keywords.includes(newSelectedKeyword)) {
      // If the newly selected keyword is part of the keywords prop, use the locations array
      setCurrentLocations(locations[event]);
    } else {
      // If the selected keyword is not part of the keywords prop, find the most recent report for that keyword
      const mostRecentReport = reports
        .filter((report: any) => report.keyword === newSelectedKeyword)
        .sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )[0];

      // Set current locations to the locations from the most recent report
      setCurrentLocations(mostRecentReport?.locations);
    }
  };
  // Defines a function to create a styled circle element based on the given position
  function createCircle(position: number) {
    const circle = document.createElement('div');
    const contextPosition = document.createElement('span');
    contextPosition.className = 'context-position';
    contextPosition.textContent =
      position === 21 ? `${position}+` : `${position}`;

    // Determine which circle class to use based on the position
    circle.className =
      position <= 5
        ? 'green-circle'
        : position <= 9
        ? 'yellow-circle'
        : 'red-circle';
    circle.appendChild(contextPosition);
    return circle;
  }
  useEffect(() => {
    let totalAveragePosition = 0;
    let keywordCount = 0;

    let totalKeywordsUp = 0;
    let totalKeywordsDown = 0;
    let previousOverallAverage = 0;
    let currentOverallAverage = 0;

    // Calculate average positions and keywords delta for each keyword's locations
    locations.forEach((keywordLocations: any, index: any) => {
      console.log(
        'Processing locations for index:',
        index,
        'Keyword:',
        reports[index]?.keyword,
        'Locations:',
        keywordLocations,
      );
      let keywordTotalPosition = 0;
      let keywordLocationCount = 0;

      keywordLocations.forEach((location: any) => {
        // Only consider locations with the specified place_id
        if (
          location.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk' &&
          location.searchContexts.length > 0
        ) {
          const averagePos = calculateAveragePosition(location.searchContexts);
          keywordTotalPosition += averagePos;
          keywordLocationCount++;
        }
      });

      if (keywordLocationCount > 0) {
        const keywordAveragePosition =
          keywordTotalPosition / keywordLocationCount;
        totalAveragePosition += keywordAveragePosition;
        keywordCount++;
      }

      // Calculate the delta for the current report and its previous report
      const correspondingReport = reports[index];
      if (correspondingReport) {
        const previousReport = findPreviousReportForKeyword(
          reports,
          correspondingReport.keyword,
          correspondingReport.date,
        );

        if (previousReport) {
          const {keywordsUp, keywordsDown} =
            calculateKeywordDeltaAcrossAllKeywords(
              correspondingReport,
              previousReport,
              'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk',
            );
          totalKeywordsUp += keywordsUp;
          totalKeywordsDown += keywordsDown;

          // Calculate previous overall average
          previousReport.locations.forEach(prevLocation => {
            if (
              prevLocation.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk' &&
              prevLocation.searchContexts.length > 0
            ) {
              const prevAveragePos = calculateAveragePosition(
                prevLocation.searchContexts,
              );
              previousOverallAverage += prevAveragePos;
            }
          });

          // Calculate current overall average
          correspondingReport.locations.forEach((currLocation: any) => {
            if (
              currLocation.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk' &&
              currLocation.searchContexts.length > 0
            ) {
              const currAveragePos = calculateAveragePosition(
                currLocation.searchContexts,
              );
              currentOverallAverage += currAveragePos;
            }
          });
        }
      }
    });

    if (keywordCount > 0) {
      const overallAverage = totalAveragePosition / keywordCount;
      setAllKeywordsAverage(overallAverage);
      console.log(
        `All Keywords Average for place_id "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk": ${overallAverage}`,
      );

      // Calculate the overall average change
      const overallChange = currentOverallAverage - previousOverallAverage;
      setOverallAverageChange(overallChange);
    }

    setKeywordsDelta({
      keywordsUp: totalKeywordsUp,
      keywordsDown: totalKeywordsDown,
    });
    console.log(
      `Total keywords up: ${totalKeywordsUp}, Total keywords down: ${totalKeywordsDown}`,
    );
  }, [locations, reports]);

  // Function to calculate and update fill percentages
  useEffect(() => {
    const total = greenCircleCount + yellowCircleCount + redCircleCount;
    if (total > 0) {
      setFillPercent1((greenCircleCount / total) * 100);
      setFillPercent2((yellowCircleCount / total) * 100);
      setFillPercent3((redCircleCount / total) * 100);
    }
  }, [greenCircleCount, yellowCircleCount, redCircleCount]);

  // Function to retrieve top contexts based on a given latitude and longitude with a specific tolerance
  const getTopContexts = useCallback(
    (lat: number, lng: number, tolerance = 0.001) => {
      const contexts: Context[] = [];
      //console.log(`Searching for contexts near lat: ${lat}, lng: ${lng} with tolerance: ${tolerance}`);
      // Iterate through all locations to find matching search contexts
      currentLocations.forEach(location => {
        location.searchContexts.forEach(context => {
          //console.log(`Checking context at lat: ${context.searchLatitude}, lng: ${context.searchLongitude}`);
          // Check if the context falls within the specified latitude and longitude tolerance
          if (
            Math.abs(context.searchLatitude - lat) <= tolerance &&
            Math.abs(context.searchLongitude - lng) <= tolerance &&
            !context.missing
          ) {
            contexts.push({...context, title: location.title});
            //console.log(`Context added: ${context.title}`);
          }
        });
      });

      if (contexts.length === 0) {
        //console.log("No contexts found within the initial tolerance, expanding search...");
        return getTopContexts(lat, lng, tolerance * 2); // Recursively expand the search if no contexts found
      }

      // Sort the contexts by their position value
      contexts.sort((a, b) => a.position - b.position);

      // return both the top 3 contexts
      return {
        topThreeContexts: contexts.slice(0, 3),
      };
    },
    [currentLocations],
  );

  const handleCircleClick = (index: number) => {
    const clickedReport = filteredReports[index];
    if (clickedReport) {
      // Update the current locations with the locations of the clicked report
      setCurrentLocations(clickedReport.locations);

      let totalKeywordsUp = 0;
      let totalKeywordsDown = 0;

      // Find the previous report for the same keyword based on the date
      const previousReport = findPreviousReportForKeyword(
        filteredReports,
        clickedReport.keyword,
        clickedReport.date,
      );

      if (previousReport) {
        const {keywordsUp, keywordsDown} =
          calculateKeywordDeltaAcrossAllKeywords(
            clickedReport,
            previousReport,
            'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk',
          );
        totalKeywordsUp += keywordsUp;
        totalKeywordsDown += keywordsDown;

        // Calculate overall average change
        let previousOverallAverage = 0;
        let currentOverallAverage = 0;

        previousReport.locations.forEach((prevLocation: any) => {
          if (
            prevLocation.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk' &&
            prevLocation.searchContexts.length > 0
          ) {
            const prevAveragePos = calculateAveragePosition(
              prevLocation.searchContexts,
            );
            previousOverallAverage += prevAveragePos;
          }
        });

        clickedReport.locations.forEach((currLocation: any) => {
          if (
            currLocation.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk' &&
            currLocation.searchContexts.length > 0
          ) {
            const currAveragePos = calculateAveragePosition(
              currLocation.searchContexts,
            );
            currentOverallAverage += currAveragePos;
          }
        });

        const overallChange = currentOverallAverage - previousOverallAverage;
        setOverallAverageChange(overallChange);
      }

      console.log(
        `Total keywords up: ${totalKeywordsUp}, Total keywords down: ${totalKeywordsDown}`,
      );
    }
  };



  useEffect(() => {
    const specificLocation = currentLocations.find(
      location => location.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk',
    );
    setSpecificLocation(specificLocation);
    const keyword = combinedKeywords[selectedKeywordIndex];
    const filteredReports = reports.filter(
      report => report.keyword === keyword,
    );
    setSelectedKeyword(keyword);
    setCurrentLocations(locations[selectedKeywordIndex]);

    let averages = {};
    let greenCount = 0,
      yellowCount = 0,
      redCount = 0;

    currentLocations.forEach(location => {
      if (location.searchContexts.length > 0) {
        averages[location.place_id] = {
          averagePosition: calculateAveragePosition(location.searchContexts),
          title: location.title,
          reviews: location.reviews,
          rating: location.rating,
          type: location.type,
          types: location.types,
        };

        if (location.place_id === 'ChIJ2c6GcUgS04kRkJPQ8rJ1ewk') {
          setAveragePosition(averages[location.place_id].averagePosition);
        }

        location.searchContexts.forEach(context => {
          if (context.position <= 5) greenCount++;
          else if (context.position <= 9) yellowCount++;
          else redCount++;
        });
      }
    });
    console.log('averages', averages);
    setAveragePositions(averages);
    setGreenCircleCount(greenCount);
    setYellowCircleCount(yellowCount);
    setRedCircleCount(redCount);
  }, [selectedKeywordIndex, locations]);


  const sortedAverages = Object.entries(averagePositions)
    .map(([placeId, data]) => ({placeId, ...data}))
    .sort((a, b) => a.averagePosition - b.averagePosition)
    .slice(0, 10);
  console.log('currentLocations', sortedAverages);
  return (
    <View style={styles.container}>
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: specificLocation
              ? specificLocation?.gps_coordinates.latitude
              : 37.78825,
            longitude: specificLocation
              ? specificLocation?.gps_coordinates.longitude
              : -122.4324,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          {/* {renderMarkers()} */}
        </MapView>

        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            marginTop: '5%',
          }}>
          <FlatList
            numColumns={5}
            data={sortedAverages}
            renderItem={({item, index}) => (
              <TouchableOpacity
              onPress={()=>setModals(true)}
                style={{
                  ...styles.RangingShow,
                  backgroundColor:
                    index < 3 ? '#00914C' : index < 7 ? '#FAAC18' : '#CF232A',
                }}>
                <Text style={styles.RangingShowText}>{index}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      {modals&&  <TouchableOpacity
      onPress={()=>setModals(false)}
          style={{
            width: '80%',
            height: 150,
            backgroundColor: COLOR.white,
            position: 'absolute',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius:10
          }}>
          <FlatList
            data={sortedAverages}
            renderItem={({item}) => (
              <View>
                <Text
                  style={{fontSize: 12, fontWeight: '800', color: COLOR.black,marginLeft:"5%",marginBottom:"5%"}}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </TouchableOpacity>}
      </View>

      <View
        style={{
          ...commonStyles.horizontalView,
          marginLeft: '5%',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
          All Keywords Avg.
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: COLOR.gray_5,
            marginLeft: '2%',
          }}>
          {allKeywordsAverage} |
          {Math.abs(
            keywordsDelta.keywordsUp - keywordsDelta.keywordsDown,
          ).toFixed(1)}
        </Text>
      </View>
      <View
        style={{
          ...commonStyles.horizontalView,
          marginLeft: '5%',
          marginTop: '3%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
          Total Keywords
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: COLOR.gray_5,
            marginLeft: '2%',
          }}>
          {combinedKeywords.length}
        </Text>
      </View>
      <View
        style={{
          ...commonStyles.horizontalView,
          marginLeft: '5%',
          marginTop: '3%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
          Keywords Up
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: COLOR.gray_5,
            marginLeft: '2%',
          }}>
          {keywordsDelta.keywordsUp}
        </Text>
      </View>
      <View
        style={{
          ...commonStyles.horizontalView,
          marginLeft: '5%',
          marginTop: '3%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
          Keywords Down
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: COLOR.gray_5,
            marginLeft: '2%',
          }}>
          {keywordsDelta.keywordsDown}
        </Text>
      </View>
      <KeywordPicker
        combinedKeywords={combinedKeywords}
        handleKeywordChange={(x: any) => handleKeywordChange(x)}
      />
      <View>
        <ScrollableComponent
          count={filteredReports.length}
          handleCircleClick={(index: any) => handleCircleClick(index)}
          filteredReports={filteredReports}
        />
      </View>
      <View
        style={{
          ...commonStyles.horizontalView,
          marginLeft: '5%',
          marginTop: '5%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
          Total Keywords
        </Text>
        {averagePosition !== null && (
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: COLOR.gray_5,
              marginLeft: '2%',
            }}>
            {averagePosition.toFixed(1)}
          </Text>
        )}
      </View>
      {overallAverageChange !== null && (
        <View
          style={{
            ...commonStyles.horizontalView,
            marginLeft: '5%',
            marginTop: '2%',
            marginBottom: '5%',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: COLOR.black}}>
            Change
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: COLOR.gray_5,
              marginLeft: '2%',
            }}>
            {Math.abs(overallAverageChange).toFixed(1)}
          </Text>
        </View>
      )}
      <View>
        <ProgressBars
          title={'High-ranking Grid Points'}
          rating={outerBarWidth * (fillPercent1 / 100)}
          colors={'#00914C'}
          container={{marginTop: '5%', marginBottom: '5%'}}
        />
      </View>
      <View>
        <ProgressBars
          title={'Medium-ranking Grid Points'}
          rating={outerBarWidth * (fillPercent2 / 100)}
          colors={'#FAAC18'}
          container={{marginTop: '2%'}}
        />
      </View>
      <View>
        <ProgressBars
          title={'Low-ranking Grid Points'}
          rating={outerBarWidth * (fillPercent3 / 100)}
          colors={'#CF232A'}
          container={{marginTop: '2%', marginBottom: '5%'}}
        />
      </View>
      <SEoTopRanking data={locations} />
    </View>
  );
};
export default RankGoogleMap;
