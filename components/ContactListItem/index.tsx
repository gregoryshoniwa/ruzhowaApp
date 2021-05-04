import moment from 'moment';
import React from 'react';
import { View,Text,Image,TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import styles from './style'

import { useNavigation } from '@react-navigation/native'

export type ContactListItemProps = {
    user:User;
}


const ContactListItem = (props:ContactListItemProps) => {
    const { user } = props;
    const navigation = useNavigation();
   
    const onClick = () =>{
        //navigate to chat room with this users
    }

    return( 
        <TouchableWithoutFeedback onPress={onClick}>

       
        <View style={styles.constainer} >
            <View style={styles.leftContainer}>
                <Image source={{ uri : user.imageUri}} style={styles.avatar} />  
            </View>
            <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1}>{user.status}</Text>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ContactListItem;