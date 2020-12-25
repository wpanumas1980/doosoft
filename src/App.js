
import './App.css';
import SignUp from './containers/pages/SignUp/SignUp';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div style={{ background: '#232323' }}>
      <Container maxWidth="lg" >
        <SignUp />
      </Container>
    </div>
  );
}

export default App;
