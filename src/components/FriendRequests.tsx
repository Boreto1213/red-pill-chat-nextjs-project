'use client'

import axios from 'axios'
import { Check, UserPlus, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

interface FriendRequestsProps {
  incomingFriendRequests: IncomingFriendRequests[]
  sessionId: string
}

const FriendRequests: FC<FriendRequestsProps> = ({
  incomingFriendRequests,
  sessionId,
}) => {
  const router = useRouter()
  const [friendRequests, setFriendRequests] = useState<
    IncomingFriendRequests[]
  >(incomingFriendRequests)

  const acceptFriendRequest = async (senderId: string) => {
    await axios.post('/api/friends/accept', { id: senderId })

    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    )

    router.refresh()
  }

  const denyFriendRequest = async (senderId: string) => {
    await axios.post('/api/friends/deny', { id: senderId })

    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    )

    router.refresh()
  }

  return (
    <>
      {friendRequests.length === 0 ? (
        <p className="text-sm text-zinc-500">Nothing to show here...</p>
      ) : (
        friendRequests.map((requst) => (
          <div key={requst.senderId} className="flex gap-4 items-center">
            <UserPlus className="text-black" />
            <p className="font-medium text-lg">{requst.senderEmail}</p>
            <button
              onClick={() => acceptFriendRequest(requst.senderId)}
              aria-label="Accept Friend"
              className="w-8 h-8 bg-indigo-600 hover:bg-indigo-700 grid place-items-center rounded-full transition hover:shadow-md"
            >
              <Check className="font-semibold text-white w-3/4 h-3/4" />
            </button>
            <button
              onClick={() => denyFriendRequest(requst.senderId)}
              aria-label="Deny Friend"
              className="w-8 h-8 bg-red-600 hover:bg-red-700 grid place-items-center rounded-full transition hover:shadow-md"
            >
              <X className="font-semibold text-white w-3/4 h-3/4" />
            </button>
          </div>
        ))
      )}
    </>
  )
}

export default FriendRequests
