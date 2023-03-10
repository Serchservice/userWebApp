import ActionsHeader from "../../components/Headers/Loggedin/Header";
import { PlaceHolder as ChatPlaceHolder } from "../../components/PlaceHolder/Placeholder";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";

function Call() {
  return (
    <Container direction="column">
      <ActionsHeader title="call screen" />
      <ChatPlaceHolder />
    </Container>
  );
}
export default Call;
