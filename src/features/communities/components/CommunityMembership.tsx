"use client"

import { useState } from "react";
import { CommunityPermissions } from "../types/community.types"
import { toggleMembershipAction } from "../actions/membership-actions";
import toast from "react-hot-toast";

type Props = {
    permissions: CommunityPermissions
    communityId: string
}

export default function CommunityMembership({permissions, communityId }: Props) {

    const [ canJoin, setCanJoin ] = useState(permissions.canJoin)

    const handleClick = async () => {
        const result = await toggleMembershipAction(communityId)

        if(result?.success) {
            toast.success(result.message)
            setCanJoin(result.newPermissions.canJoin)
        }
    }

  return (
     <>
        
        <button 
            onClick={handleClick}    
            className={`${canJoin ? 'bg-orange-600' : 'bg-red-600' } font-bold text-lg w-full lg:w-auto px-5 py-2 text-white cursor-pointer`}
        >
            {canJoin ? 'Inscribirme a esta comunidad' : 'Salir de esta comunidad' }
        </button>

     </>
  )
}
