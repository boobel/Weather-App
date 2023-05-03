import styled from "styled-components";

interface ToggleSwitchProps {
  on: boolean;
  onClick: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ on, onClick }) => {
  return (
    <ToggleSwitchWrapper onClick={onClick}>
      <ToggleSwitchSlider on={on} />
    </ToggleSwitchWrapper>
  );
};

const ToggleSwitchWrapper = styled.div`
  display: inline-block;
  height: 20px;
  width: 40px;
  background-color: grey;
  border-radius: 10px;
  position: relative;
`;

const ToggleSwitchSlider = styled.div<{ on: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.on ? "#0377cd" : "#101b2b")};
  transition: 0.4s;
  border-radius: 10px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 10px;
    ${(props) => (props.on ? "transform: translateX(20px)" : "")};
  }
`;

export { ToggleSwitch };
