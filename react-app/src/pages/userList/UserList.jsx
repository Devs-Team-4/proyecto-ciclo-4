import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_USERS from '../../graphql/getUsers.graphql'
import CREATE_USER from '../../graphql/createUser.grapql'
import MaterialTable from 'material-table'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './userList.css'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    textField: {
        width: '100%'
    }
}))

export default function UserList() {

    const styles = useStyles();
    const [modal,setModal] = useState(false);

    const abrirCerrarModal = () =>{
        setModal(!modal);
    }

    //OBTENER LOS USUARIOS
    const { data, error, loading } = useQuery(GET_USERS);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>`Error... ${error.message}`</p>;

    //CREAR UN USUARIO
  

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

    const body = (
        <div className={styles.modal}>
            <div align="center">
                <h2>Crear Usuario</h2>
            </div>
            <TextField label="Name" className={styles.textField} id="createName" />
            <br />
            <TextField label="LastName" className={styles.textField} id="createLastName" />
            <br />
            <TextField label="Phone" className={styles.textField} id="createPhone" />
            <br />
            <TextField label="Email" className={styles.textField} id="createEmail" />
            <br />
            <TextField type="password" label="Password" className={styles.textField} id="createEmail" />
            <br />
            <TextField label="State" className={styles.textField} id="createState"/>
            <br /><br />
            <div align="right">
                <Button color="primary">Enviar</Button>
                <Button onClick={abrirCerrarModal}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div className="userList">
            <MaterialTable
                columns={columnas}
                data={query =>
                    new Promise((resolve, reject) => {
                        resolve({
                            data: data.getUsers.map((user) => (
                                {
                                    id: `${user._id}`,
                                    name: `${user.name}`,
                                    lastname: `${user.lastName}`,
                                    phone: `${user.phone}`,
                                    email: `${user.email}`,
                                    state: `${user.state}`
                                }
                            ))
                        });
                    })
                }
                title="Lista de Usuarios"
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add new user',
                        isFreeAction: true,
                        onClick: (Event, rowData) => abrirCerrarModal()
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
            <Modal
                open={modal}
                onClose={abrirCerrarModal}
            >
                {body}
            </Modal>



        </div>

    )
}
