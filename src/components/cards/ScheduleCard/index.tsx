import { useTheme } from "styled-components";
import {
  Container,
  Img,
  IformationContainer,
  ProfessionalName,
  InfoLine,
  InfoText,
} from "./style";
import { BiCalendarEvent, BiTimeFive, BiVideo } from "react-icons/bi";
import { ISchedule } from "../../../interfaces/ISchedule";

interface IScheduleProps {
  schedule: ISchedule;
  onClick?: () => void;
}

const ScheduleCard = ({ schedule, onClick }: IScheduleProps) => {
  const { colors } = useTheme();

  return (
    <Container onClick={onClick}>
      <Img src={schedule.profissional?.imagem} alt="logo" />
      <IformationContainer>
        <ProfessionalName>{schedule.profissional?.nome}</ProfessionalName>
        <InfoLine>
          <BiCalendarEvent size={20} color={colors.dark} />
          <InfoText>{schedule.dia}</InfoText>
        </InfoLine>
        <InfoLine>
          <BiTimeFive size={20} color={colors.dark} />
          <InfoText>{schedule.hora}</InfoText>
        </InfoLine>
        <InfoLine>
          <BiVideo size={20} color={colors.dark} />
          <InfoText>{schedule.tipoDaConsulta}</InfoText>
        </InfoLine>
      </IformationContainer>
    </Container>
  );
};

export default ScheduleCard;
