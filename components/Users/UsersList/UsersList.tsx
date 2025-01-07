import { Datagrid, List, TextField } from 'react-admin'

export const UsersList = () => {
  const handleRowClick = () => 'show'

  return (
    <List>
      <Datagrid rowClick={handleRowClick}>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='email' />
      </Datagrid>
    </List>
  )
}

export default UsersList
