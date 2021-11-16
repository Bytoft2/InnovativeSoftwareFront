import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, TextInput, Chip, Paragraph, Dialog, Portal, FAB, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { Colors, Spacing, Styles} from '../styles';
import Device from '../models/Device'
import User from '../models/User'

export default function DevicesScreen(props) {

    const [state, setState] = React.useState({ open: false });

    const [tagVisible, setTagVisible] = React.useState(false);

    const showDialog = () => setTagVisible(true);

    const hideDialog = () => setTagVisible(false);

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;

    const _handleSearch = () => console.log("Searching")

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
            <Appbar.Header style={{backgroundColor: Colors.main.primary}}>
                <Appbar.Content title={"Devices"} />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
            </Appbar.Header>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Devices</Text>
            </View>
            <FAB.Group
                open={open}
                icon={open ? 'close' : 'plus'}
                actions={[
                    {
                        icon: 'tag',
                        label: 'Tag',
                        onPress: () => showDialog(),
                    },
                    {
                        icon: 'lightbulb',
                        label: 'Device',
                        onPress: () => console.log('Pressed device'),
                        small: false,
                    },
                ]}
                onStateChange={onStateChange}
                fabStyle= {{backgroundColor: Colors.main.light}}
            />
            <Portal>
                <Dialog visible={tagVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Add device</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            mode="outlined"
                            label="Device name"
                            placeholder="Device name"
                        />
                        <SafeAreaView style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {buttonsListArr}
                            
                        </SafeAreaView>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button style={{backgroundColor: Colors.main.light}} color={Colors.main.dark} onPress={hideDialog}>Add</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </PaperProvider>
    )




}