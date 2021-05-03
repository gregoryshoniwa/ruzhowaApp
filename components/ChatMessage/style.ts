import { StyleSheet } from 'react-native';
import randomColor from "randomcolor";
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    constainer:{
        padding:10
    },
    messageBox:{
        
        borderRadius:5,
        padding:10
        
    },
    name:{
        color:Colors.light.tint,
        fontWeight:'bold',
        marginBottom:5
        
    },
    message:{
        
     
    },
    time:{
      alignSelf:'flex-end',
      color:'grey'
        
    }
});

export default styles;