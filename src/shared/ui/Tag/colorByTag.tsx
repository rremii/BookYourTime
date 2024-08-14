import { Tags } from './types'

const tagMap = new Map<Tags, string>()
tagMap.set(Tags.FRONTEND, '#3c96c3')
tagMap.set(Tags.BACKEND, '#6fb83b')
tagMap.set(Tags.FULLSTACK, '#cc4158')

export const colorByTag = (tag: Tags): string => {
  return tagMap.get(tag) || '#000'
}
