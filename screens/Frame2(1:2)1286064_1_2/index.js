import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_3}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7795a894-a296-4516-b08b-b22f5d7fb363"
          }}
          style={styles.ImageBackground_1_4}
        />
        <View style={styles.View_1_5}>
          <View style={styles.View_1_6}>
            <Text style={styles.Text_1_6}>12:00</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22d8ec2d-b79f-4ad2-a675-53fb791b6eab"
            }}
            style={styles.ImageBackground_1_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81ed6ccd-6712-479d-bf72-6980e58c0fb4"
            }}
            style={styles.ImageBackground_1_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eec01aff-7d9f-4d34-84e4-320b1f4c4b55"
            }}
            style={styles.ImageBackground_1_9}
          />
        </View>
        <View style={styles.View_1_12}>
          <Text style={styles.Text_1_12}>Congratulate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88a9edd3-8e64-4b8e-96b4-4f727f75a7e5"
          }}
          style={styles.ImageBackground_1_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ff3cca4-8b7c-42b7-9c36-c6ad5808ea17"
          }}
          style={styles.ImageBackground_1_14}
        />
        <View style={styles.View_1_18} />
        <View style={styles.View_1_19}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2082b79-d0f0-4c9a-ba27-7fc0c2cfce73"
            }}
            style={styles.ImageBackground_1_20}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5c9ffb9-c58b-4eb0-b65b-45013b85b02c"
            }}
            style={styles.ImageBackground_1_21}
          />
          <View style={styles.View_1_22} />
          <View style={styles.View_1_23} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22ab0a62-d362-4da4-9234-0cff08dab83a"
          }}
          style={styles.ImageBackground_1_24}
        />
        <View style={styles.View_1_25}>
          <Text style={styles.Text_1_25}>Sign Up</Text>
        </View>
        <View style={styles.View_1_26}>
          <Text style={styles.Text_1_26}>It’s easier to sing up new</Text>
        </View>
        <View style={styles.View_1_27} />
        <TouchableOpacity
          style={styles.TouchableOpacity_1_28}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2"))
          }
        />
        <View style={styles.View_1_29}>
          <Text style={styles.Text_1_29}>Continue with Facebook</Text>
        </View>
        <View style={styles.View_1_30}>
          <Text style={styles.Text_1_30}>Continue with Google</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87754a1d-a1c8-4b1c-8b52-4157ca3e1a80"
          }}
          style={styles.ImageBackground_1_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d882011d-93e2-429b-860b-eae43c8ea670"
          }}
          style={styles.ImageBackground_1_32}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_1_33}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2"))
          }
        >
          <Text style={styles.Text_1_33}>Already have acoount? Login</Text>
        </TouchableOpacity>
        <View style={styles.View_1_34} />
        <View style={styles.View_1_35} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0ae1bf6-1e26-4889-8cb9-840a54dbf869"
          }}
          style={styles.ImageBackground_1_36}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122%") },
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_4: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("-10%")
  },
  View_1_5: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_1_6: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_6: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_7: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_1_8: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1_9: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_1_12: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_1_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_13: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19%")
  },
  ImageBackground_1_14: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("111%")
  },
  View_1_18: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_1_19: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%")
  },
  ImageBackground_1_20: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_21: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_22: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(119, 119, 119, 1)"
  },
  View_1_23: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(119, 119, 119, 1)"
  },
  ImageBackground_1_24: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("104%")
  },
  View_1_25: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_1_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_26: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_27: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("72%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_1_28: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_29: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_1_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_30: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_1_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_31: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%"),
    resizeMode: "cover"
  },
  ImageBackground_1_32: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("83%"),
    resizeMode: "cover"
  },
  TouchableOpacity_1_33: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_1_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_34: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("95%"),
    backgroundColor: "rgba(243, 38, 25, 1)",
    opacity: 0.5
  },
  View_1_35: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("10%"),
    backgroundColor: "rgba(232, 226, 226, 1)"
  },
  ImageBackground_1_36: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
