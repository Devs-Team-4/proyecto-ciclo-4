import './userList.css'
import MaterialTable from 'material-table'

export default function UserList() {

    const columnas=[
        {
            title:'Artista',
            field:'artista'
        },
        {
            title:'País de origen',
            field:'pais'
        },
        {
            title:'Genero(Musical)',
            field:'genero'
        },
        {
            title:'Ventas estimadas',
            field:'ventas',
            type:"numeric"
        }
    ]; 

    const data = [
        {artista:'The Beatles', pais:'Reino unido',genero:'Rock,pop',ventas:1000},
        {artista:'The Beatles', pais:'Reino unido',genero:'Rock,pop',ventas:1000},
        {artista:'The Beatles', pais:'Reino unido',genero:'Rock,pop',ventas:1000},
        {artista:'The Beatles', pais:'Reino unido',genero:'Rock,pop',ventas:1000},
        {artista:'Queen', pais:'Reino unido',genero:'Rock,pop',ventas:2000}
    ];


    return (
        <div className="userList">
            <MaterialTable 
                columns={columnas}
                data={data}
                title="Lista de Usuarios"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick:(Event,rowData) => alert('Has presionado editar el usuario: '+rowData.artista)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick:(Event,rowData) => window.confirm('Has presionado eliminar el usuario: '+rowData.artista+'?')
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions:'Acciones'
                    }
                }}
            />
        </div>
    )
}
