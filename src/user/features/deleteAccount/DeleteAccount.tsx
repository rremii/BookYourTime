import { useTheme } from '@shared/moduls/theme'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useDeleteMe } from '@user/entities/client/model/useDeleteMe'

export const DeleteAccount = () => {
  const { deleteMe, isPending } = useDeleteMe()
  const { colors } = useTheme()

  const onPress = () => {
    deleteMe()
  }

  return (
    <UIButton
      withSpinner={true}
      pending={isPending}
      onPress={onPress}
      type="danger"
      mainColor={colors.bcColor_btn_danger}
      activeColor={colors.bcColor_btn_danger_active}
      subColor={colors.color_btn_danger}
    >
      Delete account
    </UIButton>
  )
}
