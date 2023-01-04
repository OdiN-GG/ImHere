import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participants } from '../../Components/Participants';
import { styles } from './styles';

export function Home(){

    const [ participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('')
    
    function handleParticipantAdd(){
        if (participants.includes(participantName)){
            return Alert.alert('Participante ja existe')
        }
        setParticipants(prevState =>[...prevState, participantName]);
        setParticipantName('');
        
    }

    function handlerParticipantRemove(tarefa: string){
        
        Alert.alert('Remover', `Remover o participant ${tarefa}?` ,[
           {
                text: 'Sim',
                onPress: () => setParticipants(prevStat => prevStat.filter(participant => participant !== tarefa))
           },
           {
            text: 'Não',
            style: 'cancel'
           }
        ]);

    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>

                Terça, 4 de outubro de 2022.
            </Text>
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantName}
                    value={participantName}
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
            renderItem={({item}) => (
                < Participants 
                name={item}
                key={item}
                onRemove={ ( )  => handlerParticipantRemove ( item )}
                />
            )}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.ListEmpatyComponet}>
                    Niguem foi adicionado a lista.
                </Text>
            )}
            />
        </View>
    )
}