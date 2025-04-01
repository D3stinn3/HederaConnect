'use client'

import { UserProfile } from '@clerk/nextjs'

const UserPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <UserProfile />
    </div>
  )
}

export default UserPage
