import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}