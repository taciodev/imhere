import React from "react";
import { Text, View, TextInput, ScrollView } from "react-native";

import { Button } from "../../components/Button";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participant, setParticipant] = React.useState(["Taciano da Hora", "Thalisson da Hora", "Thiciane da Hora", "Jorge da Hora", "Aline da Hora", "Beatriz Guedes", "Roberta Conceição", "Aymmê Mendes", "Nino Cabeção", "Junior Guedes", "Emily Correia", "Jack Sparrow"]);

  const handleParticipantAdd = () => {
    console.log("Você adicionou 1 item");
  }

  const handleParticipantRemove = () => {
    console.log("Voce removeu 1 item");
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
        <Button handleCLick={handleParticipantAdd}>
          +
        </Button>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participant && participant.map(name => (
          <Participant key={name} name={name} onRemove={handleParticipantRemove} />
        ))}
      </ScrollView>
    </View>
  );
}
