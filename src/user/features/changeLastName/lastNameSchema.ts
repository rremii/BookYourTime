import * as yup from 'yup'

export const lastNameSchema = yup
  .string()
  .required('Last name is required')
  .max(15, 'Last name must be 15 characters or less')
