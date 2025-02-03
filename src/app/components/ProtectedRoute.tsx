'use client'

import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const ProtectedRoute = ({children} : {children : React.ReactNode}) => {

    const router = useRouter()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (!isLoggedIn) {
            router.push('/adminLogin')
        }
    })
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute;