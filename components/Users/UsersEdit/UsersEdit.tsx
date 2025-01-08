import { useCallback, useMemo, useState } from 'react'
import { Button, Edit, useGetOne, useGetRecordId, useNotify } from 'react-admin'

import api from '../../../api/apiInstance'
import { USERS_SOURCE_NAME } from '../../../constants/sourceNames'
import { UsersForm } from '../UsersForm/UsersForm'

export const UsersEdit = () => {
  const notify = useNotify()
  const id = useGetRecordId()
  const user = useGetOne(USERS_SOURCE_NAME, { id })

  const [spinner, setSpinner] = useState(false)
  const [passwordRestoreInitialized, setPasswordRestoreInitialized] =
    useState(false)

  const handleInitializePasswordRestore = useCallback(async () => {
    try {
      setSpinner(true)

      await api.post('/admin/password-restore', {
        email: user.data.email,
      })

      notify('Инициализация прошла успешно!', { type: 'success' })

      setPasswordRestoreInitialized(true)
    } catch (error) {
      notify(`Произошла ошибка: ${(error as Error).message}`, { type: 'error' })

      setPasswordRestoreInitialized(false)
    } finally {
      setSpinner(false)
    }
  }, [notify, user.data?.email])

  const renderPasswordRestoreContent = useMemo(() => {
    if (passwordRestoreInitialized) {
      return (
        <p>
          На почту пользователя {user.data?.email} отправлено письмо с сылкой на
          сброс пароля
        </p>
      )
    }

    return (
      <Button
        size='large'
        onClick={handleInitializePasswordRestore}
        disabled={spinner}
      >
        {spinner ? <>Инициализация...</> : <>Инициировать сброс пароля</>}
      </Button>
    )
  }, [
    handleInitializePasswordRestore,
    passwordRestoreInitialized,
    spinner,
    user.data?.email,
  ])

  return (
    <Edit>
      <UsersForm passwordComponent={renderPasswordRestoreContent} />
    </Edit>
  )
}
