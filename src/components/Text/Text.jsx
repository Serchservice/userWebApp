import { TextElement } from "./text.styles";

const Text = ({ fontSize, fontWeight, color, lineHeight, children }) => {
  return (
    <TextElement
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </TextElement>
  );
};

export default Text;
