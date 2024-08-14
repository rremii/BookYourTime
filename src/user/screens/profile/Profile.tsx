import { Avatar } from '@shared/ui/Avatar'
import { BtnDanger } from '@shared/ui/BtnDanger'
import { LabelWithEdit } from '@shared/ui/LabelWithEdit'
import { ProfileStatus } from '@shared/ui/ProfileStatus'
import { View, StyleSheet, Text } from 'react-native'

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ width: '100%' }}>
          <ProfileStatus status="user" />
        </View>

        <View style={{ marginTop: 20, marginBottom: 30 }}>
          <Avatar borderWidth={3} size={150} color={'#0a853777'} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Name:</Text>
          <LabelWithEdit label={'Artem'} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>Last name:</Text>
          <LabelWithEdit label={'Romanov'} />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <BtnDanger>Delete account</BtnDanger>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    paddingLeft: 40,
    marginBottom: 15,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  btnContainer: {
    width: '100%',

    marginTop: 200,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
})
