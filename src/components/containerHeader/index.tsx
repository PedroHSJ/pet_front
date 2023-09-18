interface IContainerHeaderProps {
    title: string;
    children?: React.ReactNode;
}

export const ContainerHeader = ({ title, children }: IContainerHeaderProps) => {
    return (
        <div className="flex flex-row rounded my-4 px-4 py-6 justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {title}
            </h1>
            {children}
        </div>
    );
};
