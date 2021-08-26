import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Caller from "../components/Caller";
import { Context as UserContext } from "../context/UserContext";
import "intl";
import "intl/locale-data/jsonp/en";

const ClinicScreen = ({ navigation }) => {
  const {
    state: { appointments, clinic },
    getEmailAndAppointments,
    getDentalClinic,
  } = useContext(UserContext);

  useEffect(() => {
    getEmailAndAppointments();
    getDentalClinic();

    const listener = navigation.addListener("didFocus", () => {
      getEmailAndAppointments();
    });
    return () => {
      listener.remove();
    };
  }, []);

  function convertDate(mongoDate) {
    let date = new Date(mongoDate);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

    let stringDate = `${day} ${month} ${year}`;
    return stringDate;
  }

  if (clinic === null) {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screenStyle}>
        <Text>{clinic.name}</Text>

        <Caller
          phone={clinic.phone}
          email={clinic.email}
          url={clinic.bookingURL}
        />

        <Text>Your appointments</Text>
        <FlatList
          data={appointments}
          keyExtractor={(appointment) => appointment._id}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("content", { id: item.item._id })
                }
              >
                <View style={styles.topicStyle}>
                  <Text style={styles.topicText}>
                    {convertDate(item.item.date)}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-right" size={30} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

ClinicScreen.navigationOptions = {
  title: "Clinic",
  tabBarIcon: <MaterialCommunityIcons name="toothbrush-paste" size={25} />,
};

ClinicScreen.navigationOptions = () => {
  return {
    title: "Clinic",
    headerStyle: {
      backgroundColor: "#00BAFF",
    },
  };
};

const styles = StyleSheet.create({
  caller: {
    marginTop: 0,
  },
  topicStyle: {
    borderColor: "black",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  topicText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  screenStyle: {
    flex: 1,
    backgroundColor: "#6AC9F1",
  },
});

export default ClinicScreen;
