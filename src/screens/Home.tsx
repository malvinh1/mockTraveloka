import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import theme from '../constants/theme';
import SearchBar from '../components/SearchBar';
import menus from '../types/Menus';
import {NavigationProp} from '../types/Navigation';

export default function HomeScreen() {
  let {navigate} = useNavigation<NavigationProp<'Home'>>();
  let [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <SearchBar
          searchText={searchText}
          onChangeText={(value) => setSearchText(value)}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="menu" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.userInfoContainer}>
          <UserInfo onPress={() => navigate('ScanQR')} />
        </View>
        <View style={styles.menusContainer}>
          {menus.map((item, index) => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                paddingTop: 24,
                width: 74,
              }}
              key={index}
            >
              <View style={[styles.menu, {backgroundColor: item.color}]}>
                <MaterialCommunityIcons
                  name={item.icon}
                  color="#fff"
                  size={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  paddingTop: 5,
                  textAlign: 'center',
                  opacity: 0.7,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView horizontal={true} style={{paddingHorizontal: 12}}>
          {menus.map((item, index) => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 12,
                width: 74,
              }}
              key={index}
            >
              <View style={[styles.menu]}>
                <MaterialCommunityIcons
                  name={item.icon}
                  color={theme.colors.secondary}
                  size={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  paddingTop: 5,
                  textAlign: 'center',
                  opacity: 0.7,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{padding: 24}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            The Latest News From Traveloka
          </Text>
          <Text style={{fontSize: 16, paddingTop: 5, opacity: 0.6}}>
            Stay informed of the latest feature updates
          </Text>
          <ScrollView horizontal={true}>
            {[1, 2, 3].map((_, index) => (
              <TouchableOpacity
                style={{paddingTop: 10, marginRight: 10, width: 300}}
                key={index}
              >
                <ImageBackground
                  source={require('../../assets/news.png')}
                  resizeMode="contain"
                  borderRadius={8}
                  style={{height: 150, width: 300}}
                />
                <Text style={{fontSize: 16, fontWeight: '600', paddingTop: 5}}>
                  Worry free stay!
                </Text>
                <Text style={{opacity: 0.6}}>
                  Flexible booking, high-speed internet, in-room breakfast and
                  much more
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{padding: 24}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            Important Notice
          </Text>
          <Text style={{fontSize: 16, paddingTop: 5, opacity: 0.6}}>
            Travel information and refund/reschedule guide
          </Text>
          <ScrollView horizontal={true}>
            {[1, 2, 3].map((_, index) => (
              <TouchableOpacity
                style={{paddingTop: 10, marginRight: 10, width: 300}}
                key={index}
              >
                <ImageBackground
                  source={require('../../assets/notice.png')}
                  resizeMode="contain"
                  borderRadius={8}
                  style={{height: 150, width: 300}}
                />
                <Text style={{fontSize: 16, fontWeight: '600', paddingTop: 5}}>
                  Worry free stay!
                </Text>
                <Text style={{opacity: 0.6}}>
                  Flexible booking, high-speed internet, in-room breakfast and
                  much more
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function UserInfo(props: {onPress?: () => void}) {
  let {onPress} = props;
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View style={styles.avatar}>
            <Text style={{color: theme.colors.secondary}}>MH</Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 10}}>
            Malvin Hariyanto
          </Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={theme.colors.primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity style={styles.userMenu}>
          <MaterialCommunityIcons
            name="coin"
            color={theme.colors.primary}
            size={20}
          />
          <Text style={{fontWeight: '600', fontSize: 12, paddingHorizontal: 5}}>
            0 Points
          </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            color={theme.colors.primary}
            size={12}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.userMenu, {marginLeft: 10}]}>
          <MaterialCommunityIcons
            name="wallet"
            color={theme.colors.primary}
            size={20}
          />
          <Text style={{fontWeight: '600', fontSize: 12, paddingHorizontal: 5}}>
            Payments
          </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            color={theme.colors.primary}
            size={12}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.userMenu, {marginLeft: 10}]}>
          <MaterialCommunityIcons
            name="calendar-outline"
            color={theme.colors.primary}
            size={20}
          />
          <Text style={{fontWeight: '600', fontSize: 12, paddingHorizontal: 5}}>
            Pay Later
          </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            color={theme.colors.primary}
            size={12}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#ddd',
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  userInfoContainer: {
    height: 100,
    backgroundColor: '#eee',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  logo: {
    width: 36,
    height: 36,
  },
  menu: {
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  menusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  userMenu: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 2,
  },
});
