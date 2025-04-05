import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import { Icon } from '../../../assest';
import SCREEN from '../../../data/ScrName';
import { COLOR } from '../../../themes/StyleGuides';


const DialNumber = (props:any) => {
  const {navigation}=props
  const [add, setAdd] = useState("");
  const handlePress = (value:any) => {
    setAdd((prevNumber) => prevNumber + value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.fistContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.SaveNumber)} >
        <Image source={Icon.userAdd} style={styles.userAdd} />
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputStyle}>{add}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("1")} >
            <Text style={styles.btnText}>1</Text>
            <Image source={Icon.ButtonSymbol} style={styles.Symbol} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("2")}>
            <Text style={styles.btnText}>2</Text>
            <Text style={styles.text}>abc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("3")}>
            <Text style={styles.btnText}>3</Text>
            <Text style={styles.text}>def</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("4")}>
            <Text style={styles.btnText}>4</Text>
            <Text style={styles.text}>ghi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("5")}>
            <Text style={styles.btnText}>5</Text>
            <Text style={styles.text}>jkl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("6")}>
            <Text style={styles.btnText}>6</Text>
            <Text style={styles.text}>mno</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("7")}>
            <Text style={styles.btnText}>7</Text>
            <Text style={styles.text}>pqrs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("8")}>
            <Text style={styles.btnText}>8</Text>
            <Text style={styles.text}>tuv</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("9")}>
            <Text style={styles.btnText}>9</Text>
            <Text style={styles.text}>wxyz</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("*")}>
            <Text style={{...styles.btnText, fontSize: 40, top: 4}}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("0")}>
            <Text style={styles.btnText}>0</Text>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>handlePress("#")}>
            <Text style={styles.btnText}>#</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        // onPress={()=>setAdd("1")}
          style={{
            ...styles.buttonStyle,
            backgroundColor: COLOR.primary,
            alignSelf: 'center',
          }}>
          <Image source={Icon.phone3} style={styles.phone} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DialNumber;
