import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/core'


const DestinationDetail = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, marginTop: 50, paddingHorizontal: SIZES.padding, }}>
          <Text style={{ alignSelf:'center', fontSize: 30 }}>Mô tả sản phẩm</Text>
          <Image
              source={images.homeBanner}
              resizeMode="cover"
              style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
              }}
          />
          
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DestinationDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
  },
  buttonContainer: {
    alignSelf: 'center',
    flex: 0.5,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#008000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
})