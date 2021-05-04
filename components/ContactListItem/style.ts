import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10
    },
    leftContainer:{
        flexDirection :'row'
    },
    midContainer:{
        flexDirection :'column',
        paddingTop:7,
        width: '100%',
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:50,
        marginRight:15, 
    },
    username:{
        fontWeight:'bold',
        fontSize:16,
        paddingBottom:5
    }
    
});

export default styles;