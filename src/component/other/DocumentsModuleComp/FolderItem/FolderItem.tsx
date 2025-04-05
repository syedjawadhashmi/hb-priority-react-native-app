import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './FolderItemStyle';

interface FolderItemProps {
  folder: {
    id: string;
    name: string;
    icon: string;
  };
}

const FolderItem: React.FC<FolderItemProps> = ({ folder }) => (
  <TouchableOpacity style={styles.container}>
    {/* <Icon name={folder.icon} size={40} color="#5B2C6F" /> */}
    <Text style={styles.name}>{folder.name}</Text>
  </TouchableOpacity>
);

export default FolderItem;
