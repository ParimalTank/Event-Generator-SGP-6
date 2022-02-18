import { Grid } from '@mui/material';
import './App.css';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Grid container spacing={24}>
        <Grid item md={2.5} ml={10}>
            <EventDetails />
        </Grid>

        <Grid item md={2.5}>
            <EventDetails />
        </Grid>

        <Grid item md={2.5}>
            <EventDetails />
        </Grid>

        <Grid item md={2.5}>
            <EventDetails />
        </Grid>

      </Grid>
        
      </header>
    </div>
  );
}

export default App;
