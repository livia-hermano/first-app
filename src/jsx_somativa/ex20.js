import { StyleSheet, Text, View } from "react-native";

export default function Exercicio20() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'column',
        gap: 8,
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    }}>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                flex: 1,
                alignContent: 'flex-start',
                gap: 8,
            }}>
                <View style={styles.banner}><Text style={styles.textStyle}> Promoção </Text></View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                gap: 2,
                flex:1,
                height: '100%',
                justifyContent: "flex-start",
                alignContent: "flex-start"
            }}>
                <View style={styles.card1}><Text style={styles.textStyle}>1</Text></View>
                <View style={styles.card2}><Text style={styles.textStyle}>2</Text></View>
                <View style={styles.card3}><Text style={styles.textStyle}>3</Text></View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'column',
                gap: 2,
                flex: 1,
                width: '100%',
                height: '100%',
                alignContent: 'flex-start'
            }}>
                <View style={styles.destaque}><Text style={styles.textStyle}>destaque</Text></View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                gap: 2,
                flex: 1,
                alignContent: 'flex-start'
            }}>
                <View style={styles.cat1}><Text style={styles.textStyle}> 1 </Text></View>
                <View style={styles.cat2}><Text style={styles.textStyle}> 2 </Text></View>
                <View style={styles.cat3}><Text style={styles.textStyle}> 3 </Text></View>
            </View>
        </View>
                
            
        </View>
    </View>
 

  )}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    padding: 8,
    flex: 1,
    gap: 8,
    backgroundColor: '#ecf0f1',
    borderRadious: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    
  },
  banner: {
    padding: 10,
    height: 80,
    width: '100%',
    borderRadius: 8,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  card1: {
    
    borderRadius: 8,
    height: 150,
    flex: 1,
    width: 110,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  card2: {
    
    borderRadius: 8,
    height: 150,
    flex: 1,
    width: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
   card3: {
    
    borderRadius: 8,
  
    height: 150,
    flex: 2,
    width: 140,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  destaque: {
    
    borderRadius: 8,
    height: '100%',
    width: '100%',
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cat1: {
    
    borderRadius: 8,
    
    height: 100,
    flex: 1,
    width: 110,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  cat2: {
    
    borderRadius: 8,
    
    height: 100,
    flex: 1,
    width: 110,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
   cat3: {
    
    borderRadius: 8,
   
    height: 100,
    flex: 1,
    width: 110,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});