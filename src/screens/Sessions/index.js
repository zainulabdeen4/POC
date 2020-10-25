import React, { Component } from 'react';
import { View, Image, FlatList, ScrollView } from 'react-native';
import CircularBold from '../../Components/CircularBold'
import TextRegular from '../../Components/TextRegular'
import TextMedium from '../../Components/TextMedium'
import TouchableHOC from '../../Components/TouchableHOC'
import vh from '../../Units/vh'
import vw from '../../Units/vw'
import styles from './styles'
import {icons,assets} from '../../assets/images'
import Carousel from 'react-native-snap-carousel';
const data =[{
    image:assets.song,
},
{
    image:assets.song1,
},

]
export default class Sessions extends Component {
    state={activeSlide:0}
    _renderItem=({item,index})=>{
        return(
            <Image source={item.image} style={styles.slideImg} resizeMode="cover"/>
        )
    }
    render() {
       
        return (
           <View style={styles.container}>
               <View style={styles.headingContainer}>
<CircularBold style={styles.heading}>Meditate today,</CircularBold>
<TextRegular style={styles.subHeading}>How to deal with your sadness?</TextRegular>
</View>
<View style={{flex:1,justifyContent:"flex-end"}}>
<View style={styles.slidesContainer}>
    <View style={styles.slidesRow}>
        <View style={styles.sessionCountContainer}>
        <TextRegular style={styles.sessionTxt}>Session</TextRegular>
        <CircularBold style={styles.sessionCount}>0{this.state.activeSlide+1}</CircularBold>
    <TextRegular style={styles.sessionTxt}>of 02</TextRegular>
    </View>
    <Carousel
              ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={this._renderItem}
              sliderWidth={vw*75}
              itemWidth={vw*48}
              containerCustomStyle={styles.carouselCont}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            inactiveSlideOpacity={1}
              activeSlideAlignment={"start"}
           
            />
    </View>
    <TextRegular style={{color:"#686E6E",fontSize:vh*1.3,marginLeft:vw*27,width:vw*65,
marginTop:vh*3}}>
        Cry like you mean it. Cried loud enough that your neighbour or two wondered what was 
        happening. it's not that crying feels good, infact, it usually give a headache it;s 
        that it's <TextMedium style={{color:"#656364",fontSize:vh*1.5}}>necessary</TextMedium>
    </TextRegular>
</View>

<View style={styles.footer}>
<TextMedium style={styles.sessionName}>Oean Waves</TextMedium>
<TextRegular style={styles.author}>by Sunshine Vandagriff</TextRegular>
    <View style={styles.playerrow}>
    <TextRegular style={styles.time}>03:31</TextRegular>
    <View style={styles.progressBar}>
<View style={styles.progress} />
    </View>
    <TextRegular style={styles.time}>-04:59</TextRegular>
    </View>
    <View style={styles.controlsRow}>
    <Image source={icons.previous} style={styles.changeBtn} resizeMode="contain"/>
    <View style={styles.playBtn}>
    <Image source={icons.play} style={styles.play} resizeMode="contain"/>
</View>
<Image source={icons.next} style={styles.changeBtn} resizeMode="contain"/>

</View>
</View>
</View>

           </View>
        );
    }
}

