import Select from 'react-select'
import {Controller} from 'react-hook-form'
import ErrorMessage from '@components/Message/Error'
import type {IFormSelect, SelectOptions} from 'app/types/form'

const TechSelect = ({
  options,
  control,
  setValue,
  errors,
  disabled,
  defaultValues,
  defaultValue,
}: IFormSelect): React.ReactElement => {
  return (
    <>
      <label id='technologies' htmlFor='technologies'>
        Technologies :
      </label>
      <Controller
        name='technologies'
        control={control}
        defaultValue={defaultValues ? defaultValues.map(v => v.label) : ''}
        rules={{
          //* recommended for object or array input data
          validate: value =>
            value.length || 'Please select at least one technology',
        }}
        render={({value, onBlur}) => (
          <Select
            id='technologies'
            inputId='technologies'
            name='technologies'
            aria-labelledby='technologies'
            defaultValue={defaultValue ? defaultValue : value}
            closeMenuOnSelect={false}
            isMulti
            options={options}
            placeholder='Choose your tech stack'
            blurInputOnSelect={false}
            onBlur={onBlur}
            onChange={values => {
              setValue(
                'technologies',
                values.map((value: SelectOptions) => value.label),
                {
                  shouldValidate: true,
                  shouldDirty: true,
                }
              )
            }}
            isDisabled={disabled}
          />
        )}
      />
      {errors?.technologies && (
        <ErrorMessage>{errors?.technologies?.message}</ErrorMessage>
      )}
    </>
  )
}

export default TechSelect