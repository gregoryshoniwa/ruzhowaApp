import { Entypo, Feather, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

const InputBox = () =>{
    const [message,setMessage] = useState('');

    const onMicrophonePress = () =>{
        console.warn('Microphone')
    }
    const onSendPress = () =>{
        console.warn(`Sending: ${message}`);

        //Send a message to the backend

        setMessage('');
    }
    const onPress = () =>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    } 
    return(
        <View style={styles.constainer}>
            <View  style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={25} color={'grey'} />
                <TextInput style={styles.textInput} multiline placeholder={'Type your message'} value={message} onChangeText={setMessage}/>
                <Entypo name="attachment" size={22} color={'grey'} style={styles.icons}/>
                {!message && <Fontisto name="camera" size={22} color={'grey'} style={styles.icons}/>}
                
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonConstainer}>
                    {!message 
                    ? <MaterialCommunityIcons name="microphone" size={30} color={'white'}/>
                    : <Feather name="send" size={28} color={'white'} />
                    }   
                </View>
            </TouchableOpacity>
           
        </View>
    )
}

export default InputBox;