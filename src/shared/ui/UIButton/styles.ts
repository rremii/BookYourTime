import { StyleSheet } from 'react-native'

export const dangerBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: '#850a0a',
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
})

export const filledBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: '#0A8537',
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
})

export const simpleBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 23,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
})
