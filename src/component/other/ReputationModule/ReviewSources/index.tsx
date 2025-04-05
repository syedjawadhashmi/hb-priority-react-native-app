import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {
  UIActivityIndicator,
} from 'react-native-indicators';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {useState} from 'react';
import {Dropdata, EmailAlertsData, ReviewSourcesData} from '../../../../data/DummayData';
import DropDown from '../../../core/DropDown';
import {DropDownButtonProps} from '../../../../data/Types';
const ReviewSources = (props: DropDownButtonProps) => {
  const {onpress,onpressSource} = props;
  const [openReport, setOpenReport] = useState(false);
  const [report, setReport] = useState(null);
  const [check, setCheck] = useState([]); 
  const [selectAll, setSelectAll] = useState(false); 


  const toggleSelectAll = () => {
    if (selectAll) {
      setCheck([]); 
    } else {
      setCheck(ReviewSourcesData.map((_, index) => index)); 
    }
    setSelectAll(!selectAll); 
  };

  const toggleIndividualCheck = (index) => {
    if (check.includes(index)) {
      setCheck(check.filter((i) => i !== index)); 
    } else {
      setCheck([...check, index]); 
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Review Sources</Text>
        </View>
        <Text style={styles.discription}>
          Using the checkboxes below, select the review sources you want to
          track. Once selected, click ‘Find My Listings’ to begin a real-time
          search for your business listings on these review sources. Your
          listings will then be displayed for you to modify should you need to.
          If no listing was found, you can add a new listing.
        </Text>
        <View style={styles.indecatorContainer}>
          <UIActivityIndicator color={COLOR.gray_5} size={20} />
          <Text style={styles.indecatorText}>
            We’re looking for your business listing on these review\ sources....
          </Text>
        </View>
        {/* CardTable  */}

        <View style={styles.CardTable}>
          <View style={styles.CardStatusBar}>
            <View style={styles.checkBtn}>
              <TouchableOpacity
                onPress={toggleSelectAll}>
                <Image
                  tintColor={COLOR.SkyBlue}
                  style={styles.check}
                  source={selectAll ? Icon.check : Icon.uncheck}
                  />
              </TouchableOpacity>
            </View>
            <View style={{width: '90%', ...commonStyles.verticleView}}>
              <Text style={styles.StatusText}>Source</Text>
              <Text style={styles.StatusText}>Listings</Text>
              <Text style={styles.StatusText}>Actions</Text>
            </View>
          </View>

          <View>
            {ReviewSourcesData.map((item, index) => (
              <View>
                <View
                  style={{
                    ...styles.CardListContainer,
                    backgroundColor:
                      index % 2 === 0 ? COLOR.white1 : COLOR.whites,
                  }}>
                  <View style={styles.checkBtn}>
                    <TouchableOpacity
                    onPress={() => toggleIndividualCheck(index)}>
                      <Image
                        style={styles.check}
                        source={check.includes(index) ? Icon.check_1 : Icon.uncheck_1}
                        />
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '93%', ...commonStyles.verticleView}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 73,
                        alignItems: 'center',
                      }}>
                      <Image source={item.images} style={styles.listImage} />
                      <Text style={styles.Soursetext}>{item.sourse}</Text>
                    </View>
                    <View
                      style={{width: '40%', ...commonStyles.horizontalView}}>
                      <Text
                        style={{
                          ...styles.Listtext,
                          color:
                            item.ListingType == 'notfind'
                              ? COLOR.mhroon_2
                              : COLOR.gray_5,
                        }}>
                        {item.Listing}
                      </Text>
                      {item.ListingType == 'findlisting' && (
                        <View style={{alignSelf:"flex-end",marginTop:"5%"}} >
                        <UIActivityIndicator color={COLOR.gray_5} size={15} style={{}} />
                        </View>
                      )}
                    </View>
                    <TouchableOpacity
                      style={{
                        ...styles.AddBtn,
                        backgroundColor:
                          index == 4 || index == 7
                            ? COLOR.perpal_3
                            : COLOR.gray_7,
                      }}
                      
                     onPress={()=>onpressSource(item.sourse)} 
                      >
                      <Image
                        source={ index == 4 || index == 7 ? Icon.pen : Icon.plus}
                        style={{
                          width: 10,
                          height: 10,
                          resizeMode: 'contain',
                          tintColor:
                            index == 4 || index == 7
                              ? COLOR.whites
                              : COLOR.gray_5,
                        }}
                      
                      
                      />
                      <Text
                        style={{
                          ...styles.ActionText,
                          color:
                            index == 4 || index == 7
                              ? COLOR.whites
                              : COLOR.gray_5,
                        }}>
                    {   index == 4 || index == 7?"Edit":   "Add"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.ListingBtn}>
          <Text style={styles.ListBtnText}>Find My Listings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Email Alerts</Text>
        </View>
        <Text style={{...styles.discription, marginTop: '5%'}}>
          We can send you an email alert when your report is completed. We can
          also send you an alert with details of any new reviews you have
          received.
        </Text>
        <DropDown
        DropDownContaianer={styles.DropContainer}
          isOpen={openReport}
          toggleDropdown={() => setOpenReport(openReport ? false : true)}
          options={EmailAlertsData}
          onSelect={(e: any) => setReport(e)}
          selectedOption={report}
          title={'Receive an email when this report is completed?'}
        />
        <Text style={styles.commentTitle}>Enter your email address(es):</Text>
        <TextInput style={styles.CommentTextInput} />
        <Text style={styles.EmailAddress}>
          Enter 1 email address per line: max 5 email addresses
        </Text>
      </View>
      <View style={{...commonStyles.horizontalView, alignSelf: 'flex-end'}}>
        <TouchableOpacity style={styles.ListingBtn} onPress={onpress} >
          <Text style={styles.ListBtnText}>Run Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.ListingBtn, backgroundColor: COLOR.red}}>
          <Text style={{...styles.ListBtnText, color: COLOR.white}}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ReviewSources;
