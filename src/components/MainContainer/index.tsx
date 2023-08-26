interface IMainContainerProps {
    children?: React.ReactNode;
}

export const MainContainer = ({ children }: IMainContainerProps) => {
    return (
        <div className="bg-white shadow">
            <div>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
                    {children}
                </div>
            </div>
        </div>
    );
};
