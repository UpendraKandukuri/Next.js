"use client"
import store from '@/stote/Store'
import React from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({children}) => {
  return (
    <div>
    <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default StoreProvider
