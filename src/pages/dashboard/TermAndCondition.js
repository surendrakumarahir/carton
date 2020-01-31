import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class TermAndCondition extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>TERM AND CONDITIONS</Text>
          <Text style={styles.title}>1. Introduction</Text>
          <Text>
            This following sets out the terms and conditions on which you may
            use the content on business-standard.com website,
            business-standard.com's mobile browser site, Business Standard
            instore Applications and other digital publishing services
            (www.smartinvestor.in, www.bshindi.com and www.bsmotoring,com) owned
            by Business Standard Private Limited, all the services herein will
            be referred to as Business Standard Content Services.
          </Text>
          <Text style={styles.title}>2. Registration Access and Use</Text>
          <Text>
            This following sets out the terms and conditions on which you may
            use the content on business-standard.com website,
            business-standard.com's mobile browser site, Business Standard
            instore Applications and other digital publishing services
            (www.smartinvestor.in, www.bshindi.com and www.bsmotoring,com) owned
            by Business Standard Private Limited, all the services herein will
            be referred to as Business Standard Content Services.
          </Text>
          <Text style={styles.title}>3. Privacy Policy and Registration</Text>
          <Text>
            This following sets out the terms and conditions on which you may
            use the content on business-standard.com website,
            business-standard.com's mobile browser site, Business Standard
            instore Applications and other digital publishing services
            (www.smartinvestor.in, www.bshindi.com and www.bsmotoring,com) owned
            by Business Standard Private Limited, all the services herein will
            be referred to as Business Standard Content Services.
          </Text>
          <Text style={styles.title}>4. Personal Subscription Services</Text>
          <Text>
            This following sets out the terms and conditions on which you may
            use the content on business-standard.com website,
            business-standard.com's mobile browser site, Business Standard
            instore Applications and other digital publishing services
            (www.smartinvestor.in, www.bshindi.com and www.bsmotoring,com) owned
            by Business Standard Private Limited, all the services herein will
            be referred to as Business Standard Content Services.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TermAndCondition;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: wp(5),
    width: wp(90),
  },
  heading: {fontSize: 20, fontWeight: '800'},
  title: {
    fontSize: 17,
    marginVertical: 15,
    alignSelf: 'flex-start',
  },
});
