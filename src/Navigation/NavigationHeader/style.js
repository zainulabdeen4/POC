import { StyleSheet,Platform } from 'react-native'
import { Fonts } from '../../assets/fonts';
import vw from '../../Units/vw';
import vh from '../../Units/vh';
export default styles = StyleSheet.create({
 
    titleText:{
        color:"#414954",
        fontFamily: Fonts.PM,
        fontWeight: 'normal',
        fontSize: 2.7 * vh
    },
    titleTextWhite:{
        fontFamily: Fonts.PM,
        color: "#FFF",
        fontWeight: 'normal',
        fontSize: 2.7 * vh,
        
    },
    imageTitle:{
        //height:11*vh,
        ...Platform.select({
            ios:{
                height:6.5*vh
            },
            android:{
                height:11*vh
            }
        })
        
    },
    chatLeftBox:{
        flexDirection:"row",
    },
    iconHeader:{
        width:3.4*vh,
        height:3.4*vh,
        
        resizeMode:'contain'
    },
    hamburger:{
        width: 9 * vw, 
        // paddingVertical:3*vw,    
        // backgroundColor:"red"
    },
    inviteButton:{
        width: 9 * vw,
        marginLeft:2*vw
    },
    rightButton:{
        width: 7 * vw,
        marginRight:2*vw
    },
    buttonWidth:{
        width:25*vw,
        paddingVertical:3*vw,
        // backgroundColor:"red"
    }
})