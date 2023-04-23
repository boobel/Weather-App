import styled from "styled-components";

const AirQuality = () => {
  return (
    <StyledContainer>
      <h3>Air Quality</h3>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  width: 50vw;
  height: 30vh;
  border-radius: 1rem;
  background-color: var(--primary-color);
`;

export { AirQuality };
