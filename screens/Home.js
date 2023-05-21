
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <View
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: bgColor }]}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

    // Dummy Data
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Xoài Thái",
            img: images.xoaiThai,
        },
        {
            id: 1,
            name: "Trà sữa",
            img: images.tranChau,
        },
        {
            id: 2,
            name: "Thời trang hè",
            img: images.jack,
        },
        {
            id: 3,
            name: "Bếp từ mini",
            img: images.bepMini,
        },
        {
            id: 4,
            name: "Kem chống nắng",
            img: images.kemChongNang,
        },
    ]);

    // Render

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate("DestinationDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.4,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            
            {/* Banner */}
            <TouchableOpacity style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}
                onPress={() => navigation.navigate('DestinationDetail')}
            >
                <Image
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                    }}
                />
            </TouchableOpacity>

            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.eat}
                        bgColor= '#55a630'
                        label="Food"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.drinks}
                        bgColor= '#3a86ff'
                        label="Drinks"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.fashions}
                        bgColor= '#9d4edd'
                        label="Fashions"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor= '#ffa200'
                        label="Event"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.voucher}
                        bgColor='#ff477e'
                        label="Voucher"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.furniture}
                        bgColor='#dda15e'
                        label="Furnitures"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.store}
                        bgColor='#55a630'
                        label="Glossaries"
                        onPress={() => navigation.navigate('DestinationDetail')}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor='#ff477e'
                        label="Explore"
                        onPress={handleSignOut}
                    />
                </View>


            </View>

            {/* Destination */}
            <View style={{ flex: 1 }}>
                <Text style={{ color:'green', marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Everyone is buying</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
        </View>
    );
};

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
    }
});

export default Home;
