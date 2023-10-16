import { Container } from "@mui/material";
import { Header } from "./components";
import { Content } from "./components/content";

export const App = () => (
  <Container>
    <Header />

    <Content />
  </Container>
);

export default App;
