import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import { useState } from 'react';
import DropDown from '../../../core/DropDown';
import { Dropdata } from '../../../../data/DummayData';
import { Icon } from '../../../../assest';

const GeneralSettings = () => {
  const [openlocationReport, setOpenlocationReport] = useState(false);
  const [openlocationReportModal, setOpenlocationReportModal] = useState(false);
  const [locationReport, setlocationReport] = useState(null);
  const [openReport, setOpenReport] = useState(false);
  const [report, setReport] = useState(null);
  const [reportModal, setReportModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [ProfileModal, setProfileModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [openRun, setOpenRun] = useState(false);
  const [run, setRun] = useState(null);


  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>General Settings</Text>
        </View>

        <DropDown
        titleIConOnPress={()=>setOpenlocationReportModal(openlocationReportModal?false:true)}
        titleICon={Icon.Error}
          isOpen={openlocationReport}
          toggleDropdown={() =>
            setOpenlocationReport(openlocationReport ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setlocationReport(e)}
          selectedOption={locationReport}
          title={'Which Location is this report for?*'}
          LearnMoreIndex={openlocationReportModal}
        />

        <View style={styles.checkBtn}>
          <TouchableOpacity
            onPress={() => {
              setCheck(check ? false : true);
            }}>
            <Image
              style={styles.check}
              source={check ? Icon.check_1 : Icon.uncheck_1}
            />
          </TouchableOpacity>
          <Text style={styles.checkText}>
            Enable a white-label version of this report?
          </Text>
        </View>
        <DropDown
          isOpen={openReport}
          toggleDropdown={() =>
            setOpenReport(openReport ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setReport(e)}
          selectedOption={report?report:"Weekly"}
          title={'How often do you want this report to run?*'}
          titleICon={Icon.Error}
          titleIConOnPress={()=>setReportModal(reportModal?false:true)}
          LearnMoreIndex={reportModal}
          DropDownContaianer={{zIndex:1000}}



        />
       <DropDown
          isOpen={openProfile}
          toggleDropdown={() =>
            setOpenProfile(openProfile ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setProfile(e)}
          selectedOption={profile}
          title={'Choose a white-label profile*'}
          titleICon={Icon.Error}
          titleIConOnPress={()=>setProfileModal(ProfileModal?false:true)}
          LearnMoreIndex={ProfileModal}
          DropDownContaianer={{zIndex:1000}}

        />
        <DropDown
          isOpen={openRun}
          toggleDropdown={() =>
            setOpenRun(openRun ? false : true)
          }
          options={Dropdata}
          onSelect={(e: any) => setRun(e)}
          selectedOption={run?run:"Friday"}
          title={'Run Every*'}
          container={{marginBottom:"5%",zIndex:999}}
          DropDownContaianer={{zIndex:1000}}

        />
      </View>
    </View>
  );
};
export default GeneralSettings;
