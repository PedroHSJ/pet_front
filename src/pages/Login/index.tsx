import { Container, LinksContainer } from './styles';
import { LinkButton } from '../../components/buttons/LinkButton';
import LoginCard from '../../components/cards/Login';

const Login = () => {
    return (
        <Container>
            <LoginCard />
            <LinksContainer>
                {/* <LinkButton
                    type="button"
                    path="checkUser"
                    label="Esqueci senha"
                /> */}
                <LinkButton
                    type="button"
                    path="checkRegister"
                    label="Primeiro acesso"
                />
            </LinksContainer>
        </Container>
    );
};

export default Login;
