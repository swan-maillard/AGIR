import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import styles, { colors } from './Styles';
import TopWave from '../components/TopWave';
import CustomText from '../components/CustomText';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar.tsx';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { AnswersPBAC, DataContext } from '../context/DataContext.tsx';

const StatsScreen = ({ navigation, route }: any) => {
  const { index } = route.params;

  const data = useContext(DataContext);
  const [cycle, setCycle] = useState<string[]>([]);
  const [answersPBAC, setAnswersPBAC] = useState<AnswersPBAC[]>([]);
  const [scorePBAC, setScorePBAC] = useState(0);
  const [scoreSamanta, setScoreSamanta] = useState(0);

  const retrieveData = useCallback(() => {
    setCycle(data.getCycles()[index]);
    setAnswersPBAC(data.getAnswersPBAC()[index]);
    setScorePBAC(data.getUserData('scoresPBAC', [])[index]);
    setScoreSamanta(data.getUserData('scoresSamanta', [])[index]);
  }, [data, index]);

  useEffect(() => retrieveData, [retrieveData]);
  navigation.addListener('focus', () => retrieveData());

  const duration = useMemo(() => {
    if (cycle.length !== 2) {
      return 0;
    }
    const start = new Date(cycle[0]);
    const end = new Date(cycle[1]);
    return Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24) + 1);
  }, [cycle]);

  const isHealthy = useMemo(() => scorePBAC < 150 && (scoreSamanta < 3 || !scoreSamanta), [scorePBAC, scoreSamanta]);

  const customStyles = StyleSheet.create({
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
      paddingBottom: 30,
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '90%',
      flexGrow: 1,
      gap: 10,
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
              <View
                style={{
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Pressable onPress={() => navigation.navigate('Stats')}>
                  <Svg viewBox="0 0 192 512" height="50" width="50" fill={colors.primary}>
                    <Path d="m192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142l-128.662-128.662c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" />
                  </Svg>
                </Pressable>

                <View>
                  <CustomText
                    style={{
                      color: colors.primary,
                      ...styles.bold,
                      fontSize: 25,
                    }}
                  >
                    Cycle Overview
                  </CustomText>
                  <CustomText>
                    {new Date(cycle[0]).toLocaleDateString('en-us', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    -
                    {new Date(cycle[1]).toLocaleDateString('en-us', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </CustomText>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <Image source={require('./../assets/blood.png')} style={{ width: 30, height: 44 }} />
                <LinearGradient
                  colors={['#fc0e46', '#fd6085']}
                  useAngle={true}
                  angle={140}
                  style={{
                    ...styles.periodDurationContainer,
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',
                    width: '85%',
                  }}
                >
                  <View>
                    <CustomText style={styles.textDurationStat}>Your period lasted...</CustomText>
                    <CustomText style={styles.durationStat}>{duration} days</CustomText>
                  </View>
                </LinearGradient>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <LinearGradient
                  colors={['#fa7091', '#faa8ba']}
                  useAngle={true}
                  angle={140}
                  style={{
                    ...styles.periodDurationContainer,
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',
                    width: '80%',
                  }}
                >
                  <View>
                    <CustomText style={{ ...styles.durationStat, fontSize: 22 }}>
                      {answersPBAC.length} protection(s) used
                    </CustomText>
                  </View>
                </LinearGradient>
                <Image source={require('./../assets/towel.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={styles.statsContainer}>
                <>
                  <View style={styles.scoreContainer}>
                    <CustomText style={styles.descriptionStat}>Your PBAC score is</CustomText>
                    <CustomText
                      style={{
                        ...styles.bold,
                        fontSize: 25,
                        textAlign: 'center',
                        color: scorePBAC < 150 ? colors.green : colors.primary,
                      }}
                    >
                      {scorePBAC}
                    </CustomText>
                  </View>
                  <View style={styles.scoreContainer}>
                    <CustomText style={styles.descriptionStat}>
                      Your SAMANTA score is{!scoreSamanta && ' not known yet'}
                    </CustomText>
                    <CustomText
                      style={{
                        ...styles.bold,
                        fontSize: 25,
                        textAlign: 'center',
                        color: scoreSamanta < 3 ? colors.green : colors.primary,
                      }}
                    >
                      {scoreSamanta}
                    </CustomText>
                  </View>
                </>
              </View>
              <View style={{ gap: 10, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  {isHealthy && (
                    <Image source={require('./../assets/fertility.png')} style={{ width: 30, height: 30 }} />
                  )}
                  <CustomText
                    style={{
                      ...styles.bold,
                      color: isHealthy ? colors.green : colors.primary,
                      fontSize: 20,
                      textAlign: 'center',
                    }}
                  >
                    {isHealthy
                      ? 'Your period looks perfectly healthy!'
                      : 'You might suffer from Heavy Menstrual Bleeding. Please seek medical advice.'}
                  </CustomText>
                </View>

                <CustomText style={{ textAlign: 'center' }}>
                  A PBAC score <CustomText style={styles.bold}>greater or equal to 150</CustomText> or a Samanta score{' '}
                  <CustomText style={styles.bold}>greater or equal to 3</CustomText> might indicate that you suffer from
                  Heavy Menstrual Bleeding.
                </CustomText>
              </View>
            </View>
          </View>
        </ScrollView>
        <NavigationBar />
      </View>
    </View>
  );
};

export default StatsScreen;
