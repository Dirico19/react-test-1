import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../../../hooks/useStore';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUsersActions } from '../actions/useUsersActions';
import { useEffect } from 'react';


export const UsersList = () => {
    
    const { users, loading, error } = useAppSelector(state => state.users);

    const { dispatch, getAllUsers, removeUser } = useUsersActions();
    
    useEffect(() => {
        getAllUsers();
    }, [dispatch]);

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
                                onClick={() => removeUser(user.id)}
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