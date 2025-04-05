import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './FileItemStyle';
import { Icon } from '../../../../assest';
interface FileItemProps {
  file: {
    id: string;
    name: string;
    type: string;
  };
  deleteFile: (id: string) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, deleteFile }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
    {/* <DocumentIcon/> */}
    <Image source={Icon.Docoment} style={styles.docIcon} />
      <Text style={styles.name}>{file.name}.{file.type}</Text>
    </View>
    
    <View style={{ flexDirection: 'row', gap: 10 }}>
      
      <Pressable
        onPress={() => console.log('Download file')}
        style={{ padding: 2, borderRadius: 6, backgroundColor: 'white' }}
      >
        <Image source={Icon.DownloadArrow} style={{width:20,height:20,resizeMode:"center"}} />
        </Pressable>
      <Pressable
        onPress={() => deleteFile(file.id)}
        style={{ padding: 2, borderRadius: 6, backgroundColor: 'white' }}
      >
        <Image source={Icon.Delete} style={{width:20,height:20,resizeMode:"center"}} />
      </Pressable>
    </View>
  </View>
);


export default FileItem;
