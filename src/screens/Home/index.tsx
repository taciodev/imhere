import React from "react";
import { Text, View, TextInput } from "react-native";

import { Button } from "../../components/Button";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participant, setParticipant] = React.useState(["Taciano da Hora", "Beatriz Guedes", "Thiciane da Hora", "Thalisson da Hora"]);

  const handleParticipantAdd = () => {
    console.log("Clicou no botão!");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <Button>
          +
        </Button>
      </View>

      {participant.map((name) => (
        <Participant key={name} name={name} />
      ))}
    </View>
  );
}
