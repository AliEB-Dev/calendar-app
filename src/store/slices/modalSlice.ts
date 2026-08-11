import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ItemType } from "../../components/shared/types"

interface ModalState {
  isAddItemOpen: boolean
  defaultType: ItemType
}

const initialState: ModalState = {
  isAddItemOpen: false,
  defaultType: "task",
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddItemModal: (state, action: PayloadAction<ItemType | undefined>) => {
      state.isAddItemOpen = true
      if (action.payload) state.defaultType = action.payload
    },
    closeAddItemModal: (state) => {
      state.isAddItemOpen = false
    },
  },
})

export const { openAddItemModal, closeAddItemModal } = modalSlice.actions
export default modalSlice.reducer