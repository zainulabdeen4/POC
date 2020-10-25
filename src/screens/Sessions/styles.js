import {StyleSheet} from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
    container:{flex:1,backgroundColor:"#FFFFFF",justifyContent:"space-between"},
    headingContainer:{paddingHorizontal:vw*6},
    heading:{color:'#08534D',fontSize:vh*3.2,marginBottom:vh*.5},
    subHeading:{color:'#6A6A6A',fontSize:vh*2},
    footer:{paddingTop:vh*1.5,alignItems:"center",width:"100%"},
    sessionName:{color:"#6A6A6A",fontSize:vh*2.4},
    author:{color:"#898989",fontSize:vh*1.3},
    playerrow:{flexDirection:"row",alignItems:"center",alignSelf:"center",marginTop:vh*1.8},
    time:{color:"#898989",fontSize:vh*1.4},
    progressBar:{width:vw*55,height:vh*1.2,borderRadius:vh*.6,backgroundColor:"#F6F6F6",
    marginHorizontal:vw*3,
    },
    progress:{width:'70%',height:vh*1.2,borderRadius:vh*.6,backgroundColor:"#0A5B6B",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    controlsRow:{flexDirection:"row",alignItems:"center",
    marginVertical:vh*2,alignSelf:"center"},
    changeBtn:{width:vw*9,height:vh*4},
    playBtn:{width:vh*6,height:vh*6,borderRadius:vh*3,justifyContent:"center",
    alignItems:"center",backgroundColor:"#095C6A",marginHorizontal:vw*7},
    play:{width:vw*4.5,height:vh*3},
    sessionCountContainer:{marginTop:vh*4,marginLeft:vw*6,marginRight:vw*4},
    sessionTxt:{color:"#7C8285",fontSize:vh*2,textAlign:"right"},
    sessionCount:{color:"#095C6A",fontSize:vh*4.5,textAlign:"right"},
    slidesContainer:{flexGrow:1,backgroundColor:"#EEF9FB",marginTop:vh*12,
    borderTopLeftRadius:vw*15,
    borderBottomRightRadius:vw*15},
    slidesRow:{flexDirection:"row",width:"100%"},
    carouselCont:{marginTop:-vh*8,paddingLeft:vw*1},
    slideImg:{width:vw*43,height:vh*38,
        borderRadius:vw*5}

});


