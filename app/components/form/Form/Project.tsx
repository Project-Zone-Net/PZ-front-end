import TitleInput from '@components/form/Input/project/Name'
import TextInput from '@components/form/Input/Text'
import UrlInput from '@components/form/Input/project/Url'
import TechSelect from '@components/form/Select/Tech'
import {SubmitButton} from '@components/form/Button/Submit'
import CancelButton from '@components/form/Button/Cancel'
import type {IProjectForm} from 'app/types/form'

const ProjectForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  options,
  control,
  setValue,
  reset,
  onKeyDown,
  defaultValues,
}: IProjectForm): JSX.Element => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className='flex flex-col h-5/6 justify-evenly'
  >
    <TitleInput
      id='name'
      name='name'
      defaultValue={defaultValues ? defaultValues.name : ''}
      register={register}
      errors={errors}
    />
    <TextInput
      defaultValue={defaultValues ? defaultValues.description : ''}
      register={register}
      errors={errors}
    />
    <TextInput
      id='mission'
      name='mission'
      label='Our mission'
      defaultValue={defaultValues ? defaultValues.mission : ''}
      register={register}
      errors={errors}
    />
    <div className='h-1/6 flex flex-col mb-6'>
      <TechSelect
        options={options}
        control={control}
        defaultValues={defaultValues ? defaultValues.technologies : undefined}
        defaultValue={defaultValues ? defaultValues.technologies : undefined}
        setValue={setValue}
        errors={errors}
      />
    </div>
    <UrlInput
      defaultValue={defaultValues ? defaultValues.projectURL : ''}
      register={register}
      errors={errors}
    />
    <div className='h-1/6 flex items-end'>
      <div className='w-16 p-1'>
        <SubmitButton
          value='Save'
          bgColor='green-600'
          errors={Boolean(
            errors.name || errors.description || errors.technologies
          )}
        />
      </div>
      <CancelButton
        onClickHandler={() => reset()}
        onKeyDownHandler={onKeyDown}
      />
    </div>
  </form>
)

export default ProjectForm