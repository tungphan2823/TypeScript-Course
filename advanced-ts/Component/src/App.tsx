import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
function App() {
  return (
    <main>
      <p>
        <Container as={Button}> Click me</Container>
      </p>
    </main>
  );
}

export default App;
