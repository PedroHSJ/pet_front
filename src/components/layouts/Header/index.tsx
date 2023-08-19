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
import { useEffect, useState } from 'react';
import { IUser } from '../../../interfaces/IUser';
import { IProfessional } from '../../../interfaces/IProfessional';

interface INavItem {
    name: string;
    icon: any;
    current: boolean;
    href: string;
}

export function Header() {
    const { dialog } = useComponent();
    const { logout, role } = useAuth();
    const { user, professional } = useAuth();
    const [navItems, setNavItems] = useState<INavItem[] | null>(null);

    const navItemsAdmin = [
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
            name: 'Configurações',
            icon: Cog6ToothIcon,
            current: false,
            href: '/configuracoes',
        },
    ];

    const commomItems = [
        {
            name: 'Perfil',
            icon: UserIcon,
            current: false,
            href: '/perfil',
        },
        {
            name: 'Sair',
            icon: PowerIcon,
            current: false,
            href: '/sair',
        },
    ];

    const professionalNavItems = [
        {
            name: 'Configurações',
            icon: Cog6ToothIcon,
            current: false,
            href: '/configuracoes',
        },
    ];

    useEffect(() => {
        verifyRole();
    }, [professional]);

    const verifyRole = () => {
        console.log('role', role);
        setNavItems([]);
        if (role === 'ADMIN') {
            setNavItems((prev) => [...prev!, ...navItemsAdmin]);
        }
        if (role === 'VETERINARIAN') {
            setNavItems((prev) => [...prev!, ...professionalNavItems]);
        }
        setNavItems((prev) => [...prev!, ...commomItems]);

        //setNavItems((prev) => [...prev!, ...commomItems]);
    };

    const handleLogout = () => {
        dialog('Você deseja sair?', 'Sair', [
            {
                text: 'Sim',
                onPress: () => {
                    logout();
                },
                styleButton: 'secondary',
            },
            {
                text: 'Não',
                onPress: () => {},
                styleButton: 'primary',
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
                {navItems?.map((item, index) => {
                    {
                        return item.name === 'Sair' ? (
                            <ListItem
                                key={index}
                                className="text-white"
                                onClick={handleLogout}
                            >
                                <ListItemPrefix>
                                    <item.icon className="h-5 w-5" />
                                </ListItemPrefix>
                                {item.name}
                            </ListItem>
                        ) : (
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
                    }
                })}

                {/* <ListItem className="text-white" onClick={handleLogout}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem> */}
            </List>
        </Card>
    );
}
