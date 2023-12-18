import React from 'react'

const AppContext = React.createContext({
  lightTheme: true,
  changeAppTheme: () => {},
})

export default AppContext
