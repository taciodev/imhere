import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipant] = React.useState(["Taciano da Hora", "Thalisson da Hora", "Thiciane da Hora", "Jorge da Hora", "Aline da Hora", "Beatriz Guedes", "Roberta Conceição", "Aymmê Mendes", "Nino Cabeção", "Junior Guedes", "Emily Correia", "Jack Sparrow"]);

  const handleParticipantAdd = () => {
    if (participants.includes("Taciano da Hora")) {
      Alert.alert("Participante já existe", "Já possui na lista um participante com esse mesmo nome.");
    }
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Deletar", `Deseja deletar ${name} da sua lista de participantes?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante deletado !")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
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
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}
