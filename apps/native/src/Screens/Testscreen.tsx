import {
  View,
  StyleSheet,
  useColorScheme,
  ViewStyle,
  ScrollView,
} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {DNACollapsible} from '@rndna/collapsible';
import {DNAButton} from '@rndna/button';
import {InfoCircleIcon, UserIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';
import {
  DNAAvatar,
  DNAAvatarWithStatus,
  DNAAvatarWithBadge,
} from '@rndna/avatar';

const Testscreen: React.FC<any> = () => {
  const bg: ViewStyle =
    useColorScheme() === 'dark'
      ? {
          backgroundColor: '#333',
        }
      : {
          backgroundColor: '#fff',
        };

  return (
    <View style={styles.flex}>
      <View style={[styles.container, bg]}>
        <DNAText type="h4" style={styles.header}>
          Native: {useColorScheme()} Mode
        </DNAText>
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
});

export default Testscreen;
