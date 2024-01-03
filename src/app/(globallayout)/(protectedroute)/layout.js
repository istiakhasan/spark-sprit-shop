"use client"
import { isLoggedIn } from '@/services/auth.service';
import { usePathname, useRouter, useSearchParams,redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProtectedRoute = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [active,setActive]=useState(false)
    const pathaName=usePathname()
    const router=useRouter()
    const userLoggedIn=isLoggedIn()
    const searchParams = useSearchParams()
    useEffect(() => {
      if (!userLoggedIn) {
        const redirectUrl = `/login?pathaName=${encodeURIComponent(pathaName)}`;
        redirect(redirectUrl || "/");
      }
      setIsLoading(true);
    }, [router, isLoading, userLoggedIn, pathaName]);
    return (
        <div>
           {children} 
        </div>
    );
};

export default ProtectedRoute;