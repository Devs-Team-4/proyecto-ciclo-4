import { useQuery } from '@apollo/client'
import GET_USERS from '../../graphql/getUsers.graphql'
import MaterialTable from 'material-table'
import './userList.css'

export default function UserList() {

    const { data, error, loading } = useQuery(GET_USERS);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>`Error... ${error.message}`</p>;

    const columnas = [
        {
            title: 'Name',
            field: 'name'
        },
        {
            title: 'Lastname',
            field: 'lastname'
        },
        {
            title: 'Phone',
            field: 'phone',
        },
        {
            title: 'Email',
            field: 'email',
        },
        {
            title: 'State',
            field: 'state',
        }
    ];

    return (
        <div className="userList">
            <MaterialTable
                columns={columnas}
                data={query =>
                    new Promise((resolve,reject) => {
                        resolve({
                            data: data.getUsers.map((user) => (
                                { id: `${user._id}`,name: `${user.name}`, lastname: `${user.lastName}`, phone: `${user.phone}`, email: `${user.email}`,state: `${user.state}`}
                            ))
                        });
                    })
                }
                title="Lista de Usuarios"
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add new user',
                        isFreeAction:true,
                        onClick: (Event, rowData) => alert('Has presionado editar el usuario: ' + rowData.artista)
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick: (Event, rowData) => alert('Has presionado editar el usuario: ' + rowData.artista)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick: (Event, rowData) => window.confirm('Has presionado eliminar el usuario: ' + rowData.artista + '?')
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />
        </div>

    )
}
