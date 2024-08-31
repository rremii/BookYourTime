import * as yup from 'yup'

export const bookingFormSchema = yup.object({
  date: yup.string().required('Date is required'),
  startTime: yup.string().required('Start time is required'),
  endTime: yup.string().required('End time is required'),
  title: yup.string().required('Title is required').max(30),
})
