import { StyleSheet } from 'react-native';
import { COLOR } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    color: COLOR.lightBlack,
    marginBottom: 15,
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 18,
    color: '#999',
  },
  stepIndicator: {
    flexDirection: 'row',
    width:'100%',
    position:'relative',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:20
    
  },
  stepIndicatorTitle: {
    flexDirection: 'row',
    width:'100%',
    position:'relative',
    justifyContent:'space-between',
    alignItems:'center', 
  },
  stepLine:{
    width: '90%',
    height: 2,
    position:'absolute',
    backgroundColor: '#CCC',
    marginHorizontal: 8,
  },
  stepCircle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    position:'absolute',
    zIndex:1,
    backgroundColor:'white'
  },

  stepCircle1:{
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    position:'absolute',
    right:0,
    zIndex:1,
    backgroundColor:'#FFF'
  },
  activeStep: {
    borderColor: COLOR.perpal,
    backgroundColor: COLOR.perpal,
  },
  stepText: {
    fontWeight: 'bold',
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection:'column',
    // width:'100%',
    borderRadius:25,
    // overflow:'hidden'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
    color: COLOR.perpal
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:'900'
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  link: {
    color: COLOR.lightBlack,
    textAlign:'center',
    fontWeight:"400",
    width:"72%"
  },
  fileName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  removeFile: {
    color: COLOR.perpal,
  },
  errorText: {
    fontSize: 14,
    color: '#F44336',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backText: {
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  nextButton: {
    backgroundColor: '#40f440',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    fontWeight: '900',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  startImportButton: {
    backgroundColor: COLOR.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    // marginRight: 5,
  },
  startImportText: {
    fontWeight: "900",
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ba0416',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
  cancelText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uploadedFileContainer: {
    width: '100%',
    height:150,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    marginTop:20,
    overflow:'hidden',
    alignItems:'center'
  },
  fileDetails: {
    flexDirection: 'row',
    width:'100%',
    backgroundColor:'#e0e0e0',
    height:50,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:5
  },
  successIconContainer: {
    // width: 32,
    height: '50%',
    borderRadius: 16,
    display:'flex',
    marginTop:25
  },
  successIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helperText: {
    color:COLOR.gray_5,
    fontSize: 10,
    marginTop: 10,
    fontWeight:"900",
    textAlign: 'center',
  },
  linkText: {
    color: '#8B5CF6',
    textDecorationLine: 'underline',
  },
  stepContainers: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  readyContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 24,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: '#6B7280',
  },
  readyTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: COLOR.perpal,
    marginBottom: 5,
  },
});

export default styles;
