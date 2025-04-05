import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {MessagePaymentProps} from '../../../../data/Types';
import {useState} from 'react';
import InvoiceTitle from '../../../core/InvoiceTitle';

const MessageTemplate = (prosp: MessagePaymentProps) => {
  const {visible, ofDropDown, close} = prosp;
  const [addTemp, setAddTemp] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [templates, setTemplates] = useState([
    {title: 'Thank You'},
    {title: 'Invoice Sent'},
    {title: 'Work Hours'},
    {title: 'Out Of Office'},
  ]);

  const addNewTemplate = () => {
    if (newTitle.trim()) {
      setTemplates([...templates, {title: newTitle.trim()}]);
      setNewTitle('');
      setAddTemp(false); // Reset back to list view after adding
    }
  };
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          {addTemp == false ? (
            <View style={{marginLeft: '10%'}}>
              <TouchableOpacity
                style={styles.buttonAddTemp}
                onPress={() => setAddTemp(true)}>
                <Text style={styles.btnTitle}>+ Add New Template</Text>
              </TouchableOpacity>
              <View style={styles.listContainer}>
                <FlatList

                showsVerticalScrollIndicator={false}
                  data={templates}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  onPress={close}  key={index} >
                      <Text
                        style={{
                          ...styles.btnTitle,
                          color: COLOR.gray_5,
                          marginVertical: '1.4%',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          ) : (
            <View>
              <InvoiceTitle
                onChange={(e: any) => setNewTitle(e)}
                title="Title"
                container={styles.textInput}
                titleStyle={styles.btnTitle}
              />
              <Text style={{...styles.btnTitle, marginLeft: '6%'}}>
                Message
              </Text>
              <TextInput
                style={styles.MessageInput}
                // onChangeText={setNewTitle}
              />
              <TouchableOpacity
                onPress={() => addNewTemplate()}
                style={styles.button}>
                <Text style={styles.btnText}>Add</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
export default MessageTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.blackBlur,
    justifyContent: 'flex-end',
  },
  modal: {
    width: '70%',
    backgroundColor: COLOR.whites,
    borderRadius: 20,
    borderColor: COLOR.perpal,
    borderWidth: 1,
    bottom: '6%',
    marginLeft: '5%',
  },
  buttonAddTemp: {
    ...commonStyles.horizontalView,
    marginTop: '10%',
    marginBottom: '5%',
  },
  listContainer: {height: 120},
  btnTitle: {fontSize: 13, fontWeight: '700', color: COLOR.perpal},
  textInput: {backgroundColor: COLOR.white1},
  MessageInput: {
    width: '90%',
    backgroundColor: COLOR.white1,
    height: 70,
    borderRadius: 10,
    marginLeft: '6%',
    textAlignVertical: 'top',
    padding: 10,
    color: COLOR.black,
  },
  button: {
    alignSelf: 'flex-end',
    width: '30%',
    borderRadius: 12,
    marginRight: '5%',
    marginTop: '10%',
    marginBottom: '3%',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
  },
  btnText: {fontSize: 12, fontWeight: '700', color: COLOR.whites},
  closebtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '3%'},
  closeICon: {width: 17, height: 17, resizeMode: 'contain'},
});
