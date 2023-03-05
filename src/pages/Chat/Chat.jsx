import ActionsHeader from "../../components/Headers/Loggedin/Header";
import { PlaceHolder as ChatPlaceHolder } from "../../components/PlaceHolder/Placeholder";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";

function Chat() {
  return (
    <Container direction="column">
      <ActionsHeader title="chat screen" />
      <ChatPlaceHolder />
    </Container>
  );
}
export default Chat;
