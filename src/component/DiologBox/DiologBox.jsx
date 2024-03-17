import * as React from 'react';
import { Dialog, Portal, Text } from 'react-native-paper';

export default function DiologBox({visible,onDismiss }) {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
               
            </Dialog>
        </Portal>
    )
}