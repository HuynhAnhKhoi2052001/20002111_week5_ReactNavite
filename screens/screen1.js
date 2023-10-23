import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import { Entypo, Feather ,AntDesign} from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const screen1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ padding: 10, alignItems: 'center' }}>
                <Image
                    source={require('../assets/vs_blue.png')}
                    style={{ width: 301, height: 361 }}
                ></Image>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Entypo name='star' size={28} color='yellow'></Entypo>
                    <Entypo name='star' size={28} color='yellow'></Entypo>
                    <Entypo name='star' size={28} color='yellow'></Entypo>
                    <Entypo name='star' size={28} color='yellow'></Entypo>
                    <Entypo name='star' size={28} color='yellow'></Entypo>
                </View>
                <View>(Xem 828 đánh giá)</View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingHorizontal: 20 }}>1.790.000</Text>
                <Text style={{ textDecorationLine: 'line-through', fontSize: 18, paddingHorizontal: 20 }}>2.000.000</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 25, alignItems: "center" }}>
                <Text style={{ color: "red", fontWeight: "bold" }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Feather name="help-circle" size={24} color="black" style={{ marginLeft: 10 }} />
            </View>
            <View >
                <TouchableOpacity style={{ height: 40, borderColor: 'yellow', borderWidth: 1, margin: 20, borderRadius: 10, textAlign: "center" }}

                    onPress={() => {
                        navigation.navigate('screen2')
                    }}
                >
                    <Text style={{ color: "#333", fontWeight: "bold", fontSize: 18, textAlign: "center", margin: "auto" }}
                    >4 MÀU-CHỌN MÀU</Text>
                    <AntDesign name="right" size={24} color="black" style={{ position: "absolute", top: 5, right: 0 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
                <TouchableOpacity style={{ backgroundColor: "#EE0A0A", height: 47, width: 350, alignItems: "center",justifyContent:'center', borderRadius: 10 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>CHỌN MUA</Text>

                </TouchableOpacity>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});
export default screen1