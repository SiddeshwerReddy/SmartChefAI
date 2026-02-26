"use client";

import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Cookie, Refrigerator } from 'lucide-react'

const UserDropDown = () => {
  return <UserButton>
    <UserButton.MenuItems>
        <UserButton.Link 
         label="My Recipes"
         labelIcon={<Cookie size={16} />}
         href="/recipes"
        />
        <UserButton.Link 
         label="My Pantry"
         labelIcon={<Refrigerator size={16} />}
         href="/pantry"
        />
        <UserButton.Action label="manageAccount" />
    </UserButton.MenuItems>
  </UserButton>
}

export default UserDropDown
