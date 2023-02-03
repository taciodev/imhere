import { View, Text } from 'react-native';

import { Button } from '../Button';

import { styles } from './styles';

interface Props {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button handleCLick={onRemove}>
        -
      </Button>
    </View>
  )
}