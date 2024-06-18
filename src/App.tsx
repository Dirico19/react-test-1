import { Container } from "@mui/material";
import { UsersList } from "./pages/users";

function App() {

  return (
    <>
      <Container sx={{padding: "25px 0"}}>
        <UsersList />
      </Container>
    </>
  );
}

export default App;
