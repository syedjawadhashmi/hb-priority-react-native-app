import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../../../themes/StyleGuides';
import {useState} from 'react';
import DesignPreset from '../DesignPreset';
import Layout from '../Layout';
import ContainerReputation from '../ContainerReputation';
import TextReputation from '../TextReputation';
import ReviewsReputation from '../ReviewsReputation';
import AnimationReputation from '../AnimationReputation';



interface EditProps{
  designmode?:Function,
  layoutShow?:Function,
  BackgroundColor?:Function,
  TextStyleData?:Function
  ReviewsData?:Function,
  AnimationData?:Function
}

const EditReputation = (props:EditProps) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const{designmode,layoutShow,BackgroundColor,TextStyleData,ReviewsData,AnimationData}=props
  const data = [
    { title: 'Design Preset', component: <DesignPreset designMode={(e:any)=>designmode(e)} /> },
    { title: 'Layout', component: <Layout layoutShow={(e:any)=>layoutShow(e)} /> },
    { title: 'Container', component: <ContainerReputation BackgroundColor={(e:any)=>BackgroundColor(e)} /> }, 
    { title: 'Text', component: <TextReputation TextStyleData={(e:any)=>TextStyleData(e)} /> }, 
    { title: 'Reviews', component: <ReviewsReputation ReviewsData={(e:any)=>ReviewsData(e)} /> }, 
    { title: 'Animation', component: <AnimationReputation AnimationData={(e:any)=>AnimationData(e)}   /> },
    
  ];
  return (
    <View style={styles.container}>

      
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={{backgroundColor: COLOR.white1,}}>
            <TouchableOpacity
              style={{...styles.ListContainer}}
              onPress={() => setSelectedIndex(selectedIndex === index ? null : index)}>
              <Text style={{fontSize: 16, fontWeight: '800', color: COLOR.whites}}>
                {item.title}
              </Text>
            </TouchableOpacity>

            {/* Show the component if the item is selected */}
            {selectedIndex === index && item.component}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default EditReputation;

const styles = StyleSheet.create({
  container: { backgroundColor: COLOR.whites,flex:1 },
  ListContainer: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: COLOR.perpal,
    alignSelf: 'center',
    marginBottom: '4%',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
});
