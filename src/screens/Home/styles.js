import {StyleSheet} from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
    container:{flex:1,backgroundColor:"#FFFFFF"},
    heading:{color:"black",fontSize:vh*3.2,textAlign:"center",marginTop:vh*3},
    usrName:{color:"#0C5759",fontSize:vh*3.2},
    subHeading:{fontSize:vh*1.6,color:"#454545",textAlign:"center",marginTop:vh*1},
    moodContainer:{flexDirection:"row",
    width:vw*80,alignSelf:"center",marginTop:vh*3,
flexWrap:"wrap",justifyContent:"space-between"},
    mood:{width:vw*25,alignItems:"center",marginBottom:vh*3},
    moodImg:{width:vw*13,height:vw*13,
        tintColor:"#878787"},
        moodTxt:{color:"#878787",fontSize:vh*1.8,marginTop:vh*1},
        listHeader:{width:"100%",
        flexDirection:"row",justifyContent:"space-between",alignItems:"center",
        paddingHorizontal:vw*6,marginBottom:vh*2},
        headerTitle:{color:"black",fontSize:vh*2.3},
        seeall:{color:"#4E828E",fontSize:vh*1.8,textDecorationLine:"underline"},
        card:{width:'90%',
        backgroundColor:"white",
        // marginRight:vw*6,
        marginHorizontal:vw*2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        borderRadius:vw*3,
        elevation: 6,
        marginBottom:vh*3},
        cardImg:{width:"100%",borderRadius:vw*3,flex:1},
        cardFooter:{paddingHorizontal:vw*3,paddingTop:vh*1,height:vh*10},
        cardTitl:{color:"#6D6D6D",fontSize:vh*1.6,marginBottom:vh*.5},
        cardInfo:{color:"#6F9E9E",fontSize:vh*1.2,marginBottom:vh*1}
});


