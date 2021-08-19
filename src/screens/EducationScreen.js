import React, { useContext, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as UserContext } from '../context/UserContext';
import { Context as EducationContext } from '../context/EducationContext';
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EducationScreen = ({ navigation }) => {
    const {getUserDOB} = useContext(UserContext);
    const { state, getEducationRange } = useContext(EducationContext);
    const date1 = new Date();
    const date2 = getUserDOB();
    const dateDiff = (Math.abs(date2-date1))/ (1000 * 60 * 60 * 24 * 365) ;

    useEffect(() => {
        //when the screen is opened get all the education contents
        if (dateDiff > 0 && dateDiff < 11) {
            getEducationRange(1);
        } else if (dateDiff > 10 && dateDiff < 18) {
            getEducationRange(2);
        } else {
            getEducationRange(3);
        }

        const listener = navigation.addListener('didFocus', () => {            
            if (dateDiff > 0 && dateDiff < 11) {
                getEducationRange(1);
            } else if (dateDiff > 10 && dateDiff < 18) {
                getEducationRange(2);
            } else {
                getEducationRange(3);
            }
        });
        return () => {
            listener.remove();
        };
    }, []);


    return (
        <View style={styles.screenStyle}>
            <FlatList
                data={state}
                keyExtractor={(education) => education._id}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('content', { id: item.item._id })}>
                            <View style={styles.topicStyle}>
                                <Text style={styles.topicText}>{item.item.topic}</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={30} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

EducationScreen.navigationOptions = () => {
    return {
        title: "Education",
        headerStyle: {
            backgroundColor: '#00BAFF'
        }
    }
}

const styles = StyleSheet.create({
    topicStyle: {
        borderColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10
    },
    topicText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    screenStyle: {
        flex: 1,
        backgroundColor: '#6AC9F1'
    }
});

export default EducationScreen;
