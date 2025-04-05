import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {COLOR} from '../../../themes/StyleGuides';
import React, {useState} from 'react';
import {calculateGeoChanges} from '../../../utils/geoCalculations';
import {BaererTokenssApi} from '../../../utils/TokenssApi';
import RankGoogleMap from '../../../component/other/SEOcom/RankGoogleMap';

interface Location {
  position: number;
  title: string;
  place_id: string;
  gps_coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  searchContexts: SearchContext[];
  reviews: number;
  rating: number;
  type: string;
  types: string[];
}
interface SearchContext {
  searchLatitude: number;
  searchLongitude: number;
  position: number;
  distance: number;
  direction: string;
  missing?: boolean;
  title: string;
}

interface Report {
  id: string;
  user: {id: string};
  date: string;
  keyword: string;
  locations: [Location];
}
const apiUrl = 'http://192.168.100.9:3000/api/serpapi/query';
const Rankings = (props: any) => {
  const {navigation} = props;
  const [inputKeyword, setInputKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchKeywords, setSearchKeywords] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [results, setResults] = useState<Location[][]>([]);
  const [allReports, setAllReports] = useState<Report[]>([]);
  const fetchData = async (keyword: any, distance: any, direction: any) => {
    const originalLatitude = 42.890803;
    const originalLongitude = -78.876239;
    const {deltaLat, deltaLon} = calculateGeoChanges(
      distance,
      originalLatitude,
    );
    const directionParts = direction.split(',').map(Number);
    let latitude = originalLatitude + deltaLat * directionParts[1];
    let longitude = originalLongitude + deltaLon * directionParts[0];
    const response = await fetch(
      `http://192.168.100.9:3000/api/serpapi/googleMapsSearch?q=${encodeURIComponent(
        keyword,
      )}&ll=@${latitude},${longitude},15.1z`,
      {
        method: 'GET', // Use 'POST' if required
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return (
      data.map((result: any) => ({
        ...result,
        searchContexts: [
          {
            searchLatitude: latitude,
            searchLongitude: longitude,
            position: result.position,
            distance,
            direction,
          },
        ],
      })) || []
    );
  };
  const adjustCoordinates = (
    latitude: number,
    longitude: number,
    deltaLat: number,
    deltaLon: number,
    direction: string,
  ) => {
    const directionParts = direction.split(',').map(Number);
    const adjustedLat = latitude + deltaLat * directionParts[1];
    const adjustedLon = longitude + deltaLon * directionParts[0];
    return {adjustedLat, adjustedLon};
  };
  const performSearches = async () => {
    if (searchKeywords.length === 0) return;
    setHasSearched(true);
    setIsLoading(true);
    try {
      const allResults = [];
      for (const keyword of searchKeywords) {
        const directions = [
          {x: -2, y: -2},
          {x: -1, y: -2},
          {x: 0, y: -2},
          {x: 1, y: -2},
          {x: 2, y: -2},
        ];
        const distance = 1;
        const searchPromises = directions.map(direction =>
          fetchData(keyword, distance, `${direction.x},${direction.y}`),
        );
        const results = await Promise.all(searchPromises);
        const combinedResults = results.flat();
        const combinedSearchContextsMap = new Map();
        combinedResults.forEach(result => {
          const key = `${result.place_id}-${result.distance}-${result.direction}`;
          if (!combinedSearchContextsMap.has(key)) {
            combinedSearchContextsMap.set(key, {
              ...result,
              searchContexts: [],
              keyword,
            });
          }
          const existingEntry = combinedSearchContextsMap.get(key);
          existingEntry.searchContexts.push(...result.searchContexts);
        });
        combinedSearchContextsMap.forEach((entry, _) => {
          directions.forEach(direction => {
            const key = `${distance}-${direction.x},${direction.y}`;
            if (
              !entry.searchContexts.some(
                (context: SearchContext) =>
                  `${context.distance}-${context.direction}` === key,
              )
            ) {
              const {deltaLat, deltaLon} = calculateGeoChanges(
                distance,
                42.890803,
              );
              const {adjustedLat, adjustedLon} = adjustCoordinates(
                42.890803,
                -78.876239,
                deltaLat,
                deltaLon,
                `${direction.x},${direction.y}`,
              );
              entry.searchContexts.push({
                searchLatitude: adjustedLat,
                searchLongitude: adjustedLon,
                position: 21,
                distance: distance,
                direction: `${direction.x},${direction.y}`,
                missing: true, 
              });
            }
          });
        });
        allResults.push(Array.from(combinedSearchContextsMap.values()));
      }

      setResults(allResults);
      const queryResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${BaererTokenssApi}`, // Use Bearer token here
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userIds: ['0xfffd8d729991588d']}), // Corrected Body
      });

      const reports = await queryResponse.json();
      setAllReports(reports);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    performSearches().then();
  };
  const addKeyword = () => {
    if (inputKeyword.trim() !== '') {
      setSearchKeywords([...searchKeywords, inputKeyword]);
      setInputKeyword(''); 
    }
  };

  const removeKeyword = (index: number) => {
    setSearchKeywords(searchKeywords.filter((_, idx) => idx !== index));
  };
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="SEO"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <Text
          style={{
            ...styles.TitleText,
            marginTop: isLandscape ? '2%' : '10%',
            marginBottom: isLandscape ? '1%' : '10%',
          }}>
          Rankings
        </Text>
        <View>
          {!isLoading && hasSearched && (
            <RankGoogleMap
              keywords={searchKeywords}
              locations={results}
              reports={allReports}
            />
          )}
        </View>
        <Text style={{...styles.InputTitle,marginTop:isLandscape?"3%":"15%"}}>Target Keyword</Text>
        <View style={styles.btnAndTextInput}>
          <TextInput
            style={styles.Textinputs}
            value={inputKeyword}
            onChangeText={setInputKeyword}
            placeholder="Enter a keyword"
          />
          <TouchableOpacity
            onPress={addKeyword}
            style={{...styles.firstbtn, backgroundColor: COLOR.primary}}>
            <Text style={{...styles.btnText, color: COLOR.gray_5}}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: '70%', alignSelf: 'center', marginTop: '5%'}}>
          <FlatList
            numColumns={4}
            data={searchKeywords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.keywordItem}>
                <Text style={styles.keywordText}>{item}</Text>
                <TouchableOpacity onPress={() => removeKeyword(index)}>
                  <Text style={styles.keywordText}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            ...styles.firstbtn,
            backgroundColor: COLOR.perpal,
            alignSelf: 'center',
            borderRadius: 12,
            marginTop: isLandscape?"2%":'25%',
            marginBottom: '20%',
          }}
          onPress={() => handleSearchSubmit()}
          
          >
          <Text style={{...styles.btnText, color: COLOR.whites, fontSize: 18}}>
            Run Report
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default Rankings;
