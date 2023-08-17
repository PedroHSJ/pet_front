import { useEffect } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';

const Home = () => {
    const { getSchedules, error, loading, schedules } = useSchedule();
    useEffect(() => {
        getSchedules();
    }, []);

    // return (
    //     <Container>
    //         <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //         {schedules.map((schedule, index) => (
    //             <Link to={`/schedule/${schedule.id}`}>
    //                 <ScheduleCard key={schedule.id} schedule={schedule} />
    //             </Link>
    //         ))}
    //     </Container>
    // );
    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
        { name: 'Reports', href: '#', current: false },
    ];
    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <Template>
                <>
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                </>
            </Template>
        </>
    );
};

export default Home;
