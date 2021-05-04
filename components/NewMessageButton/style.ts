import { StyleSheet } from 'react-native';
//import randomColor from "randomcolor";
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    constainer:{
        backgroundColor:Colors.light.tint,
        width:60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        //position:'absolute',
        bottom:20
    },
    image:{
        width:55,
        height:55
    }
   
});

export default styles;