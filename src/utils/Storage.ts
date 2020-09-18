import AsyncStorage from '@react-native-community/async-storage';

export const readFromStore = async (keyName: string) => {
  try {
    const value: string | null = await AsyncStorage.getItem(keyName);
    const parseValue = value ? JSON.parse(value) : null;
    return parseValue;
  } catch (e) {
    return false;
  }
};

export const saveInStore = async (keyName: string, value: object) => {
  const encryptedString = JSON.stringify(value);

  await AsyncStorage.setItem(keyName, encryptedString);
};

export const removeFromStore = async (keyName: string) => {
  await AsyncStorage.removeItem(keyName);
};
