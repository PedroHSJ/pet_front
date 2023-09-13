import { Spinner, Typography } from '@material-tailwind/react';
import LoadingGif from '../../../assets/images/loading.gif';
export const LoadingFullScreen = () => {
    return (
        <div
            className="
        absolute 
        flex 
        flex-col 
        justify-center
        items-center
        h-screen 
        top-0 
        right-0 
        bg-primary 
        w-screen"
        >
            <img src={LoadingGif} alt="loading" className="w-1/4 mx-auto" />
            <div
                className="
            flex flex-row gap-2
            "
            >
                <Typography color="white">Carregando...</Typography>
                <Spinner />
            </div>
        </div>
    );
};
