import React, { useMemo } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import DataTable from 'react-data-table-component';
import { tableStyles } from './styles/Styles';
import Button from '@/Components/Button';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

const Index = (props) => {
    const { users } = props;

    // const [loading, setLoading] = useState(false);

    const columns = useMemo(
        () => [
            {
                name: 'P. Nombre',
                selector: (row) => row.p_nombre,
                sortable: false
            },
            {
                name: 'S. Nombre',
                selector: (row) => row.s_nombre,
                sortable: false
            },
            {
                name: 'P. Apellido',
                selector: (row) => row.p_apellido,
                sortable: false
            },
            {
                name: 'S. Apellido',
                selector: (row) => row.s_apellido,
                sortable: false
            },
            {
                name: 'Email',
                selector: (row) => row.email,
                sortable: false
            },
        ]
    );

    // const progressComponent = (
    //     <div style={
    //         {
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             height: 'inherit'
    //         }}>
    //         <Spinner animation="border" role="status" variant="primary" size="xl">
    //             <span className="visually-hidden">Cargando...</span>
    //         </Spinner>
    //     </div>
    // );

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const noDataComponent = (
        <div style={
            {
                paddingTop: '3vh',
                paddingBottom: '3vh'
            }
        }>
            No hay datos para mostrar
        </div>
    );

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>}
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ResponsiveNavLink method="get" href={route('create.user')} as="button">
                                Crear Usuario
                            </ResponsiveNavLink>
                            <DataTable
                                columns={columns}
                                data={users}
                                // progressPending={loading}
                                // progressComponent={progressComponent}
                                pagination
                                noDataComponent={noDataComponent}
                                customStyles={tableStyles}
                                paginationRowsPerPageOptions={[5, 10, 20]}
                                highlightOnHover
                                striped
                                responsive
                                fixedHeader
                                fixedHeaderScrollHeight='300px'
                                paginationComponentOptions={paginationComponentOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}

export default Index