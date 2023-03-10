import ActionsHeader from "../../components/Headers/Loggedin/Header";
import { PlaceHolder } from "../../components/PlaceHolder/Placeholder";
import { BasicFlexContainer as Container } from "../../components/BasicFlexContainer/BasicFlexContainer";
// import { ChartItem, ChatsWrapper, Container } from "./Home.styles";

function Home() {
  return (
    <Container direction="column">
      <ActionsHeader title="Home screen" />
      <PlaceHolder />
    </Container>
  );
}
export default Home;
