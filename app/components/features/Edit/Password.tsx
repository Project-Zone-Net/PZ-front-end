import * as React from 'react'
import axios from 'axios'

import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'

import Panel from '@components/navigation/Tablist/Panel'
import FormInput from '@components/form/Input/Form'
import {SubmitButton} from '@components/form/Button/Submit'
import CancelButton from '@components/form/Button/Cancel'

import type {SettingPanelProps} from 'app/types/navigation'
import type {IEditPassword} from 'app/types/edit'

const EditPassword = ({
  token,
  isSelectedTab,
}: SettingPanelProps): JSX.Element => {
  const {handleSubmit, register, errors, watch} = useForm<IEditPassword>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  })
  const watchPassword = watch('newPassword')
  const router = useRouter()
  const onSubmit = async (data: IEditPassword): Promise<unknown> => {
    try {
      const response = await axios.patch(
        '/user/password',
        {user: data},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.status === 200) {
        router.push('/profile')
        return
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  return (
    <Panel index={3} isSelectedTab={isSelectedTab}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col h-auto justify-between p-1'
      >
        <h2 className='text-2xl mb-4'>Change password</h2>
        <article className='h-auto flex flex-col justify-evenly mb-8'>
          <FormInput
            type='password'
            id='currentPassword'
            name='currentPassword'
            label='Current Password'
            placeholder='please enter your current password'
            register={register({
              required: 'password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'please enter a valid password',
              },
            })}
            errors={errors}
          />
          <FormInput
            type='password'
            id='newPassword'
            name='newPassword'
            label='New Password'
            placeholder='please enter a new password'
            register={register({
              required: 'new password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'please enter a valid password',
              },
            })}
            errors={errors}
          />
          <FormInput
            type='password'
            id='newPasswordConfirm'
            name='newPasswordConfirm'
            label='Confirm New Password'
            placeholder='please confirm your new password'
            register={register({
              validate: value =>
                value === watchPassword || 'passwords must match',
            })}
            errors={errors}
          />
        </article>
        <aside className='h-1/5 flex flex-row items-end justify-start pb-2'>
          <CancelButton onClickAction={() => router.push('/profile')} />
          <div className='w-16 p-1'>
            <SubmitButton
              value='Save'
              bgColor='green-600'
              errors={Boolean(
                errors.currentPassword ||
                  errors.newPassword ||
                  errors.newPasswordConfirm
              )}
            />
          </div>
        </aside>
      </form>
    </Panel>
  )
}

export default React.memo(EditPassword)