
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
                        width: SIZES.width * 0.28,
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
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
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

            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.eat}
                        bgColor= '#4361ee'
                        label="Food"
                        onPress={() => { console.log("Food") }}
                    />
                    <OptionItem
                        icon={icons.drinks}
                        bgColor= '#4361ee'
                        label="Drinks"
                        onPress={() => { console.log("Drinks") }}
                    />
                    <OptionItem
                        icon={icons.fashions}
                        bgColor= '#4361ee'
                        label="Fashions"
                        onPress={() => { console.log("Fashions") }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor= '#4361ee'
                        label="Event"
                        onPress={() => { console.log("Event") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.voucher}
                        bgColor='#4361ee'
                        label="Voucher"
                        onPress={() => { console.log("Voucher") }}
                    />
                    <OptionItem
                        icon={icons.furniture}
                        bgColor='#4361ee'
                        label="Furnitures"
                        onPress={() => { console.log("Furnitures") }}
                    />
                    <OptionItem
                        icon={icons.store}
                        bgColor='#4361ee'
                        label="Glossaries"
                        onPress={() => { console.log("Glossaries") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor='#4361ee'
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
