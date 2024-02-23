// batchSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface BatchState {
    selectedBatchDeliveryIds: string[];
    selectedBatchCollectionIds: string[];
}

const initialState: BatchState = {
    selectedBatchDeliveryIds: [],
    selectedBatchCollectionIds: [],
};

const batchSlice = createSlice({
    name: 'batch',
    initialState,
    reducers: {
        toggleBatchDeliverySelection: (state, action: PayloadAction<string>) => {
            const index = state.selectedBatchDeliveryIds.indexOf(action.payload);
            if (index !== -1) {
                state.selectedBatchDeliveryIds.splice(index, 1);
            } else {
                state.selectedBatchDeliveryIds.push(action.payload);
            }
        },

        toggleBatchCollectionSelection: (state, action: PayloadAction<string>) => {
            const index = state.selectedBatchCollectionIds.indexOf(action.payload);
            if (index !== -1) {
                state.selectedBatchCollectionIds.splice(index, 1);
            } else {
                state.selectedBatchCollectionIds.push(action.payload);
            }
        },

        // getSelectedBatchDeliveryIds: (state) => {
        //     return state.selectedBatchDeliveryIds;
        // },
        // getSelectedBatchCollectionIds: (state) => {
        //     return state.selectedBatchCollectionIds;
        // }
    },
});

export const {
    toggleBatchDeliverySelection,
    toggleBatchCollectionSelection,
} = batchSlice.actions;

export default batchSlice.reducer;
