import { useEffect, useState } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'
import EditIcon from '@icons/edit.svg'
import { SvgProps } from 'react-native-svg'

interface Props {
  onChange?: (value: string) => void
  label: string
  labelStyle?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  editIconStyle?: StyleProp<SvgProps>
}

export const LabelWithEdit = ({
  onChange,
  label,
  inputStyle,
  labelStyle,
  ...props
}: Props) => {
  const [value, setValue] = useState(label)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setValue(label)
  }, [label])

  const onSubmit = () => {
    if (onChange) onChange(value)
    setIsEditing(false)
  }

  const editIconStyle = (props.editIconStyle || {}) as SvgProps
  return (
    <View style={styles.container}>
      {isEditing ? (
        <TextInput
          value={value}
          onChangeText={setValue}
          onBlur={onSubmit}
          autoFocus={true}
          style={[styles.input, inputStyle]}
        />
      ) : (
        <TouchableOpacity
          style={styles.labelContainer}
          onPress={() => setIsEditing(true)}
        >
          <Text style={[styles.label, labelStyle]}>{value}</Text>
          <View style={styles.editIcon}>
            <EditIcon
              {...editIconStyle}
              color={'#0A8537'}
              width={24}
              height={24}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  labelContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: 'auto',
  },
  label: {
    position: 'relative',
    fontSize: 18,
  },
  input: {
    padding: 12,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  editIcon: {
    transform: [{ translateY: -10 }, { translateX: 5 }],
  },
})
