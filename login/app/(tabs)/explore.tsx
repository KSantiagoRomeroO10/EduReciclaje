import { StyleSheet, View, Text, Linking } from 'react-native'; // Asegúrate de importar Linking

export default function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvendios</Text>
      <View style={styles.infoSection}>
        <Text style={styles.white}>Hecho por: Santiago Romero</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.white}>EduReciclaje</Text>
      </View>
      <View style={styles.infoSection}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/KSantiagoRomeroO10/EduReciclaje')}
        >
          Repositorio Git Hub
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C2C',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  infoSection: {
    marginVertical: 8
  },
  label: {
    color: '#fff',
    fontWeight: 'bold'
  },
  link: {
    color: '#A81212',
    textDecorationLine: 'underline'
  },
  white:{
    color: '#fff',
  }
});
