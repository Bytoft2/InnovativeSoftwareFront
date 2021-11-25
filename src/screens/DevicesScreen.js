import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { List, Button, TextInput, Chip, Dialog, Portal, FAB, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { Colors, Spacing, Styles } from '../styles';
import Device from '../models/Device'
import User from '../models/User'
import * as Coms from '../services/coms'

export default function DevicesScreen(props) {

    const [state, setState] = React.useState({ open: false });

    const [deviceVisible, setDeviceVisible] = React.useState(false);

    const showDeviceDialog = () => setDeviceVisible(true);

    const hideDeviceDialog = () => setDeviceVisible(false);

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const _handleSearch = () => console.log("Searching");

    const [deviceName, setDeviceName] = React.useState('');

    const user = props.user

    const initialArr = [
        {
            id: 1,
            name: "Lighting"
        },
        {
            id: 2,
            name: "Living room"
        },
        {
            id: 3,
            name: "Appliances"
        }
    ];

    const buttonsListArr = initialArr.map((prop) => {
        return <Chip key={prop.id} style={Styles.chip} icon="information" onPress={() => console.log('Pressed')}>{prop.name}</Chip>
    });

    return (
        <PaperProvider>
            <Appbar.Header style={{ backgroundColor: Colors.main.primary }}>
                <Appbar.Content title={"Devices"} />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
            </Appbar.Header>
            <List.Section style={{ flex: 1 }}>
                {

                    user.getDevices().map((dev) => {
                        return <List.Item key={dev.name} style={{ backgroundColor: Colors.main.light, marginBottom: 5 }} titleStyle={{ color: Colors.main.primary }} title={dev.name} />
                    })

                }
            </List.Section>
            <FAB.Group
                open={open}
                icon={open ? 'close' : 'plus'}
                actions={[
                    {
                        icon: 'tag',
                        label: 'Tag',
                        onPress: () => console.log("pressed Tag"),
                    },
                    {
                        icon: 'lightbulb',
                        label: 'Device',
                        onPress: () => showDeviceDialog(),
                        small: false,
                    },
                ]}
                onStateChange={onStateChange}
                fabStyle={{ backgroundColor: Colors.main.light }}
            />
            <Portal>
                <Dialog visible={deviceVisible} onDismiss={hideDeviceDialog}>
                    <Dialog.Title>Add device</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode="outlined"
                            label="Device name"
                            placeholder="Device name"
                            value={deviceName}
                            onChangeText={text => setDeviceName(text)}
                        />
                        <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {buttonsListArr}

                        </SafeAreaView>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button style={{ backgroundColor: Colors.main.light }} color={Colors.main.dark} onPress={() => {
                            user.addDevice({
                                name: deviceName,
                                deviceId: 1234,
                                manufacturer: 0,
                                tags: [],
                                on: false
                            })
                            Coms.postDevice() //TODO send obj.
                            setDeviceName("")
                            hideDeviceDialog()
                        }}>Add</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </PaperProvider>
    )
}