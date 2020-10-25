import vh from '../../Units/vh';
import vw from '../../Units/vw';
import {TransitionPresets} from '@react-navigation/stack';
import {icons} from '../../assets/images';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';


shouldHeaderBeShown = (activeRouteName) => {
  // console.log('shouldHeaderBeShown', activeRouteName);

  switch (activeRouteName) {
    case 'Home':
      return true;
    case 'Sessions':
      return true;
    default:
      return false;
  }
};
export const options = (props) => {
  console.log('getOptionns', props);
  var activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;
  
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
  
  return {
    ...defaultOptions(activeRouteName, props),
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: shouldHeaderBeShown(activeRouteName),
    title: getTitle(activeRouteName),
    
  };
};
const getTitle = (activeRouteName) => {
  console.log('getTitle', activeRouteName);

  switch (activeRouteName) {
    case 'Home':
      return '';
    case 'Sessions':
      return '';
  }
};
const showLeftButton = (activeRouteName, navigation) => {
  // console.log('activeRouteName, navigation', activeRouteName, navigation);
  let iconname = ""
  let onPress=()=>{}
  if(activeRouteName=="Sessions"){
    iconname = icons.back
    onPress=()=>navigation.goBack()
   }
   else if(activeRouteName=="Home"){
    iconname = icons.hamburger
    
   }
  return (
    <TouchableOpacity
      style={{marginLeft: 5 * vw}}
      onPress={onPress}>
      <Image
        source={iconname}
        style={{width: 8 * vw, height: 4* vh, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};
const showHeaderRight = (activeRouteName, navigation) => {
  // console.log('activeRouteName, navigation', activeRouteName, navigation);
  let iconname = ""

 if(activeRouteName=="Sessions"){
  iconname = icons.heart
 }
 else if(activeRouteName=="Home"){
  iconname = icons.person
 }
    return (
      <TouchableOpacity
        style={{marginRight: 5 * vw}}
        onPress={() => {}}>
        <Image
          source={iconname}
          style={{
            width: 6 * vw,
            height: 4 * vh,
            resizeMode: 'contain',
           
          }}
        />
      </TouchableOpacity>
    );
  
};

const defaultOptions = (activeRouteName, props) => {
  console.log('defaultProps', props);
  return {
    headerStyle: {
      backgroundColor: '#FFFFFF',
      // height: 10 * vh,
      shadowColor: 'transparent',
      elevation: 0,
      //   paddingTop: 3 * vh,
      // justifyContent: 'center',
      // alignItems: 'center',
     
     
    },
    headerRight: () => showHeaderRight(activeRouteName, props.navigation),
    headerLeft: () => showLeftButton(activeRouteName, props.navigation),
    headerTitle:(props)=>null,
    // ...TransitionPresets.SlideFromRightIOS,
    // headerTitleAlign: 'center',
    // headerTitleStyle: {
    //   fontFamily: Fonts.CB,
    //   color: 'white',
    //   // fontFamily: Fonts.PB,
    //   fontSize: vw * 4,

    //   allowFontScaling: false,
    // },
   
  };
};
