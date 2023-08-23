import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Navbar,
    IconButton,
    Collapse,
} from '@material-tailwind/react';
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    UserIcon,
    XMarkIcon,
    Bars3Icon,
    CalendarIcon,
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

interface INavListProps {
    items: INavItem[] | null;
}

export function Header() {
    const { dialog } = useComponent();
    const { logout, role } = useAuth();
    const { user, professional } = useAuth();
    const [navItems, setNavItems] = useState<INavItem[] | null>(null);
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [openNav, setOpenNav] = useState(false);

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize]);

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
            name: 'Agendamentos',
            icon: CalendarIcon,
            current: true,
            href: '/agendamentos',
        },
        {
            name: 'Configurações',
            icon: Cog6ToothIcon,
            current: false,
            href: '/configuracoes',
        },
    ];

    useEffect(() => {
        verifyRole();
    }, []);

    useEffect(() => {
        verifyRole();
    }, [role]);

    const verifyRole = () => {
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
        <>
            {screenSize.width > 520 && (
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
            )}
            {screenSize.width <= 520 && (
                <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-primary rounded-none">
                    <div className="flex items-center justify-between text-white">
                        <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5"
                        >
                            Pet API
                        </Typography>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon
                                    className="h-6 w-6"
                                    strokeWidth={2}
                                />
                            ) : (
                                <Bars3Icon
                                    className="h-6 w-6"
                                    strokeWidth={2}
                                />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
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
                    </Collapse>
                </Navbar>
            )}
        </>
    );
}
