import * as yup from 'yup'

export const timeSchema = yup.object({
  from: yup.string().required('Start time is required'),
  to: yup.string().required('End time is required'),
})
