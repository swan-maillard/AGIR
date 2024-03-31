import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import styles, { colors } from './Styles';
import TopWave from '../components/TopWave';
import CustomText from '../components/CustomText';
import { CommonActions } from '@react-navigation/native';
import Header from '../components/Header.tsx';
import NavigationBar from '../components/NavigationBar.tsx';
import { AnswersPBAC, DataContext } from '../context/DataContext.tsx';

const QuestionResultScreen = ({ navigation }: any) => {
  const [score, setScore] = useState(0);
  const data = useContext(DataContext);
  const [answersPBAC, setAnswersPBAC] = useState<AnswersPBAC[]>([]);

  const retrieveData = useCallback(() => {
    setAnswersPBAC(data.getAnswersPBAC());
  }, [data]);

  useEffect(() => retrieveData, [retrieveData]);
  navigation.addListener('focus', () => retrieveData());

  {
    /*
    SCORES
    ------
    pad light     = 1
    pad medium    = 5
    pad heavy     = 20
    tampon light  = 1
    tampon medium = 5
    tampon heavy  = 10
    clot 1p       = 1
    clot 50p      = 5
    flooding      = 5
    */
  }

  useEffect(() => {
    if (answersPBAC.length > 0) {
      const lastAnswers = answersPBAC[answersPBAC.length - 1];
      console.log('Last answers:', lastAnswers);
      let newScore = 0;
      switch (lastAnswers[1]) {
        case 'low':
          newScore += 1;
          break;
        case 'medium':
          newScore += 5;
          break;
        case 'high':
          newScore += lastAnswers[0] === 'pad' ? 20 : 10;
          break;
      }

      switch (lastAnswers[2]) {
        case 'clot-small':
          newScore += 1;
          break;
        case 'clot-big':
          newScore += 5;
          break;
      }

      if (lastAnswers[3] === 'flooding') {
        newScore += 5;
      }

      setScore(newScore);
    }
  }, [answersPBAC]);

  useEffect(() => {
    console.log('Score : ' + score);
  }, [score]);

  const handleClick = async () => {
    navigation.dispatch(CommonActions.reset({ routes: [{ name: 'Profile' }] }));
  };

  const customStyles = StyleSheet.create({
    header: {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 20,
    },
    container: {
      position: 'relative',
      backgroundColor: colors.white,
      height: '100%',
      width: '100%',
      color: colors.black,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 90,
      gap: 10,
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 20,
      width: '90%',
    },
    title: {
      color: colors.black,
      fontWeight: '400',
      fontFamily: 'Kalnia-Regular',
      fontSize: 40,
    },
    loginButton: {
      backgroundColor: colors.primary,
      width: '100%',
    },
  });

  return (
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Header />
        <TopWave />
        <ScrollView style={{ width: '100%' }}>
          <View style={customStyles.container}>
            <View style={customStyles.actions}>
              <CustomText style={{ fontSize: 20 }}>You got {score} point(s)</CustomText>
              {score > 90 ? (
                <CustomText style={{ fontSize: 20 }}>
                  This might indicate that you have heavy menstrual bleeding.
                </CustomText>
              ) : (
                <CustomText style={{ fontSize: 20 }}>This is a very healthy result!</CustomText>
              )}
              <Pressable
                style={{
                  ...styles.button,
                  ...customStyles.loginButton,
                }}
                onPress={handleClick}
              >
                <CustomText style={{ color: 'white' }}>Back to profile</CustomText>
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <NavigationBar />
      </View>
    </View>
  );
};

export default QuestionResultScreen;
