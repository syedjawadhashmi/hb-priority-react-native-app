import {ReactNode} from 'react';
import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProp {
  onpress?: () => void;
  title?: string;
  container?: any;
  titles?: any;
  tint?: any;
  backGroundColor?: any;
}

export interface HeaderProp {
  firstIcon?: any;
  title?: string;
  secodIcon?: any;
  backonpress?: () => void;
  onpesDrawer?: () => void;
}

export interface TextInputProp {
  placeHolder?: string;
  icon?: any;
  SecureTextEntry?: boolean;
  onpress?: () => void;
  onChaneText?: any;
  keyBoard?: any;
  lenght?: number;
  styley?: any;
  title?: any;
}

export interface HistoryCompProp {
  title?: string;
  date?: any;
  container?: any;
  isLastItem?: any;
}

export interface inputProps {
  placeholder?: any;
  keyboardType?: KeyboardTypeOptions;
  onChange?: Function;
  value?: any;
  addLeft?: ReactNode;
  addRight?: any;
  style?: ViewStyle;
  secureText?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  textStyle?: TextStyle;
  placeholderColor?: string;
  multiline?: boolean;
  onRightPress?: () => void;
  onSubmitEditing?: () => void;
  textAlignVertical?: any;
  title?: string;
  hide?: boolean;
  borderStyle?: any;
  Icons?: any;
  IconStyle?: any;
  IconOnpress?: () => void;
  defaultValue?: any;
  container?: any;
}

export interface SheetPropsSucess {
  refs?: any;
  onPressNavigate?: () => void;
  item?: any;
  onpressBack?: () => void;
  navigation?: any;
}

export interface inboxListProp {
  time?: any;
  name?: string;
  discription?: string;
  title?: string;
  onpress?: () => void;
  tintcolor?: any;
  select?: any;
  to?:string
}
export interface inboxProp {
  onpress?: () => void;
  onpressLogin?: () => void;
}
export interface CodeProp {
  onpress?: any;
}

export interface ChatListprop {
  item?: any;
  index?: any;
  MesgData?: any;
}

export interface HomelistProps {
  item?: any;
  onpress?: () => void;
  index?: number;
  select?: any;
  openModal?: () => void;
  isOpenModal?: any;
  selectStatus?: any;
  isSelected?: any;
  onLongPress?: any;
  selectionMode?: boolean;
}

export interface AllCallProp {
  navigation?: any;
}

export interface TransSactionListProp {
  name?: string;
  price?: any;
  Id?: any;
  onpress?: () => void;
}

export interface LocationFieldProp {
  title?: string;
  item?: any;
  style?: any;
  onpress?: () => void;
  Icon?: any;
  container?: ViewStyle;
  keyBoardtype?: KeyboardTypeOptions;
  defaultValue?: any;
  titleStyle?: any;
  onChange?: any;
  placeholder?: any;
  IconStyle?: any;
  showErrorIcon?: any;
  maxLength?: any;
  showErrorText?: any;
  tintcolor?: any;
  Icons?:any
}

export interface LocationProps {
  open: boolean;
  value: any;
  items: any;
  setOpen: any;
  setValue: any;
  setItems: any;
  style?: ViewStyle;
  placeholder?: string;
  dropDownDirection?: any;
  placeholderStyle?: any;
}

export interface DropDownProps {
  options?: any;
  isOpen?: any;
  toggleDropdown?: any;
  onSelect?: any;
  selectedOption?: any;
  placeText?: any;
  title?: any;
  container?: ViewStyle;
  placeHolder?: any;
  DropDownContaianer?: any;
  titleICon?: any;
  titleIConOnPress?: () => void;
  LearnMoreIndex?: any;
  firstIcon?: any;
}

export interface CRMDealsListProps {
  data?: any;
  title?: any;
  container?: any;
}

export interface CRMcontactListProps {
  name?: string;
  status?: any;
  activetime?: any;
  Icons?: any;
  index?: any;
  onpress?: any;
}

export interface Buttonprops {
  onpress?: () => void;
  title?: any;
  container?: any;
  titleStyle?: any;
}

export interface OnBordingModalDFT {
  visible?: any;
  onpress?: () => void;
}

export interface InboxFilterModalProps {
  visible?: boolean;
  onpress?: () => void;
  saveFilter?: () => void;
  getData?:any;
  selector?:any
}

export interface DropDownButtonProps {
  onpress?: () => void;
  title?: any;
  onpressSource?: () => void;
}

export interface MessagePaymentProps {
  visible?: any;
  ofDropDown?: () => void;
  close?: () => void;
}

export interface getReviewProps {
  data?: any;
  navigation?: any;
}

export interface ReviewDropDownProps {
  icons?: any;
  Data?: any;
  Onpress?: () => void;
  selector?: any;
  isOpen?: any;
  isOff?: () => void;
}

export interface ReputationModalType {
  visible?: any;
  onpress?: () => void;
  onpressOfModal?: () => void;
  title?: string;
  data?: any;
}

export interface RankGoogleMapProps {
  keywords?: any;
  locations?: any;
  reports?: any;
}

export interface Location {
  position: number;
  title: string;
  place_id: string;
  gps_coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  searchContexts: {
    searchLatitude: number;
    searchLongitude: number;
    position: number;
    distance: number;
    direction: string;
    missing?: boolean;
    title: string;
  }[];
  reviews: number;
  rating: number;
  type: string;
  types: string[];
}

export interface Context {
  searchLatitude: number;
  searchLongitude: number;
  position: number;
  distance: number;
  direction: string;
  missing?: boolean;
  title: string;
}

export interface AveragePositions {
  [placeId: string]: {
    averagePosition: number;
    title: string;
    reviews: number;
    rating: number;
    type: string;
    types: string[];
  };
}

export interface Report {
  id: string;
  user: {id: string};
  date: string;
  keyword: string;
  locations: [Location];
}

export interface UpdatePaymentModal {
  close?: () => void;
  visible?: any;
  save?: () => void;
}

export interface PaymentsGeneralSettingProp {
  navigation?: any;
  onpress?: () => void;
}

export interface PaidCampaignsListProps {
  data?: any;
  title_1?: string;
  title_2?: string;
  title_3?: string;
  title_4?: string;
}

export interface ColorickerProps {
  isoPen?: any;
  onpres?: () => void;
  color?: any;
  selectColor?: any;
  close?: () => void;
}

export interface FAQsProps {
  onpress?: () => void;
  navigation?: any;
}

export interface UseCaseSelectionProps {
  Next?: () => void;
  Previous?: () => void;
}


export interface ReviewSiteProps{

  navigation?:any,
  isopen?:()=>void,
  visible?:any,
  Continue?:()=>void
}