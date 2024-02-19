import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DNAChip} from '@rndna/chip';
import {EyeIcon, UserAddIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';

const ChipScreen = () => {
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const logToConsole = (message: string) => {
    setConsoleLogs(prevLogs => [...prevLogs, message]);
  };

  const clearLogs = () => {
    setConsoleLogs([]);
  };

  return (
    <View style={[styles.container, styles.flex]}>
      <DNAText style={styles.labelStyle}>Variant: solid</DNAText>
      <View style={styles.rowContainer}>
        <DNAChip
          label="chip"
          size="md"
          onPress={() => logToConsole('Clicked on solid chip')}
        />
        <DNAChip
          label="with icon"
          icon={UserAddIcon}
          onPress={() => logToConsole('Clicked on chip with icon')}
        />
        <DNAChip
          label="closable"
          isClosable
          onPress={() => logToConsole('Clicked on closable solid chip')}
          onPressClose={() => {
            logToConsole('Closechip');
          }}
        />
        <DNAChip label="disabled" isDisabled />
      </View>
      <View style={styles.divider} />
      <DNAText style={styles.labelStyle}>Variant: soft</DNAText>
      <View style={styles.rowContainer}>
        <DNAChip
          variant="soft"
          label="chip"
          size="md"
          onPress={() => logToConsole('Clicked on soft chip')}
        />
        <DNAChip
          variant="soft"
          label="with icon"
          icon={UserAddIcon}
          onPress={() => logToConsole('Clicked on soft chip with icon')}
        />
        <DNAChip
          variant="soft"
          label="closable"
          isClosable
          onPress={() => logToConsole('Clicked on closable soft chip')}
          onPressClose={() => {
            logToConsole('Closechip');
          }}
        />
        <DNAChip variant="soft" label="disabled" isDisabled />
      </View>
      <View style={styles.divider} />
      <DNAText style={styles.labelStyle}>Variant: outlined</DNAText>
      <View style={styles.rowContainer}>
        <DNAChip
          variant="outlined"
          label="chip"
          size="md"
          onPress={() => logToConsole('Clicked on outlined chip')}
        />
        <DNAChip
          variant="outlined"
          label="with icon"
          icon={UserAddIcon}
          onPress={() => logToConsole('Clicked on outlined chip with icon')}
        />
        <DNAChip
          variant="outlined"
          label="closable"
          isClosable
          onPress={() => logToConsole('Clicked on closable outlined chip')}
          onPressClose={() => {
            logToConsole('Closechip');
          }}
        />
        <DNAChip variant="outlined" label="disabled" isDisabled />
      </View>
      <View style={styles.divider} />

      <View style={styles.rowGap}>
        <DNAText>Console Logs:</DNAText>
        {consoleLogs.length > 0 && (
          <DNAText style={styles.clearButton} onPress={clearLogs}>
            Clear Logs
          </DNAText>
        )}
      </View>
      <View style={styles.scrollHeight}>
        {consoleLogs.map((log, index) => (
          <DNAText key={index} style={styles.consoleLog}>
            {log} {index === consoleLogs.length - 1 && '(new)'}
          </DNAText>
        ))}
      </View>
    </View>
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
    columnGap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
  divider: {
    height: 20,
  },
  consoleLog: {
    marginBottom: 5,
  },
  clearButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  scrollHeight: {
    minHeight: 200,
  },
  rowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 5,
  },
});

export default ChipScreen;
