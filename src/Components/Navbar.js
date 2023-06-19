import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <ToolBar>
          <Typography variant='h5'>Bank of React</Typography>
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
