import { useEffect, useRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'
import EditIcon from '@icons/edit.svg'
import { SvgProps } from 'react-native-svg'
import { set } from 'react-hook-form'
import { useTheme } from '@shared/moduls/theme/useTheme'

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
  const { colors } = useTheme()
  const [isEditing, setIsEditing] = useState(false)
  const [curLabel, setCurLabel] = useState(label)

  const onSubmit = () => {
    if (onChange) onChange(curLabel)
    setIsEditing(false)
  }

  const onTextChange = (newLabel: string) => {
    setCurLabel(newLabel)
  }

  const editIconStyle = (props.editIconStyle || {}) as SvgProps
  return (
    <View style={styles.container}>
      {isEditing ? (
        <TextInput
          onChangeText={onTextChange}
          value={curLabel}
          onSubmitEditing={onSubmit}
          autoFocus={true}
          style={[
            styles.input,
            inputStyle,
            { borderColor: colors.borderColor_standart },
          ]}
        />
      ) : (
        <TouchableOpacity
          style={styles.labelContainer}
          onPress={() => setIsEditing(true)}
        >
          <Text style={[styles.label, labelStyle]}>{curLabel}</Text>
          <View style={styles.editIcon}>
            <EditIcon
              {...editIconStyle}
              color={colors.color_edit_icon}
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
    borderWidth: 1,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  editIcon: {
    transform: [{ translateY: -10 }, { translateX: 5 }],
  },
})
