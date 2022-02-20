// import react-native components you use
import { View, ScrollView } from "react-native";
// import react components you use
import { useEffect, useState } from "react";
// if you are using axios, import it
import axios from "axios";
// User box context design
import {UserCard} from "../components/Card";

// Users Screen
export default function UserScreen() {
  const [users, setUsers] = useState([]);

  // The useEffect Hook allows you to perform side effects in your components.
  // Example: fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    // get placeholder datas
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      <ScrollView>
        {
          // Create Custom Table View
          users.map((item, key) => {
            return (
              <UserCard
                title={item.name}
                text={item.address.city}
                key={key}
              ></UserCard>
            );
          })
        }
      </ScrollView>
    </View>
  );
}
