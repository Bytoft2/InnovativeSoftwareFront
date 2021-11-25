import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { Colors, Spacing } from '../styles';

export default function HomeScreen(props) {

    const price = 1.48


    const _handleSearch = () => console.log("Searching")

    return (
        <PaperProvider>
            <Appbar.Header style={{ backgroundColor: Colors.main.primary }}>
                <Appbar.Content title={"Home"} />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Current electricity price:</Text>
                <Text>{price} DKK/kWh</Text>
            </View>
        </PaperProvider>
    )

}