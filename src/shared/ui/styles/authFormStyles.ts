import { StyleSheet } from 'react-native'

type ColorParams = {
  titleColor: string
  additionalInfoColor: string
  btnBgColor: string
}

export const getAuthFormStyles = ({
  titleColor,
  additionalInfoColor,
  btnBgColor,
}: ColorParams) =>
  StyleSheet.create({
    form: {
      width: '80%',
      maxWidth: 320,
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '500',
      marginBottom: 20,
      color: titleColor,
    },

    btnContainer: {},
    submitBtn: {
      height: 40,
    },
    additionalInfo: {
      fontSize: 14,
      marginTop: 10,
      width: '100%',
      textAlign: 'right',
      color: additionalInfoColor,
    },
  })
