import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LeftArrow from '../newIcons/chevron-left.svg'
import HelpArrow from '../newIcons/arrowHelp.svg'

const Help = ({navigation}: any) => {

  function handleBackPress() {
    navigation.goBack();
  }

  function questionNavigate(which: number) {
    switch (which) {
      case 1:
        navigation.navigate('Answer', {title: 'האם אפשר להוציא מטען ללא האפליקציה?', body: 'body1'})
      case 2:
        navigation.navigate('Answer', {title: 'האם אפשר להוציא מטען ללא האפליקציה?', body: 'body1'})
      case 3:
        navigation.navigate('Answer', {title: 'האם אפשר להוציא מטען ללא האפליקציה?', body: 'body1'})
      case 4:
        navigation.navigate('Answer', {title: 'האם אפשר להוציא מטען ללא האפליקציה?', body: 'body1'})
      case 5:
        navigation.navigate('Answer', {title: 'האם אפשר להוציא מטען ללא האפליקציה?', body: 'body1'})
    }
  }

  return (
    <ImageBackground style={styles.container} source={require('../newImages/Rectangle.png')}>
      <View style={styles.topView}>
        <TouchableOpacity>
          <LeftArrow style={styles.arrowIcon} onPress={() => handleBackPress()}/>
        </TouchableOpacity>
        <Text style={styles.titleText}>Help</Text>
      </View>
      <View style={styles.nestedContainer}>
        <TouchableOpacity style={styles.questionContainer} onPress={() => questionNavigate(1)}>
          <HelpArrow style={styles.arrowHelp}/>
          <Text style={styles.questionText}>האם אפשר להוציא מטען ללא האפליקציה?</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
        <TouchableOpacity style={styles.questionContainer} onPress={() => questionNavigate(2)}>
          <HelpArrow style={styles.arrowHelp}/>
          <Text style={styles.questionText}>כיצד מחייבים אותי?                                      </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
        <TouchableOpacity style={styles.questionContainer} onPress={() => questionNavigate(3)}>
          <HelpArrow style={styles.arrowHelp}/>
          <Text style={styles.questionText} >מה עלויות השכרת מטען InPower?           </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
        <TouchableOpacity style={styles.questionContainer} onPress={() => questionNavigate(4)}>
          <HelpArrow style={styles.arrowHelp}/>
          <Text style={styles.questionText}>איך משתמשים באפליקציה?                        </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
        <TouchableOpacity style={styles.questionContainer} onPress={() => questionNavigate(5)}>
          <HelpArrow style={styles.arrowHelp}/>
          <Text style={styles.questionText}>איך משתמשים במטען?                               </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
      </View>
    </ImageBackground>
  )
}

export default Help

const styles = StyleSheet.create({

  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  topView: {
    flexDirection: 'row',
    marginTop: 43,
  },

  titleText: {
    fontSize: 21,
    color: '#FFFFFF',
    fontFamily: 'MontserratSemiBold',
    marginLeft: 124,
  },

  arrowIcon: {
    marginTop: 5,
    marginLeft: 30
  },

  nestedContainer: {
    position: 'absolute',
    marginTop: 0.13 * Dimensions.get('window').height,
    height: 0.87 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  questionContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15
  },

  horizontalLine: {
    width: 260,
    height: 1,
    backgroundColor: 'rgba(199, 199, 204, 0.5)',
    marginLeft: 250
  },

  questionText: {
    fontSize: 16,
    color: '#3D003E',
    fontFamily: 'MontserratRegular'
  },

  arrowHelp: {
    marginRight: 25,
    marginTop: 4
  }

});