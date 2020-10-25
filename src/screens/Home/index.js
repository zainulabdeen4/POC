import React, { Component } from 'react';
import { View, Image, FlatList, ScrollView } from 'react-native';
import CircularBook from '../../Components/CircularBook'
import TextRegular from '../../Components/TextRegular'
import TextMedium from '../../Components/TextMedium'
import TouchableHOC from '../../Components/TouchableHOC'
import vh from '../../Units/vh'
import vw from '../../Units/vw'
import styles from './styles'
import {icons,assets} from '../../assets/images'
import MasonryList from '@appandflow/masonry-list';
import { connect } from 'react-redux'
import actions from '../../redux/actions'
const mood =[{image:icons.sadness,text:"Sadness"},
{image:icons.fine,text:"Fine"},
{image:icons.happy,text:"Happy"},
{image:icons.angry,text:"Anger"},
{image:icons.sorrow,text:"Sorrow"},
{image:icons.low,text:"Low"}]

class Home extends Component {
    
    getHeight =({ item,index}) =>  {
        switch(index%5){
            case 0:
                return vh*22
                break;
            case 1:
               return  vh*34
               break;
            case 2:
               return vh*34
               break;   
            case 3:
               return vh*18
               break;
            default:
            return vh*22
            break;
        }
    }
    _renderItem=({item,index, column})=>{
        let height = vh*12
        if(column == 0 && (index%2 == 0)){
            height=vh*12
        }
        else if (column == 0 && (index%2 == 1)){
            height=vh*20
        }
        else if (column == 1 && (index%2 == 0)){
            height=vh*20
        }
        else if(column == 1 && (index%2 == 1)){
            height=vh*18
        }
        return(
<TouchableHOC onPress={()=>this.props.navigation.navigate("Sessions")}
 style={[styles.card]}>
    <Image style={[styles.cardImg,{height:height}]} source={item.image} resizeMode="cover"/>
    <View style={styles.cardFooter}>
<TextRegular style={styles.cardTitl}>
    {item.title}</TextRegular>
    <TextRegular style={styles.cardInfo}>
{item.sessions} Sessions | {item.time}</TextRegular>
    </View>
</TouchableHOC>
        )
    }
    render() {
       
        return (
           <View style={styles.container}>

               <CircularBook style={styles.heading}>
                    Welcome back,
                    <CircularBook style={styles.usrName}>
                        {" "}Bella{" "}
                    </CircularBook>
                        !
                </CircularBook>

               <TextRegular style={styles.subHeading}>
                   What is your condition today?</TextRegular>

                   <View style={styles.moodContainer}>
                       {mood.map((item,index)=>
                        <TouchableHOC style={styles.mood}>
                        <Image source={icons.sadness} style={styles.moodImg}
                        resizeMode="contain"/>
                        <TextMedium style={styles.moodTxt}>
                            Sadness</TextMedium>
                        </TouchableHOC>
                       )}
                </View>
                <View style={styles.listHeader}>
                <CircularBook style={styles.headerTitle}>
                    Curated for you
                </CircularBook>
                <TextRegular
                 style={styles.seeall}>
                    See all
                </TextRegular>
            </View>
            <MasonryList data={this.props.sessions} renderItem={this._renderItem}
            numColumns={2}
            getHeightForItem={this.getHeight}
            style={{paddingHorizontal:vw*3}}
            showsVerticalScrollIndicator ={false}
    />
           </View>
        );
    }
}

const mapStates = (state) => {
    return {
  sessions:state.GeneralReducer.sessions
    }
  }
  const mapProps = (dispatch) => {
    return {
     
    }
  
  }
  export default connect(mapStates, mapProps)(Home);

