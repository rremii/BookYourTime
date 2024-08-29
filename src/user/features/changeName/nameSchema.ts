import * as yup from 'yup'

// export const nameSchema = yup
//   .string()
//   .required('First name is required')
//   .max(15, 'First name must be 15 characters or less')

export const nameSchema = yup.object().shape({
  name: yup
    .string()
    .required('First name is required')
    .max(15, 'First name must be 15 characters or less'),
})
