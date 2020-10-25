import {StyleSheet} from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
    container:{flex:1,backgroundColor:"#FFFFFF",justifyContent:'space-between'},
    headingContainer:{paddingHorizontal:vw*6,marginTop:vh*5},
    heading:{color:'#08534D',fontSize:vh*3.5,marginBottom:vh*.5},
    subHeading:{color:'#6A6A6A',fontSize:vh*2.2},
    footer:{paddingVertical:vh*1.5,alignItems:"center",width:"100%"},
    sessionName:{color:"#6A6A6A",fontSize:vh*2.6},
    author:{color:"#898989",fontSize:vh*1.5},
    playerrow:{flexDirection:"row",alignItems:"center",alignSelf:"center",marginTop:vh*2},
    time:{color:"#898989",fontSize:vh*1.8},
    progressBar:{width:vw*55,height:vh*1.5,borderRadius:vh*.75,backgroundColor:"#F6F6F6",
    marginHorizontal:vw*3,
    },
    progress:{width:'70%',height:vh*1.5,borderRadius:vh*.75,backgroundColor:"#0A5B6B",
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
    marginVertical:vh*3,alignSelf:"center"},
    changeBtn:{width:vw*9,height:vh*4},
    playBtn:{width:vh*6,height:vh*6,borderRadius:vh*3,justifyContent:"center",
    alignItems:"center",backgroundColor:"#095C6A",marginHorizontal:vw*7},
    play:{width:vw*4.5,height:vh*3},
    sessionCountContainer:{marginTop:vh*4,marginLeft:vw*6,marginRight:vw*4},
    sessionTxt:{color:"#7C8285",fontSize:vh*2,textAlign:"right"},
    sessionCount:{color:"#095C6A",fontSize:vh*4.5,textAlign:"right"},
    slidesContainer:{flex:1,backgroundColor:"#EEF9FB",marginTop:vh*12,borderTopLeftRadius:vw*15,
    borderBottomRightRadius:vw*15},
    slidesRow:{flexDirection:"row",width:"100%"},
    carouselCont:{marginTop:-vh*8,paddingLeft:vw*1},
    slideImg:{width:vw*45,height:vh*38,
        borderRadius:vw*5}

});


