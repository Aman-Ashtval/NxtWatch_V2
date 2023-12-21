import React from 'react'

const AppContext = React.createContext({
  lightTheme: true,
  savedVideosList: [],
  changeAppTheme: () => {},
  saveVideo: () => {},
})

export default AppContext
