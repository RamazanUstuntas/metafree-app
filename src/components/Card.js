import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
// for icons
import IconAwe from "react-native-vector-icons/FontAwesome";
import IconAnt from "react-native-vector-icons/AntDesign";
// the style file for the layout of the card
import styles from "../styles/Card.style";

// A card component with which we will list each post
// because it has been used repeatedly
const PostCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* these props will be sent from the place where the component is used */}
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity
          style={styles.button_like}
          onPress={() => Alert.alert(`This post is liked successfully.`)}
        >
          <IconAwe name="heart" size={30} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_comment}
          onPress={() => Alert.alert(`You have commented to post.`)}
        >
          <IconAwe name="comment" size={30} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
// A card component with which we will list each user's info
// because it has been used repeatedly
const UserCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* these props will be sent from the place where the component is used */}
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity
          style={styles.button_1}
          onPress={() =>
            Alert.alert(`You have viewed ${props.title}'s profile.`)
          }
        >
          <IconAnt name="profile" size={30} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_2}
          onPress={() =>
            Alert.alert(`A friend request was sent to ${props.title}`)
          }
        >
          <IconAnt name="adduser" size={30} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { PostCard, UserCard };
