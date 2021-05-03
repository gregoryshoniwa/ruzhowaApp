import { StyleSheet } from 'react-native';
//import randomColor from "randomcolor";
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        margin:10,
        alignItems:'flex-end'
    },
    mainContainer:{
        flexDirection:'row',  
        backgroundColor:'white',
        padding:10,
        marginRight:10,
        borderRadius:25,
        flex:1,
        alignItems:'flex-end'
        
    },
    buttonConstainer:{
        backgroundColor:Colors.light.tint,
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
        alignItems:'flex-end',
        maxHeight:100,
        paddingBottom:5
        
    }, 
    icons:{
        marginHorizontal:7, 
        
    }
});

export default styles;