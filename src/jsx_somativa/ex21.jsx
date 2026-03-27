import { StyleSheet, Text, View } from "react-native";

export default function Exercicio21() {
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
                        gap: 8,
                    }}>
                        <View style={styles.header}><Text style={styles.textStyle}> Header </Text></View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        gap: 8,
                    }}>
                        <View style={styles.sideBar}><Text style={styles.textStyle}> Sidebar</Text></View>
                        <View style={styles.principal}>
                            <View style={{
                                            flexDirection: 'row',
                                            gap: 10,
                                            flex: 1,
                                            margin: 5,
                                        }}>
                                            <View style={styles.card1}></View>
                                            <View style={styles.card2}></View>
                                        </View>
                            <View style={{
                                            flexDirection: 'row',
                                            gap: 10,
                                            flex: 1,
                                            margin: 5,
                                        }}>
                                            <View style={styles.divisor}></View>
                                        </View>
                            <View style={{
                                            flexDirection: 'row',
                                            gap: 10,
                                            flex: 1,
                                        }}>
                                            <View style={styles.cat1}></View>
                                            <View style={styles.cat2}></View>
                                            <View style={styles.cat3}></View>

                                        </View>
                            
                        </View>
                        
                    </View>
                </View>
        
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        gap: 8,
                    }}>
                        <View style={styles.footer}><Text style={styles.textStyle}> footer </Text></View>
                    </View>
                </View>
                
        </View>
       
        </View>
   
 

  )}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    gap: 8,
    backgroundColor: '#1a1a1a',
    borderRadious: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    
  },
  header: {
    
    height: 60,
    width: '100%',
    borderRadius: 8,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  divisor: {
    
    borderRadius: 8,
    height: 8,
    flex: 1,
    width: 110,
    backgroundColor: "#34495e",
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
  principal: {
    
    borderRadius: 8,
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cat3: {
    
    borderRadius: 8,
    
    height: 100,
    flex: 1,
    width: 110,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  cat1: {
    
    borderRadius: 8,
    
    height: 100,
    flex: 1,
    width: 110,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
   cat2: {
    
    borderRadius: 8,
   
    height: 100,
    flex: 2,
    width: 110,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
   footer: {
    
    borderRadius: 8,
   
    height: 50,
    flex: 1,
    width: 110,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  sideBar: {
    
    borderRadius: 8,
    width: 80,
    backgroundColor: "#95a5ac",
    alignItems: "center",
    justifyContent: "center",
  },
});