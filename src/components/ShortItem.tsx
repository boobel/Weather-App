import styled from "styled-components";
import clearSky from "../assets/icons/forecast-clear-sky.svg";
import cloudy from "../assets/icons/forecast-cloudy.svg";
import rain from "../assets/icons/forecast-rain.svg";
import drizzle from "../assets/icons/forecast-drizzle.svg";
import foggy from "../assets/icons/forecast-foggy.svg";
import snow from "../assets/icons/forecast-snow.svg";
import thunderstorm from "../assets/icons/forecast-thunderstorm.svg";

interface ShortItemProps {
  date: string;
  codeItem: number;
  tempItem: number;
  index: number;
}

const ShortItem: React.FC<ShortItemProps> = ({
  date,
  tempItem,
  codeItem,
  index,
}) => {
  return (
    <StyledContainer>
      <StyledItem>
        <StyledText>{date}</StyledText>
        <StyledImage
          src={weatherCodesDict[codeItem]}
          alt={weatherCodesDict[codeItem]}
        />
        <StyledText>{tempItem}°C</StyledText>
      </StyledItem>
      {index !== 4 && <StyledLine />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vh;
`;
const StyledText = styled.span``;
const StyledImage = styled.img`
  height: auto;
  width: 30%;
  object-fit: contain;
`;
const StyledLine = styled.div`
  height: 12vh;
  border: 0.25px solid grey;
`;

const weatherCodesDict: { [key: number]: string } = {
  0: clearSky,
  1: cloudy,
  2: cloudy,
  3: clearSky,
  45: foggy,
  48: foggy,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,
  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  71: snow,
  73: snow,
  75: snow,
  77: snow,
  80: rain,
  81: rain,
  82: rain,
  85: snow,
  86: snow,
  95: thunderstorm,
  96: thunderstorm,
  99: thunderstorm,
};

export { ShortItem };
