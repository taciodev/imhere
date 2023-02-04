import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = React.useState<string[]>([]);
  const [participantName, setParticipantName] = React.useState("");

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante já existe", "Já possui na lista um participante com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }

  const handleParticipantRemove = (name: string) => {
    return Alert.alert("Deletar", `Deseja deletar ${name} da sua lista de participantes?`, [
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
          value={participantName}
          onChangeText={text => setParticipantName(text)}
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
