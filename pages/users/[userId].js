import { useRouter } from 'next/router'
import React from 'react'

export default function UserDetails() {
  const nextRouter = useRouter();
  const userId = nextRouter.query.userId;
  return (
    <div>UserDetails: {userId} </div>
  )
}
 