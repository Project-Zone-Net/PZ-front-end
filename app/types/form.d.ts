export interface IFormInput {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  register: React.Ref<T> | undefined
  defaultValue?: string
  optional?: boolean
  errors?: JSX.Element | undefined
}
