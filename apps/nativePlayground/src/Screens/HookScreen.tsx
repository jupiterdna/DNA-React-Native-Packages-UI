import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDNAWind} from '@rndna/base_style';
import {DNADivider} from '@rndna/divider';
import MapView, {PROVIDER_GOOGLE, LatLng} from 'react-native-maps';

import Geocoder from 'react-native-geocoder';
import {downPin, upPin} from './assets/';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {ArrowLeftIcon, LocationIcon, PencilIcon} from '@rndna/icon';
import BottomSheet, {BottomSheetRefProps} from './Component/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {DNATextField} from '@rndna/textfield';
import {useDebounce} from './Component/hooks';
import {DNAIconButton} from '@rndna/icon_button';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const HookScreen = () => {
  const dw = useDNAWind();

  const [value, setValue] = useState('');

  const [selected, setSelected] = useState<LatLng>({
    latitude: 10.283168897873798,
    longitude: 123.87454133480789,
  });

  const [isTapped, setIsTapped] = useState(false);
  const [address, setAddress] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const val = useDebounce(open, 200);

  const mapRef = useRef(null);
  const googleRef = useRef<any>(null);

  const ref = useRef<BottomSheetRefProps>(null);

  const getFormmatedAddress = useMemo(() => {
    return address?.length ? address[0].formattedAddress : '';
  }, [address]);

  useEffect(() => {
    const NY = {
      lat: selected.latitude,
      lng: selected.longitude,
    };

    Geocoder.geocodePosition(NY)
      .then(res => {
        setAddress(res);
        setTimeout(() => {
          googleRef.current?.focus();
          googleRef.current?.setAddressText(res[0].formattedAddress);
        }, 300);
      })
      .catch(err => {
        setAddress(undefined);
      });
  }, [selected, open]);

  return (
    <>
      <MapView
        onLayout={e => {
          setSize({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
          });
        }}
        onTouchStart={e => {
          setIsTapped(true);
        }}
        onTouchEnd={e => {
          setIsTapped(false);
        }}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={res => {
          setSelected(res);
        }}
        style={dw('h-full')}
        initialRegion={{
          latitude: 10.283168897873798,
          longitude: 123.87454133480789,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Image
          source={isTapped ? upPin : downPin}
          width={30}
          height={30}
          resizeMode="contain"
          style={{
            left: size.width / 2 - 15,
            top: size.height / 2 - 15,
            position: 'absolute',
          }}
        />
      </MapView>
      <GestureHandlerRootView
        style={{
          position: 'absolute',
          width: '100%',
        }}>
        <View style={styles.container}>
          <BottomSheet
            ref={ref}
            onEnd={state => {
              setOpen(state);
            }}>
            <View style={{padding: 20}}>
              {val ? (
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <DNAIconButton
                      variant="flat"
                      icon={<ArrowLeftIcon size={20} color={'#f14848'} />}
                      onPress={() => {
                        ref.current?.scrollTo(-300);
                      }}
                    />

                    <View
                      style={{
                        flex: 1,
                        height: 500,
                      }}>
                      <GooglePlacesAutocomplete
                        ref={googleRef}
                        // currentLocation
                        GooglePlacesSearchQuery={{
                          rankby: 'distance',
                        }}
                        placeholder="Search"
                        textInputProps={{
                          InputComp: TextInput,
                          style: {
                            flex: 1,
                            borderColor: '#a3a1a1',
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 10,
                          },
                        }}
                        // textInputHide

                        onPress={(data, details = null) => {
                          // 'details' is provided when fetchDetails = true
                          console.log('dataa', data, details);
                        }}
                        query={{
                          key: 'AIzaSyD5_YZpBspYr4g_cVMfhN-V07L-SpPjqMg',
                          language: 'en',
                        }}
                      />
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    rowGap: 20,
                  }}>
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <LocationIcon size={20} color={'#f14848'} />
                    <View style={{width: '80%'}}>
                      <DNAText
                        style={{
                          color: '#222',

                          fontSize: 15,
                        }}>
                        {getFormmatedAddress}
                      </DNAText>
                    </View>
                    <PencilIcon size={20} color={'#333'} />
                  </View>

                  <DNAButton
                    label="Confirm"
                    onPress={() => {
                      console.log('pressed');
                    }}
                  />
                </View>
              )}
            </View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});

export default HookScreen;
