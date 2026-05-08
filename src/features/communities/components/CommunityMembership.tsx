"use client"

import { useState } from "react";
import { CommunityPermissions } from "../types/community.types"
import { toggleMembershipAction } from "../actions/membership-actions";

type Props = {
    permissions: CommunityPermissions
    communityId: string
}

export default function CommunityMembership({permissions, communityId }: Props) {

    const [ canJoin, setCanJoin ] = useState(permissions.canJoin)
    const [ canLeave, setCanLeave ] = useState(permissions.canLeave)

    const handleClick = async () => {
        await toggleMembershipAction(communityId)
    }

  return (
     <>
        {canJoin && (
        <button 
            onClick={handleClick}    
            className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white cursor-pointer bg-orange-600"
        >
            Inscribirme a esta comunidad
        </button>

        )}
        
        {canLeave && (
        <button
            onClick={handleClick} 
            className="font-bold text-lg w-full lg:w-auto px-5 py-2 text-white cursor-pointer bg-red-600"
        >
            Abandonar la comunidad
        </button>
        )}
     </>
  )
}
