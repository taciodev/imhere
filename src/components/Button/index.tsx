import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface Props {
  children: React.ReactNode;
  handleCLick?: () => void;
}

export function Button({ children, handleCLick }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleCLick}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}