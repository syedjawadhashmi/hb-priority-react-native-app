import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import DatePicker from '../../../core/DatePicker';
import {Icon} from '../../../../assest';
import {COLOR, commonStyles, width} from '../../../../themes/StyleGuides';
import ToggleSwitch from 'toggle-switch-react-native';
import {useState} from 'react';
import ImagesPicker from '../../../core/ImagesPicker';
import QuickInvoiceForm from '../../../core/QuickInvoiceForm';

const Items = [
  {
    title: 'Data 1',
  },
  {
    title: 'Data 2',
  },
  {
    title: 'Data 3',
  },
  {
    title: 'Data 4',
  },
  {
    title: 'Data 4',
  },
  {
    title: 'Data 4',
  },
  {
    title: 'Data 4',
  },
];
const QtyList = [
  {
    title: '1',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },
  {
    title: '5',
  },
  {
    title: '6',
  },
  {
    title: '7',
  },
];
const QuickInvoice = () => {
  const [togal, setTogal] = useState(false);
  const [check, setCheck] = useState(false);
  const [Discounts, setDiscount] = useState(false);
  const [percent, setPercent] = useState(false);
  const [items, setItems] = useState('');
  const [openItems, setOpenItems] = useState(false);
  const [openQty, setOpenQty] = useState(false);
  const [Note, setNote] = useState('');
  const [notificationEmails, setNotificationEmails] = useState('');
  const [qty, setQty] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <QuickInvoiceForm />

        <View style={styles.AmmountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Item List*</Text>
          </View>
          <View style={styles.itemListContainer}>
            <View>
              <Text style={styles.titleListText}>Item</Text>

              <TouchableOpacity
                style={styles.itemcontainer}
                onPress={() => setOpenItems(true)}>
                <Text style={styles.itmeDropDownText}>{items && items}</Text>
                <Image
                  source={Icon.DropDown}
                  tintColor={COLOR.gray_5}
                  style={styles.dropDown}
                />
              </TouchableOpacity>
            </View>

            {openItems && (
              <View style={styles.ItemDropDown}>
                <ScrollView nestedScrollEnabled={true}>
                  {Items.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setItems(item.title), setOpenItems(false);
                      }}>
                      <Text
                        style={{
                          ...styles.itmeDropDownText,
                          marginLeft: '3%',
                          marginTop: '3%',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
            <View>
              <Text style={styles.titleListText}>Qty</Text>

              <TouchableOpacity
                style={{...styles.itemcontainer, width: 50}}
                onPress={() => setOpenQty(true)}>
                <Text style={styles.itmeDropDownText}>{qty && qty}</Text>

                <Image
                  source={Icon.DropDown}
                  tintColor={COLOR.gray_5}
                  style={styles.dropDown}
                />
              </TouchableOpacity>
              {openQty && (
                <View style={{...styles.ItemDropDown, width: width * 0.13}}>
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={true}>
                    {QtyList.map((item, index) => (
                      <TouchableOpacity
                        style={{paddingHorizontal: '7%'}}
                        key={index}
                        onPress={() => {
                          setQty(item.title), setOpenQty(false);
                        }}>
                        <Text
                          style={{
                            ...styles.itmeDropDownText,
                            marginLeft: '3%',
                            marginTop: '3%',
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>
            <View>
              <Text style={styles.titleListText}>Unit Price</Text>

              <View style={{...styles.itemcontainer, width: 60}}>
                <TextInput  style={{flex:1,padding:0,fontSize:10,color:COLOR.black}}  />
              </View>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.DropDownBtn}
              onPress={() => setDiscount(Discounts ? false : true)}>
              <Text style={styles.DropDowntext}>+ Add Discount</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.DropDownBtn, backgroundColor: COLOR.primary}}>
              <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
                + Add Item
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.paymentList}>
            <Text style={styles.priceText}>Subtotal: $ 0.00</Text>
            <Text style={styles.priceText}>Add Discount: $ 0.00</Text>
            <Text style={styles.priceText}>Sales Tax: $ 0.00</Text>
            <Text style={styles.priceText}>Total: $ 0.00</Text>
          </View>
        </View>

        <View>
          <View style={{...styles.AmmountContainer}}>
            <View style={styles.togalContainer}>
              <Text style={styles.titletogal}>Additional Settings</Text>
              <ToggleSwitch
                isOn={togal}
                onColor={COLOR.primary}
                offColor={COLOR.whites}
                labelStyle={{color: 'black', fontWeight: '200'}}
                size="small"
                onToggle={isOn => {
                  setTogal(isOn);
                }}
              />
            </View>
            {togal && (
              <View>
                <View style={styles.checkBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      setCheck(check ? false : true);
                    }}>
                    <Image
                      tintColor={COLOR.primary}
                      style={styles.check}
                      source={check ? Icon.check : Icon.uncheck}
                    />
                  </TouchableOpacity>
                  <Text style={styles.checkText}>
                    Send periodic email reports about my review activity.
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.checkText,
                    marginLeft: '6%',
                    marginTop: '2%',
                    marginBottom: '5%',
                    fontWeight: '400',
                  }}>
                  Send notification to provided email and/or cell phone
                </Text>
                <DatePicker
                  title="Notify Before Due Date"
                  tintcolor={COLOR.whites}
                />
                <DatePicker
                  title="Notify After Due Date"
                  tintcolor={COLOR.whites}
                />
                <InvoiceTitle
                  title="Location Notification Emails"
                  onChange={(e: any) => setNotificationEmails(e)}
                />
                <InvoiceTitle title="Note" onChange={(e: any) => setNote(e)} />
                <Text style={styles.titleStyle}>Files</Text>
                <ImagesPicker />
                <Text style={styles.Discription}>
                  Maximum size of 5MB per file. | Maximum of 4 files can be
                  attached to a Quick Invoice.
                </Text>

                <View
                  style={{
                    ...styles.btnContainer,
                    marginBottom: '10%',
                    marginTop: '7%',
                  }}>
                  <TouchableOpacity
                    style={{
                      ...styles.DropDownBtn,
                      backgroundColor: COLOR.primary,
                      paddingHorizontal: '6%',
                    }}>
                    <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
                      Save
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      ...styles.DropDownBtn,
                      backgroundColor: COLOR.red,
                      paddingHorizontal: '5%',
                    }}>
                    <Text style={styles.DropDowntext}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={{
            ...styles.DropDownBtn,
            backgroundColor: COLOR.primary,
            paddingHorizontal: '5%',
            marginBottom: '20%',
            marginRight: '5%',
          }}>
          <Text style={{...styles.DropDowntext, color: COLOR.gray_5}}>
            Send
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {Discounts && (
        <View style={styles.DiscountModal}>
          <Text style={styles.DiscountTitle}>Discount</Text>

          <View style={{...commonStyles.verticleView, paddingHorizontal: '2%'}}>
            <TextInput
              style={styles.ApplyEarlyText}
              placeholder="Apply an early payment incentive"
              placeholderTextColor={COLOR.gray_5}
            />
            <TextInput style={styles.Discount} />

            <View style={styles.selectBtn}>
              <TouchableOpacity
                onPress={() => setPercent(false)}
                style={{
                  flex: 1,
                  height: 35,
                  ...commonStyles.center,
                  backgroundColor: percent ? COLOR.whites : COLOR.perpal_3,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '900',
                    color: percent ? COLOR.perpal_3 : COLOR.whites,
                  }}>
                  Dollars
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPercent(true)}
                style={{
                  flex: 1,
                  backgroundColor: percent ? COLOR.perpal_3 : COLOR.whites,
                  height: 35,
                  ...commonStyles.center,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '900',
                    color: percent ? COLOR.whites : COLOR.perpal_3,
                  }}>
                  Percent
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default QuickInvoice;
