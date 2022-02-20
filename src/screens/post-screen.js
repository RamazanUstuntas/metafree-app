// import react-native components you use
import { View, ScrollView } from "react-native";
// import react components you use
import { useEffect, useState } from "react";
// if you are using axios, import it
import axios from "axios";
// Post box context design
import {PostCard} from "../components/Card";

// Create Post Screen
export default function PostScreen() {
  // Create Statements
  const [users, setUsers] = useState([]);

  // The useEffect Hook allows you to perform side effects in your components.
  // Example: fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    // get jsonplaceholder datas
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
              <PostCard
                title={item.title}
                text={item.body}
                key={key}
              ></PostCard>
            );
          })
        }
      </ScrollView>
    </View>
  );
}
