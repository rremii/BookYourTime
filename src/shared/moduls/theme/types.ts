export type ThemeType = 'light' | 'dark' | 'system'

type Action<T, P> = {
  type: T
  payload: P
}

export type ThemeAction = ChangeTheme

export type ChangeTheme = Action<'change', ThemeType>

export type ThemeKeys =
  | 'color_name'
  | 'color_cross'
  | 'color_standart_text'
  | 'color_work_time'
  | 'color_rounded_work'
  | 'borderColor_standart'
  | 'color_standart_work'
  | 'color_toast_text'
  | 'color_input'
  | 'color_toast_text'
  | 'bcColor_toast'
  | 'bcColor_toast_error'
  | 'color_fill_icon'
  | 'color_warn_icon'
  | 'color_calendar_icon'
  | 'color_tag_icon'
  | 'color_filter_icon'
  | 'bcColor_tag'
  | 'bcColor_overlay'
  | 'bcColor_layout'
  | 'color_edit_icon'
  | 'bcColor_input'
  | 'bcColor_label'
  | 'bcColor_button'
  | 'color_btn_filled'
  | 'color_btn_danger'
  | 'color_btn_picker'
  | 'bcColor_btn_filled'
  | 'bcColor_btn_danger'
  | 'borderColor_tags'
  | 'borderColor_date_picker'
  | 'color_standart_avatar'
  | 'bcColor_standart_container'
  | 'color_section_title'
  | 'color_specialty'
  | 'color_standart_shadow'
  | 'borderColor_shadow'
  | 'borderTopColor_tabBar'
  | 'bcColor_tabBar'
  | 'color_tabBar_active'
  | 'color_tabBar_inactive'
  | 'borderColor_titleInput'
  | 'color_titleInput'
  | 'borderColor_searchHeader'
  | 'color_accentPicker'
  | 'color_weekDay'
  | 'bcColor_event'
  | 'color_event'
  | 'bcColor_search'
  | 'color_search_icon'
  | 'bcColor_card'
  | 'color_linearGradient'
  | 'bcColor_btn_filled_active'
  | 'bcColor_btn_danger_active'
  | 'borderColor_active'

export type Theme = Record<ThemeKeys, string>
