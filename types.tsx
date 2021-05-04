/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom:undefined;
  Contacts:undefined;
};

export type MainTabParamList = {
  Snap: undefined;
  Coms: undefined;
  Links: undefined;
  Stamps: undefined;
  Trade:undefined;
  Account:undefined;
};

export type SnapParamList = {
  SnapScreen: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type StampParamList = {
  StampScreen: undefined;
};

export type LinkParamList = {
  LinkScreen: undefined;
};

export type User = {
  id:String;
  name:String;
  imageUri:String;
  status:String;
};

export type Message = {
  id:String;
  content:string;
  createdAt:number;
  user:User;

};

export type ChatRoom = {
  id: String;
  users:User[];
  lastMessage:Message;
};
