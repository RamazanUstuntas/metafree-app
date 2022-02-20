import React from "react";
import { View } from "react-native";
// to create interesting shapes
import Svg, { Path } from "react-native-svg";

// The footer shape of the login and register screen
export function WavyFooter({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={{ height: 160 }}>
        {/* Sub-Shape */}
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: "-23%" }}
        >
          <Path
            fill="#c9f8ff"
            fillOpacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,160C480,117,600,75,720,96C840,117,960,203,1080,197.3C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></Path>
        </Svg>
        {/* Main Shape */}
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ top: "-14%" }}
        >
          <Path
            fill="#2bbafc"
            fillOpacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,160C480,117,600,75,720,96C840,117,960,203,1080,197.3C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

// The header shape of the login and register screen
export function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={{ height: 160 }}>
        {/* Sub-Shape */}
        <Svg
          height="75%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: "5%" }}
        >
          <Path
            fill="#faf3de"
            fillOpacity="1"
            d="M0,320L60,288C120,256,240,192,360,186.7C480,181,600,235,720,256C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></Path>
        </Svg>
        {/* Main Shape */}
        <Svg
          height="70%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ top: "-8%" }}
        >
          <Path
            fill="#ff913d"
            fillOpacity="1"
            d="M0,320L60,288C120,256,240,192,360,186.7C480,181,600,235,720,256C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}
