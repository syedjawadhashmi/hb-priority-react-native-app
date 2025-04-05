import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import Input from '../../../common/Input';
import {useState} from 'react';
import CompanyProfile from '../../../core/CompanyProfile';
import CRMcompanyList from '../../../core/CRMcompanyList';

const Companies = (props:any) => {
  const{navigation}=props
  const [company, setCompany] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView  scrollEnabled={true} style={{flex:1}} >
        {company ? (
          <CompanyProfile onpress={()=>setCompany(false)} />
        ) : (
          <View>
            <Input
              IconStyle={{tintColor: COLOR.gray_9}}
              placeholder={'Search'}
            />

            <View style={styles.sattingContainer}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={Icon.Filters} style={styles.filter} />
              </TouchableOpacity>
              <View style={{...commonStyles.horizontalView}}>
                <TouchableOpacity
                  style={{
                    ...styles.NewStageBtn,
                    ...commonStyles.verticleView,
                    marginRight: 10,
                  }}>
                  <Image
                    source={Icon.Export}
                    style={{...styles.dropDown, tintColor: COLOR.white}}
                  />
                  <Text style={styles.btnText}>Export</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.NewStageBtn}}
                  onPress={() => setCompany(true)}>
                  <Text style={styles.btnText}>+ New Company</Text>
                </TouchableOpacity>
              </View>
            </View>
            <CRMcompanyList/>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Companies;
