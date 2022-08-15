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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4376967-5e38-4eaf-994b-6a728ef62be9"
        }}
        style={styles.ImageBackground_2_3}
      />
      <View style={styles.View_2_4}>
        <View style={styles.View_2_5}>
          <Text style={styles.Text_2_5}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00becb9a-6ca2-4417-96e8-d92d8401f51a"
          }}
          style={styles.ImageBackground_2_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb05c1a-807e-4c0e-8cc3-b07d332c2ed0"
          }}
          style={styles.ImageBackground_2_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e01d2f17-e72f-43e0-b62e-8566fe0ec4bc"
          }}
          style={styles.ImageBackground_2_8}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_11}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      />
      <View style={styles.View_2_12}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/705ef40a-ed4e-46df-b29f-a92f33973aa4"
          }}
          style={styles.ImageBackground_2_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b98d86-e087-4c95-a666-afccd92d7a1a"
          }}
          style={styles.ImageBackground_2_14}
        />
        <View style={styles.View_2_15} />
        <View style={styles.View_2_16} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2054d2f6-5a15-4225-9b8c-254c4d1b6691"
        }}
        style={styles.ImageBackground_2_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98d0201c-3f0c-467e-a92c-5ab16c0e13be"
        }}
        style={styles.ImageBackground_2_18}
      />
      <View style={styles.View_2_22} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa861126-27a4-4596-810c-1115a373ce88"
        }}
        style={styles.ImageBackground_2_23}
      />
      <View style={styles.View_2_24} />
      <View style={styles.View_2_25} />
      <View style={styles.View_2_26} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c59d69e3-8a7c-4a99-a644-5b55898d433a"
        }}
        style={styles.ImageBackground_2_27}
      />
      <View style={styles.View_2_28}>
        <Text style={styles.Text_2_28}>User Name</Text>
      </View>
      <View style={styles.View_2_29}>
        <Text style={styles.Text_2_29}>Email Address</Text>
      </View>
      <View style={styles.View_2_30}>
        <Text style={styles.Text_2_30}>Password</Text>
      </View>
      <View style={styles.View_2_31}>
        <Text style={styles.Text_2_31}>Santo Islam</Text>
      </View>
      <View style={styles.View_2_32}>
        <Text style={styles.Text_2_32}>santoislam@gmail.com</Text>
      </View>
      <View style={styles.View_2_33}>
        <Text style={styles.Text_2_33}>Enter Passoword</Text>
      </View>
      <View style={styles.View_2_34}>
        <View style={styles.View_2_35}>
          <Text style={styles.Text_2_35}>I accept the policy and terms</Text>
        </View>
        <View style={styles.View_2_36}>
          <View style={styles.View_2_37} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/031f9123-c777-4ebf-8cd0-7ad10ac381f5"
            }}
            style={styles.ImageBackground_2_38}
          />
        </View>
      </View>
      <View style={styles.View_2_39} />
      <View style={styles.View_2_40}>
        <Text style={styles.Text_2_40}>Sign Up</Text>
      </View>
      <View style={styles.View_2_41}>
        <Text style={styles.Text_2_41}>Hello,</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_2_3: {
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
  View_2_4: {
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
  View_2_5: {
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
  Text_2_5: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_6: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_2_7: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_2_8: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_11: {
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
  View_2_12: {
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
  ImageBackground_2_13: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_14: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_15: {
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
  View_2_16: {
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
  ImageBackground_2_17: {
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
  ImageBackground_2_18: {
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
  View_2_22: {
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
  ImageBackground_2_23: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_2_24: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_25: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_26: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("77%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_2_27: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  View_2_28: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_2_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_29: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_2_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_30: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_31: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_2_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_32: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_2_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_33: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_34: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("86%")
  },
  View_2_35: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_36: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_2_37: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(128, 128, 128, 1)"
  },
  ImageBackground_2_38: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_39: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("95%"),
    backgroundColor: "rgba(239, 32, 37, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_40: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_2_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_41: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
