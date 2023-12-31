import {AppBar,Toolbar,styled} from '@mui/material';
import logo from '../Util/logo.png'
import App from '../App';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';

const Container = styled(AppBar)`
    background :#060606;
    height:9vh;
`
//const logo = '../Util/logo.png';

const Header = () =>{
    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{width:40}}/>
            </Toolbar>
        </Container>
    )
}
export default Header;