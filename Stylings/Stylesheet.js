import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({

    largeText: {
        fontSize: 19,
        fontWeight: 'bold',
    },

    MainHeader : {

        borderBottomColor:'#38d200',
        borderBottomWidth:2,
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',     
        paddingTop: 50,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        width:width,
        backgroundColor: 'whitesmoke',
    },

    Logo : {
        width:130,
        // height:45,
    },

    Navbar : {
        position:'absolute',
        padding:10,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'whitesmoke',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopWidth: 2,       
        borderTopColor: '#38d200', 
      
    },

    navbarContent0 : {
        flexDirection:'row',
        gap:40,
        
    },

    navbarContent1 : {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center"
    },

    navbarIcons : {
        color: '#0673ea',
    },

    navbarCameraIcon: {
        color: '#0673ea',     
    },

    MainSection : {
        padding:10,
        backgroundColor:'white',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },

    MainSection2 : {
        paddingTop:5,
        paddingLeft:15,
        paddingRight:15,
        gap:5,
        backgroundColor:'white',
        height:'90%',       
    },
    MainSection3 : {
        paddingTop:5,
        paddingLeft:15,
        paddingRight:15,
        gap:5,
        backgroundColor:'white',
        height:'90%',       
    },

    

    primaryCard : {
        height:height/2.5,
        backgroundColor:'#E6ECF1',
        flexDirection:'column',
        gap:20,
        justifyContent:'center',
        alignItems:'center',
    },

    secondaryCard : {
        flexDirection:'column',       
    },

    grayCard : {
        padding:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'whitesmoke',
    },

    contentCard : {
        borderWidth:0.5,
        borderRadius:6,
        borderColor:'gray',
        gap:3,
        padding:8,
    },


    redSpan : {
        color:'red'
    },

    blueSpan :{
        color:'#218eff'
    }

  

 

})