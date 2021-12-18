import './roles.css'
import MaterialTable from 'material-table'

export default function Roles() {
    const columnas=[
        {
            title:'Nombre',
            field:'name'
        },
        {
            title:'Descripcion',
            field:'description'
        },
        {
            title:'Estado',
            field:'estado'
        }
    ]; 

    const data = [
        {name:'Administrador', description:'Administrador del Sistema',estado:'activo'},
        {name:'Usuario', description:'Usuario del Sistema',estado:'activo'},
        {name:'Estudiante', description:'Participa en la creación de los proyectos',estado:'activo'},
    ];
    return (
        <div className="roles">
            <MaterialTable 
                columns={columnas}
                data={data}
                title="Roles"
                options={{
                    actionsColumnIndex: -1,
                    search:false,
                    paging:false
                }}
            />
        </div>
    )
}
