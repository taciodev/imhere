import { View, Text } from 'react-native';

import { Button } from '../Button';

import { styles } from './styles';

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Taciano da Hora</Text>
      <Button>
        -
      </Button>
    </View>
  )
}