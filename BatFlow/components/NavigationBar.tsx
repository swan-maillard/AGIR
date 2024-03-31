import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../pages/Styles.tsx';
import Svg, { Path } from 'react-native-svg';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const route = useRoute();

  const colorIcon = (name: string) => (name === route.name ? colors.primary : colors.black);
  const colorBorder = (name: string) => (name === route.name ? colors.primary : '#F0F0F0E5');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          borderTopColor: colorBorder('Profile'),
          borderTopWidth: 3,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Svg height="30" width="30" viewBox="0 0 24 24" fill={colorIcon('Profile')}>
          <Path d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494l9-8zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333-6 5.333zM13 19v-4h-2v4h2z" />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderTopColor: colorBorder('Stats'),
          borderTopWidth: 3,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Stats')}
      >
        <Svg height="30" width="30" viewBox="0 0 15 15" fill={colorIcon('Stats')}>
          <Path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z" />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderTopColor: colorBorder('Information'),
          borderTopWidth: 3,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Information')}
      >
        <Svg height="30" width="30" viewBox="0 0 20 20" fill={colorIcon('Information')}>
          <Path d="m4.02682 2.5v.5h-1.52682c-.27614 0-.5.22386-.5.5v13c0 .2761.22386.5.5.5h15c.2761 0 .5-.2239.5-.5v-13c0-.27614-.2239-.5-.5-.5h-1.5268v-.5c0-.27614-.2239-.5-.5-.5h-3.0281c-.9425 0-1.8255.40492-2.4451 1.0902-.61965-.68528-1.50259-1.0902-2.44505-1.0902h-3.02813c-.27614 0-.5.22386-.5.5zm10.94638.96416c-.0009.01184-.0013.02379-.0013.03584s.0004.024.0013.03584v10.40536h-2.353c-.7846 0-1.5271.271-2.1202.7433v-10.60561c.4263-.67222 1.1588-1.07889 1.9451-1.07889h2.5281zm1 .53584h1.0268v12h-6.373c.4515-.6592 1.1943-1.0588 1.9932-1.0588h2.853c.2761 0 .5-.2239.5-.5zm-8.59343 10.9412c.79892 0 1.54168.3996 1.99319 1.0588h-6.37296v-12h1.02682v10.4412c0 .2761.22386.5.5.5zm-2.35295-1v-10.40537c.00084-.01183.00127-.02378.00127-.03583s-.00043-.024-.00127-.03583v-.46417h2.52813c.78624 0 1.51879.40667 1.94505 1.07889v10.60561c-.59312-.4723-1.33559-.7433-2.12023-.7433z" />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderTopColor: colorBorder('Settings'),
          borderTopWidth: 3,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Settings')}
      >
        <Svg height="30" width="30" viewBox="0 0 512 512" fill={colorIcon('Settings')}>
          <Path d="m262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0 -57.4-57.4zm154.1 63.69a154.34 154.34 0 0 1 -1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1 -13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0 -15.17 1.75 164.48 164.48 0 0 1 -21.54 12.54 15.94 15.94 0 0 0 -8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1 -10.68 9.17h-85.54a11.11 11.11 0 0 1 -10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0 -9-12.22 155.3 155.3 0 0 1 -21.46-12.57 16 16 0 0 0 -15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1 -13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0 -6.07-13.94l-38.19-30a10.81 10.81 0 0 1 -2.37-13.68l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75 164.48 164.48 0 0 1 21.54-12.54 15.94 15.94 0 0 0 8.82-12.14l6.73-47.89a11.08 11.08 0 0 1 10.68-9.17h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1 -2.45 13.75l-38.21 30a16.05 16.05 0 0 0 -6.05 14.08c.33 4.14.55 8.3.55 12.47z" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F0F0E5',
    width: '100%',
    borderColor: '#ccc',
    borderTopWidth: 1,
  },
});

export default NavigationBar;
