import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },

    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
        
    },

    input:{
        flex: 1,
        height: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        padding: 16,
        color: '#FFF',
        fontSize:16,
        marginRight: 10,
       
        
        
    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:"#31cf67",
        alignItems: 'center',
        justifyContent: 'center'
     },

     buttonText:{
        color:'#FFF',
        fontSize: 24,
     },

     form:{
        width:'100%',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25,

     },

     ListEmpatyComponet:{
        color: '#FFF',
        fontSize: 12,
        textAlign: "center",
        marginTop: 20,
        

     }

  });