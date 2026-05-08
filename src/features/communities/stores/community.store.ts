import { community } from '@/src/db/schema';
import { create } from 'zustand'
import { selectCommunity } from '../types/community.types'

type Store = {
    open: boolean
    setOpen: ( open: boolean ) => void
    community: selectCommunity | null
    setCommunity: ( community: selectCommunity | null ) => void
}

export const useCommunityStore = create<Store>((set) => ({
    open: false,
    setOpen: (open) => {
        set({open})
    },
    community: null,
    setCommunity: ( community ) => {
        set({community})
    }
}))