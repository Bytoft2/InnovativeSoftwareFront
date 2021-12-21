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

    const [tagVisible, setTagVisible] = React.useState(false);

    const showTagDialog = () => setTagVisible(true);

    const hideTagDialog = () => setTagVisible(false);

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const _handleSearch = () => console.log("Searching");

    const [deviceName, setDeviceName] = React.useState('');

    const [tagName, setTagName] = React.useState('');

    const [addableDevice, setAddableDevice] = React.useState(new Device());

    const [fullDeviceList, setFullDeviceList] = React.useState([]);

    const [hackyUpdate, hh] = React.useState(false)

    const [deviceListExpanded, setDeviceListExpanded] = React.useState(false);

    const handleDeviceListPress = () => setDeviceListExpanded(!deviceListExpanded);

    const closeDeviceList = () => {
        if (deviceListExpanded) {
            handleDeviceListPress()
        }
    }

    const update = () => { hh(!hackyUpdate) }

    const user = props.user

    return (
        <PaperProvider>
            <Appbar.Header style={{ backgroundColor: Colors.main.primary }}>
                <Appbar.Content title={"Devices"} />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
            </Appbar.Header>
            <List.Section style={{ flex: 1 }}>
                {

                    user.getDevices().map((dev) => {
                        if (dev.name != null) {
                            if (dev.on) {
                                return <List.Item key={dev.name} style={{ backgroundColor: Colors.main.light, marginBottom: 5 }} titleStyle={{ color: Colors.main.primary }} title={dev.name} onPress={() => {
                                    user.turnOff(dev.powerUnitId).then(() => update())
                                }} />
                            } else {
                                return <List.Item key={dev.name} style={{ backgroundColor: Colors.main.grey, marginBottom: 5 }} titleStyle={{ color: Colors.main.primary }} title={dev.name} onPress={() => {
                                    user.turnOn(dev.powerUnitId).then(() => update())
                                }} />
                            }
                        }
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
                        onPress: () => showTagDialog()
                    },
                    {
                        icon: 'lightbulb',
                        label: 'Device',
                        onPress: () => {
                            showDeviceDialog()
                            user.discoverDevices().then((res) => {
                                console.log(res)
                                setFullDeviceList(res)
                            })
                        },
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

                        <List.Accordion
                            title="Devices"
                            expanded={deviceListExpanded}
                            onPress={() => {
                                handleDeviceListPress()
                                console.log(deviceListExpanded)
                            }}
                            left={props => <List.Icon {...props} icon="lightbulb" />}>
                            {
                                fullDeviceList.map((dev) => {
                                    if (dev.name != null) {
                                        return <List.Item key={dev.name} style={{ backgroundColor: Colors.main.light, marginBottom: 5 }} titleStyle={{ color: Colors.main.primary }} title={dev.name} onPress={() => {
                                            setAddableDevice(dev)
                                            setDeviceName(dev.name)
                                            closeDeviceList
                                        }} />
                                    }
                                })
                            }
                        </List.Accordion>

                        <TextInput
                            mode="outlined"
                            label="Device name"
                            placeholder="Device name"
                            value={deviceName}
                            onChangeText={text => setDeviceName(text)}
                        />
                        <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {user.getTags().map((tag) => {
                                if (tag != null) {
                                    if (addableDevice.tags.includes(tag)) {
                                        return <Chip key={tag} selectedColor={Colors.main.primary} style={Styles.chip} icon="information" onPress={() => {
                                            for (var i = 0; i < addableDevice.tags.length; i++) {
                                                if (addableDevice.tags[i] === tag) {
                                                    addableDevice.tags.splice(i, 1);
                                                }
                                            }
                                            update()
                                        }}>{tag}</Chip>
                                    }
                                    else {
                                        return <Chip key={tag} style={Styles.chip} icon="information" onPress={() => {
                                            addableDevice.tags.push(tag)
                                            update()
                                        }}>{tag}</Chip>
                                    }
                                }
                            })}

                        </SafeAreaView>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button style={{ backgroundColor: Colors.main.light }} color={Colors.main.dark} onPress={() => {
                            user.addDevice(addableDevice).then(() => update())
                            setDeviceName("")
                            setAddableDevice(new Device())
                            hideDeviceDialog()
                        }}>Add</Button>
                    </Dialog.Actions>
                </Dialog>

                <Dialog visible={tagVisible} onDismiss={hideTagDialog}>
                    <Dialog.Title>Add tag</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode="outlined"
                            label="Tag name"
                            placeholder="Tag name"
                            value={tagName}
                            onChangeText={text => setTagName(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button style={{ backgroundColor: Colors.main.light }} color={Colors.main.dark} onPress={() => {
                            user.addTag(
                                tagName
                            )
                            setTagName("")
                            hideTagDialog()
                        }}>Add</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </PaperProvider>
    )
}