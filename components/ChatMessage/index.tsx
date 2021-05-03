import React from 'react'
import { Text,View } from 'react-native'
import { Message } from '../../types'
import moment from 'moment';
import styles from '../ChatMessage/style';
export type ChatMessageProps = {
    message:Message;
}
const ChatMessage  = (props:ChatMessageProps) =>{
    const { message } = props; 
    const isMyMessage = () =>{
        return message.user.id === 'u1';
    }
    return(
        <View style={styles.constainer}>
            <View style={[
                styles.messageBox,
                {
                    backgroundColor : isMyMessage() ? '#E3F2FD' : 'white',
                    marginRight : isMyMessage() ? 50 : 0,
                    marginLeft : isMyMessage() ? 0 : 50,
                    
                }
                ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
           
        </View>
        
    )
}
export default ChatMessage;