import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUsersActions } from '../actions/useUsersActions';
import React, { useEffect } from 'react';

export interface UsersListInterface {

}

export const UsersList: React.FC<UsersListInterface> = () => {
    
    const { users, loading, error, useGetUsers, useAddUser, useUpdateUser, useDeleteUser } = useUsersActions();
    
    useEffect(() => {
        useGetUsers();
    }, [useGetUsers]);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {error && 
                    <TableRow>
                        <TableCell>Error: {error}</TableCell>
                    </TableRow> 
                    }
                    {loading 
                    ? 
                        <TableRow>
                            <TableCell>CARGANDO...</TableCell>
                        </TableRow> 
                    :
                    users.map(user => (
                        <TableRow
                        key={user.id}
                        >
                            <TableCell component="th" scope="row">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button 
                                onClick={() => useDeleteUser(user.id)}
                                variant='contained'
                                color='error'
                                size='small'
                                >
                                    <DeleteIcon fontSize='small' />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}