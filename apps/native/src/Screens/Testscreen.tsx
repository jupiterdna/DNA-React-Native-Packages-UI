import {
  View,
  StyleSheet,
  useColorScheme,
  ViewStyle,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {DNACollapsible} from '@rndna/collapsible';
import {DNAText} from '@rndna/text';
import {DNAImage} from '@rndna/image';
import {DNARadioButton} from '@rndna/radiobutton';
import {DNACheckbox} from '@rndna/checkbox';
import {
  DNAAvatar,
  DNAAvatarWithBadge,
  DNAAvatarWithStatus,
} from '@rndna/avatar';
import {DNAAvatarGroup} from '@rndna/avatar_group';
import {DNAButton} from '@rndna/button';
import {DNAChip} from '@rndna/chip';
import {InfoCircleIcon, UserIcon} from '@rndna/icon';
import {DNAFab} from '@rndna/fab';
import {optionItems, FabItems, avatarGroup} from './constants';

const Testscreen: React.FC<any> = () => {
  const [options, setOptions] = useState(optionItems);
  const [cOptions, setCoptions] = useState(optionItems);

  const bg: ViewStyle =
    useColorScheme() === 'dark'
      ? {
          backgroundColor: '#333',
        }
      : {
          backgroundColor: '#fff',
        };

  //Handle for radiobutton
  const handleRadioButtonPress = (id: string) => {
    setOptions(prevOptions =>
      prevOptions.map(option => ({
        ...option,
        checked: option.id === id,
      })),
    );
  };

  //Handle for checkbox
  const handleCheckboxPress = (id: string) => {
    setCoptions(prevOptions =>
      prevOptions.map(option => ({
        ...option,
        checked: option.id === id ? !option.checked : option.checked,
      })),
    );
  };

  return (
    <View style={styles.flex}>
      <View style={[styles.container, bg]}>
        <DNAText type="h4" style={styles.header}>
          Native: {useColorScheme()} Mode
        </DNAText>
        <DNACollapsible title={'DNA Image'}>
          <ScrollView>
            <View style={styles.gap}>
              <DNAImage
                src={avatarGroup[0].src}
                fit="contain"
                ratio="4:3"
                size="xs"
              />
              <DNAImage
                src={avatarGroup[0].src}
                fit="contain"
                ratio="4:3"
                size="sm"
              />
              <DNAImage
                src={avatarGroup[0].src}
                fit="contain"
                ratio="4:3"
                size="md"
              />
              <DNAImage
                src={avatarGroup[0].src}
                fit="contain"
                ratio="4:3"
                size="lg"
              />
              <DNAImage
                src={avatarGroup[0].src}
                fit="contain"
                ratio="4:3"
                size="xl"
              />
            </View>
            <View style={styles.gap}>
              <DNAImage src={avatarGroup[0].src} ratio="4:3" size="xs" />
              <DNAImage src={avatarGroup[0].src} ratio="4:3" size="sm" />
              <DNAImage src={avatarGroup[0].src} ratio="4:3" size="md" />
              <DNAImage src={avatarGroup[0].src} ratio="4:3" size="lg" />
              <DNAImage src={avatarGroup[0].src} ratio="4:3" size="xl" />
            </View>
          </ScrollView>
        </DNACollapsible>
        <DNACollapsible title={'RadioButton'}>
          <View style={styles.gap}>
            {options.map(option => (
              <DNARadioButton
                key={option.id}
                id={option.id}
                disabled={option.disabled}
                checked={option.checked}
                label={`RadioBtn ${option.label}`}
                onPress={() => handleRadioButtonPress(option.id)}
              />
            ))}
          </View>
        </DNACollapsible>
        <DNACollapsible title={'Checkbox'}>
          <View style={styles.gap}>
            {cOptions.map(option => (
              <DNACheckbox
                key={option.id}
                id={option.id}
                disabled={option.disabled}
                checked={option.checked}
                label={`Checkbox ${option.label}`}
                onPress={() => handleCheckboxPress(option.id)}
              />
            ))}
          </View>
        </DNACollapsible>
        <DNACollapsible title={'Avatar Group'}>
          <View style={styles.gap}>
            <DNAAvatarGroup options={avatarGroup} color="info" size="xs" />
            <DNAAvatarGroup options={avatarGroup} color="danger" size="sm" />
            <DNAAvatarGroup options={avatarGroup} color="warning" size="md" />
            <DNAAvatarGroup options={avatarGroup} color="success" size="lg" />
            <DNAAvatarGroup options={avatarGroup} color="default" size="xl" />
          </View>
        </DNACollapsible>
        <DNACollapsible title={'Buttons'}>
          <ScrollView>
            <View style={styles.gap}>
              <DNAButton label="Button" size="xs" variant="soft" />
              <DNAButton label="Button" size="sm" variant="outlined" />
              <DNAButton label="Button" size="md" />
              <DNAButton label="Button" size="lg" variant="soft" />
              <DNAButton label="Button" size="lg" />
              <DNAButton label="Button" size="xl" />
            </View>
            <View style={styles.gap}>
              <DNAButton
                icon={InfoCircleIcon}
                label="Button"
                size="xs"
                variant="soft"
              />
              <DNAButton icon={InfoCircleIcon} label="Button" size="sm" />
              <DNAButton icon={InfoCircleIcon} label="Button" size="md" />
              <DNAButton icon={InfoCircleIcon} label="Button" size="lg" />
              <DNAButton icon={InfoCircleIcon} label="Button" size="xl" />
            </View>
            <View style={styles.gap}>
              <DNAButton icon={InfoCircleIcon} size="xs" variant="soft" />
              <DNAButton icon={InfoCircleIcon} size="sm" />
              <DNAButton icon={InfoCircleIcon} size="md" />
              <DNAButton icon={InfoCircleIcon} size="lg" />
              <DNAButton icon={InfoCircleIcon} size="xl" />
            </View>
          </ScrollView>
        </DNACollapsible>
        <DNACollapsible title={'Chips'}>
          <ScrollView>
            <View style={styles.gap}>
              <DNAChip label="Chip" size="xs" variant="soft" />
              <DNAChip label="Chip" size="sm" />
              <DNAChip label="Chip" size="md" />
              <DNAChip label="Chip" size="lg" />
              <DNAChip label="Chip" size="xl" />
            </View>
            <View style={styles.gap}>
              <DNAChip
                icon={InfoCircleIcon}
                label="Chip"
                size="xs"
                variant="soft"
              />
              <DNAChip icon={InfoCircleIcon} label="Chip" size="sm" />
              <DNAChip icon={InfoCircleIcon} label="Chip" size="md" />
              <DNAChip icon={InfoCircleIcon} label="Chip" size="lg" />
              <DNAChip icon={InfoCircleIcon} label="Chip" size="xl" />
            </View>
          </ScrollView>
        </DNACollapsible>
        <DNACollapsible title={'Avatar'}>
          <ScrollView>
            <View style={styles.gap}>
              <DNAAvatarWithBadge
                size="xs"
                badge={{
                  value: '99+',
                  color: 'danger',
                }}
              />
              <DNAAvatarWithBadge
                size="sm"
                badge={{
                  value: '99+',
                  color: 'danger',
                }}
              />
              <DNAAvatarWithBadge
                size="md"
                badge={{
                  value: '99+',
                  color: 'danger',
                }}
              />
              <DNAAvatarWithBadge
                size="lg"
                badge={{
                  value: '99+',
                  color: 'danger',
                }}
              />
              <DNAAvatarWithBadge
                size="xl"
                badge={{
                  value: '999+',
                  color: 'danger',
                }}
              />
            </View>
            <View style={styles.gap}>
              <DNAAvatarWithStatus
                size="xs"
                status={{
                  option: 'online',
                  value: 'test',
                }}
              />
              <DNAAvatarWithStatus
                size="sm"
                status={{
                  option: 'offline',
                  value: 'test',
                }}
              />
              <DNAAvatarWithStatus
                size="md"
                status={{
                  option: 'inactive',
                  value: 'test',
                }}
              />
              <DNAAvatarWithStatus
                size="lg"
                status={{
                  option: 'busy',
                  value: 'test',
                }}
              />
              <DNAAvatarWithStatus
                size="xl"
                status={{
                  option: 'online',
                  value: 'test',
                }}
              />
            </View>
            <View style={styles.gap}>
              <DNAAvatar size="xs" />
              <DNAAvatar size="sm" />
              <DNAAvatar size="md" />
              <DNAAvatar size="lg" />
              <DNAAvatar size="xl" />
            </View>
            <View style={styles.gap}>
              <DNAAvatar size="xs" name="Junie Rosales" />
              <DNAAvatar size="sm" name="Junie Rosales" />
              <DNAAvatar size="md" name="Junie Rosales" />
              <DNAAvatar size="lg" name="Junie Rosales" />
              <DNAAvatar size="xl" name="Junie Rosales" />
            </View>
            <View style={styles.gap}>
              <DNAAvatar
                size="xs"
                name="Junie Rosales"
                icon={UserIcon}
                imageSource={
                  'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
              <DNAAvatar
                size="sm"
                name="Junie Rosales"
                icon={UserIcon}
                imageSource={
                  'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
              <DNAAvatar
                size="md"
                borderRadius="squared"
                name="Junie Rosales"
                icon={UserIcon}
                imageSource={
                  'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
              <DNAAvatar
                size="lg"
                name="Junie Rosales"
                icon={UserIcon}
                imageSource={
                  'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
              <DNAAvatar
                size="xl"
                name="Junie Rosales"
                icon={UserIcon}
                imageSource={
                  'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
            </View>
          </ScrollView>
        </DNACollapsible>
        <View style={styles.fab}>
          <DNAFab
            items={FabItems}
            onPress={() => {
              console.log('Pressed Fab');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  header: {
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  gap: {
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    maxWidth: '100%',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default Testscreen;
