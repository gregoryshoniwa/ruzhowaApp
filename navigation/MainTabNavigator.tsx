/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Fontisto } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import StampScreen from '../screens/StampScreen';
import LinkScreen from '../screens/LinkScreen';
import SnapScreen from '../screens/SnapScreen';
import { MainTabParamList, SnapParamList, ChatParamList,StampParamList, LinkParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();
  
export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Coms"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor : Colors[colorScheme].tint,
        },
        indicatorStyle : {
          backgroundColor : Colors[colorScheme].background,
          height:4
        },
        labelStyle : {
          fontWeight:'bold'
        },
        showIcon:true,

        }}>
      {/* <MainTab.Screen
        name="Snap"
        component={SnapScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20}/>,
          tabBarLabel: () => null,
          
          
        }}
        
      /> */}
      <MainTab.Screen
        name="Coms"
        component={ChatScreen}
       
      />
      <MainTab.Screen
        name="Trade"
        component={StampScreen}
       
      />
      <MainTab.Screen
        name="Wallet"
        component={LinkScreen}
       
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab




const SnapStack = createStackNavigator<SnapParamList>();

function SnapNavigator() {
  return (
    <SnapStack.Navigator>
      <SnapStack.Screen
        name="SnapScreen"
        component={SnapScreen}
        options={{ headerTitle: 'Page One' }}
      />
    </SnapStack.Navigator>
  );
}

const ChatStack = createStackNavigator<ChatParamList>();

function ChatNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Page Two' }}
      /> 
    </ChatStack.Navigator>
  );
}

const StampStack = createStackNavigator<StampParamList>();

function StampNavigator() {
  return (
    <StampStack.Navigator>
      <StampStack.Screen
        name="StampScreen"
        component={StampScreen}
        options={{ headerTitle: 'Page One' }}
      />
    </StampStack.Navigator>
  );
}

const LinkStack = createStackNavigator<LinkParamList>();

function LinkNavigator() {
  return (
    <LinkStack.Navigator>
      <LinkStack.Screen
        name="LinkScreen"
        component={LinkScreen}
        options={{ headerTitle: 'Page Two' }}
      /> 
    </LinkStack.Navigator>
  );
}
