import React from 'react'
import '@testing-library/jest-native/extend-expect'
import {render} from '@testing-library/react-native'

import App from '../App'

it('renders correctly', () => {
  render(<App />)
})
