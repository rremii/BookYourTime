import { useDeleteMe } from '@host/entities/host/model/useDeleteMe'
import { useTheme } from '@shared/moduls/theme'
import { UIButton } from '@shared/ui/UIButton/UIButton'

export const DeleteAccount = () => {
  const { colors } = useTheme()
  const { deleteMe, isPending } = useDeleteMe()

  return (
    <UIButton
      pending={isPending}
      onPress={deleteMe}
      type="danger"
      mainColor={colors.bcColor_btn_danger}
      subColor={colors.color_btn_danger}
      activeColor={colors.bcColor_btn_danger_active}
    >
      Delete account
    </UIButton>
  )
}
