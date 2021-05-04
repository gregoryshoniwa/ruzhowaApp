import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, View,Image } from 'react-native';
import styles from './style';

const NewMessageButton  = () =>{

    const navigation = useNavigation();

    const onPress = () =>{
        navigation.navigate('Contacts');
    }
    return(
        <TouchableOpacity onPress={onPress}>
             <View style={styles.constainer}>
                <Image style={styles.image} source={require("../../assets/images/logo.png")}/>
                {/* <MaterialCommunityIcons name="message-reply-text" size={28} color={'white'} /> */}
            </View>
        </TouchableOpacity>
       
        
    )
}
export default NewMessageButton;