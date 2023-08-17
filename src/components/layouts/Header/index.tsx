import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from '@material-tailwind/react';
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    UserIcon,
} from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import { useComponent } from '../../../hooks/useComponent';
import { useAuth } from '../../../hooks/auth';

export function Header() {
    const { dialog } = useComponent();
    const { logout } = useAuth();

    const navItems = [
        {
            name: 'Dashboard',
            icon: PresentationChartBarIcon,
            current: true,
            href: '/home',
        },
        {
            name: 'Profissionais',
            icon: UserCircleIcon,
            current: false,
            href: '/profissionais',
        },
        {
            name: 'Clientes',
            icon: InboxIcon,
            current: false,
            href: '/clientes',
        },
        {
            name: 'Estabelecimentos',
            icon: ShoppingBagIcon,
            current: false,
            href: '/estabelecimentos',
        },
        {
            name: 'Perfil',
            icon: UserIcon,
            current: false,
            href: '/perfil',
        },
    ];

    const handleLogout = () => {
        dialog('Você deseja sair?', 'Sair', [
            {
                text: 'Sim',
                onPress: () => {
                    logout();
                },
            },
            {
                text: 'Não',
                onPress: () => {},
            },
        ]);
    };

    return (
        <Card
            className="
        h-screen 
        w-full 
        max-w-[20rem] 
        p-4 
        shadow-xl
         shadow-blue-gray-900/5 
         m-0 
         rounded-none
         bg-primary
         "
        >
            <div className="mb-2 p-4">
                <Typography variant="h5" color="white">
                    Pet Api
                </Typography>
            </div>
            <List>
                {navItems.map((item, index) => {
                    return (
                        <NavLink
                            to={item.href}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-secondary rounded '
                                    : 'text-white'
                            }
                        >
                            <ListItem key={index}>
                                <ListItemPrefix>
                                    <item.icon className="h-5 w-5" />
                                </ListItemPrefix>
                                {item.name}
                            </ListItem>
                        </NavLink>
                    );
                })}

                <ListItem className="text-white" onClick={handleLogout}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
