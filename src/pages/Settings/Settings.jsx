import ActionsHeader from "../../components/Headers/Loggedin/Header";
import { PlaceHolder as ChatPlaceHolder } from "../../components/PlaceHolder/Placeholder";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";

function Settings() {
  return (
    <Container direction="column">
      <ActionsHeader title="settings screen" />
      <ChatPlaceHolder />
    </Container>
  );
}
export default Settings;
