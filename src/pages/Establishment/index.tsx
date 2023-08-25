import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useEstablishment } from '../../hooks/useEstablishment';
import { Loading } from '../../components/resources/Loading';
import { cnpjMask } from '../../utils/mask';
import { Pagination } from '../../components/pagination';
import {
    Avatar,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
} from '@material-tailwind/react';
import { Filter } from '../../components/filter';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router';

const Establishment = () => {
    const {
        error,
        loading,
        establishments,
        totalCount,
        getAllEstablishments,
        getEstablishmentByParams,
    } = useEstablishment();
    const { role } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllEstablishments();
    }, []);

    return (
        <Template>
            <div className="bg-white shadow">
                <div>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Estabelecimentos
                            </h1>
                            {role === 'ADMIN' && (
                                <button
                                    type="button"
                                    className="bg-primary text-sm flex-end text-white rounded p-2"
                                    onClick={() => {
                                        navigate('/cadastrarEstabelecimento');
                                    }}
                                >
                                    Cadastrar
                                </button>
                            )}
                        </div>
                        
                        <Filter
                            options={{
                                cnpj: 'CNPJ',
                                name: 'Nome',
                                active: 'Status',
                            }}
                            onSubmit={(data) => {
                                getEstablishmentByParams({ params: data });
                            }}
                        />
                        {loading && (
                            <div
                                className="
                                flex 
                                items-center 
                                justify-center 
                                h-screen
                                flex-col
                                "
                            >
                                <Loading />
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    Carregando...
                                </span>
                            </div>
                        )}
                        <List>
                            {establishments.map((estab) => {
                                return (
                                    <ListItem key={estab.id} onClick={() => {}}>
                                        <ListItemPrefix>
                                            <Avatar
                                                variant="circular"
                                                alt="error"
                                                src="https://avatars.githubusercontent.com/u/60005589?v=4"
                                            />
                                        </ListItemPrefix>
                                        
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {estab.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {cnpjMask(estab.cnpj)}
                                            </p>
                                        </div>
                                        
                                        <ListItemSuffix>
                                            {estab.active && (
                                                <span
                                                    className="
                                                      inline-flex
                                                      items-center
                                                      px-2.5
                                                      py-0.5
                                                      rounded-full
                                                      text-xs
                                                      font-medium
                                                      bg-green-100
                                                      text-green-800
                                                      "
                                                >
                                                    Ativo
                                                </span>
                                            )}

                                            {!estab.active && (
                                                <span
                                                    className="
                                                         inline-flex
                                                         items-center
                                                         px-2.5
                                                         py-0.5
                                                         rounded-full
                                                         text-xs
                                                         font-medium
                                                         bg-red-100
                                                         text-red-800
                                                         "
                                                >
                                                    Inativo
                                                </span>
                                            )}
                                        </ListItemSuffix>
                                    </ListItem>
                                );
                            })}
                        </List>

                        {/* <Pagination
                            page={1}
                            total={totalCount}
                            onChange={(page) => {
                                getEstablishmentByParams({ page });
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Establishment;

//list backup
// <li
//     key={estab.id}
//     className="p-4 cursor-pointer hover:bg-gray-200 hover:rounded hover:shadow-lg hover:border-transparent hover:transform hover:scale-105 transition-all duration-200"
// >
//     <div className="flex space-x-3 ">
//         <div className="flex-1 space-y-1 justify-center ">
//             <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-medium text-gray-900">
//                     {estab.name}
//                 </h3>

//                 {estab.active && (
//                     <span
//                         className="
//                  inline-flex
//                  items-center
//                  px-2.5
//                  py-0.5
//                  rounded-full
//                  text-xs
//                  font-medium
//                  bg-green-100
//                  text-green-800
//                  "
//                     >
//                         Ativo
//                     </span>
//                 )}

//                 {!estab.active && (
//                     <span
//                         className="
//                     inline-flex
//                     items-center
//                     px-2.5
//                     py-0.5
//                     rounded-full
//                     text-xs
//                     font-medium
//                     bg-red-100
//                     text-red-800
//                     "
//                     >
//                         Inativo
//                     </span>
//                 )}
//             </div>
//             <p className="text-sm text-gray-500">
//                 {cnpjMask(estab.cnpj)}
//             </p>
//         </div>
//     </div>
// </li>
