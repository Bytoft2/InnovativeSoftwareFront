import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { Colors, Spacing } from '../styles';
import * as Coms from '../services/coms'

export default function HomeScreen(props) {

    const [price, setPrice] = React.useState(0);

    const [priceUnit, setPriceUnit] = React.useState("DKK / kWh")

    const [co2, setCo2] = React.useState(0);

    const [co2Unit, setCo2Unit] = React.useState("g / kWh")

    const _handleRefresh = () => {
        Coms.getCo2().then((res) => {
            setCo2(res.co2Emitted)
            setCo2Unit(res.unit)
        })
        Coms.getPrice().then((res) => {
            setPrice(res.price)
            setPriceUnit(res.unit)
        })
    }

    return (
        <PaperProvider>
            <Appbar.Header style={{ backgroundColor: Colors.main.primary }}>
                <Appbar.Content title={"Home"} />
                <Appbar.Action icon="refresh" onPress={_handleRefresh} />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Current electricity price:</Text>
                <Text>{price} {priceUnit}</Text>
                <Text> </Text>
                <Text>Current electricity CO2 emission:</Text>
                <Text>{co2} {co2Unit}</Text>
            </View>
        </PaperProvider>
    )

}