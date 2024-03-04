import {Linking, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {FileIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {WebDocs_URL} from './Utils/hooks';
import {
  DNAAvatar,
  DNAAvatarWithBadge,
  DNAAvatarWithStatus,
} from '@rndna/avatar';
import {DNAAvatarGroup} from '@rndna/avatar_group';
import {avatarGroup} from './constants';

const AvatarScreen = () => {
  const imgSrc =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'";

  return (
    <>
      <ScrollView style={[styles.container, styles.flex]}>
        <DNAText style={styles.labelStyle}>Avatar: Icon</DNAText>
        <View style={styles.rowContainer}>
          <DNAAvatar size="xs" />
          <DNAAvatar size="sm" />
          <DNAAvatar size="md" />
          <DNAAvatar size="lg" />
          <DNAAvatar size="xl" />
        </View>
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>Avatar: Text</DNAText>
        <View style={styles.rowContainer}>
          <DNAAvatar size="xs" name="Junie Rosales" />
          <DNAAvatar size="sm" name="Junie Rosales" />
          <DNAAvatar size="md" name="Junie Rosales" />
          <DNAAvatar size="lg" name="Junie Rosales" />
          <DNAAvatar size="xl" name="Junie Rosales" />
        </View>
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>Avatar: Text</DNAText>
        <View style={styles.rowContainer}>
          <DNAAvatar size="xs" imageSource={imgSrc} />
          <DNAAvatar size="sm" imageSource={imgSrc} />
          <DNAAvatar size="md" imageSource={imgSrc} />
          <DNAAvatar size="lg" imageSource={imgSrc} />
          <DNAAvatar size="xl" imageSource={imgSrc} />
        </View>
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>Avatar with Badge</DNAText>
        <View style={styles.rowContainer}>
          <DNAAvatarWithBadge
            badge={{
              color: 'primary',
              value: '+1',
            }}
          />
          <DNAAvatarWithBadge
            badge={{
              color: 'danger',
              value: '+1',
            }}
          />
          <DNAAvatarWithBadge
            badge={{
              color: 'success',
              value: '+1',
            }}
          />
          <DNAAvatarWithBadge
            badge={{
              color: 'info',
              value: '+1',
            }}
          />
          <DNAAvatarWithBadge
            badge={{
              color: 'default',
              value: '+1',
            }}
          />
          <DNAAvatarWithBadge
            badge={{
              color: 'secondary',
              value: '+1',
            }}
          />
        </View>
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>
          Avatar with Status (busy, inactive, online, offline)
        </DNAText>
        <View style={styles.rowContainer}>
          <DNAAvatarWithStatus
            status={{
              option: 'busy',
              value: 'busy',
            }}
          />
          <DNAAvatarWithStatus
            status={{
              option: 'inactive',
              value: 'inactive',
            }}
          />
          <DNAAvatarWithStatus
            status={{
              option: 'online',
              value: 'online',
            }}
          />
          <DNAAvatarWithStatus
            status={{
              option: 'offline',
              value: 'offline',
            }}
          />
        </View>
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>AvatarGroup: default</DNAText>
        <DNAAvatarGroup options={avatarGroup} color="info" />
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>AvatarGroup: addable</DNAText>
        <DNAAvatarGroup options={avatarGroup} color="info" addable />
        <View style={styles.divider} />
        <DNAText style={styles.labelStyle}>AvatarGroup: max display</DNAText>
        <DNAAvatarGroup options={avatarGroup} color="info" max={3} />
      </ScrollView>

      <DNAButton
        label="Read Docs"
        color="primary"
        size="lg"
        onPress={() => {
          Linking.openURL(WebDocs_URL + 'docs/components/avatar');
        }}
        icon={<FileIcon size={20} color={'#fff'} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  viewDocs: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    marginBottom: 7,
  },
  container: {
    padding: 20,
  },
  rowContainer: {
    display: 'flex',
    columnGap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  divider: {
    height: 20,
  },
  rowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 5,
  },
});

export default AvatarScreen;