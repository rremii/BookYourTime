import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  paddingSection: {
    paddingLeft: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 18,
  },

  sectionContainer: {
    flexDirection: 'row',
    rowGap: 5,
    columnGap: 7,
    flexWrap: 'wrap',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '500',
  },
})
