import { ReactNode } from 'react'
import { UIBtnProps } from './types'
import { SimpleBtn } from './buttons/filledBtn/simpleBtn/SimpleBtn'
import { DangerBtn } from './buttons/filledBtn/dangerBtn/DangerBtn'
import { FilledBtn } from './buttons/filledBtn/filledBtn/FilledBtn'

export const UIButton = ({ type, ...btnParams }: UIBtnProps): ReactNode => {
  switch (type) {
    case 'simple':
      return <SimpleBtn {...btnParams} />
    case 'danger':
      return <DangerBtn {...btnParams} />
    case 'filled':
      return <FilledBtn {...btnParams} />
  }
}
