import * as React from 'react';
import { Dialog, Portal, } from 'react-native-paper';
import CarInformation from '../../page/CarInformation/CarInformation';
export default function DiologBox({visible,onDismiss }) {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
               <CarInformation />
            </Dialog>
        </Portal>
    )
}