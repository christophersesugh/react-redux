// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Container maxWidth="sm">
      <Box justifyContent="center">
        <Typography variant="h5" component="h5">
          {account}
        </Typography>
        <ButtonGroup>
          <Button onClick={() => withdrawMoney(100)}>-</Button>
          <Button onClick={() => depositMoney(3000)}>+</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default App;
