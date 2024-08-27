import { StyleSheet } from 'react-native'

export const dangerBtnStyles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    justifyContent: 'center',

    paddingBottom: 7,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
})

export const filledBtnStyles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',

    fontSize: 16,
    fontWeight: '500',
  },
})

export const simpleBtnStyles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    justifyContent: 'center',

    padding: 23,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',

    fontSize: 16,
    fontWeight: '500',
  },
})
