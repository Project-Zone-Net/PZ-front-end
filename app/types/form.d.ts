import {Control, NestedValue} from 'react-hook-form'

export interface IFormInput {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  register: React.Ref<T>
  defaultValue?: string
  optional?: boolean
  errors?: Record<string, any>
}

export type SelectOptions = {value: string; label: string}
export type NestedOptions = NestedValue<SelectOptions[]> | undefined

export interface IFormSelect {
  options: SelectOptions[]
  control: Control
  setValue: (
    name: any,
    value: unknown,
    config?: Partial<{shouldValidate: boolean; shouldDirty: boolean}>
  ) => void
  errors?: Record<string, any>
  disabled?: boolean
  defaultValues?: NestedOptions
  defaultValue?: NestedOptions
}

export interface IDefaultSelect {
  id: string
  name: string
  options: SelectOptions[]
  control: Control
  setValue: (
    name: any,
    value: unknown,
    config?: Partial<{shouldValidate: boolean; shouldDirty: boolean}>
  ) => void
}

export type FormButton = {value?: string; errors: boolean}

export interface INumberInput {
  id: string
  name: string
  label: string
  register: React.Ref<T>
}
