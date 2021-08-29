import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '55px',
  },
  mapContainer: {
    height: '105vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
    
    
  },
  Typography:{
    fontSize:"7px",
    
  },
  phoneCall:{
    textDecoration:'none',
    
  },
  
  title: {
   
    [theme.breakpoints.up('sm')]: {
        display: 'block',
        width:"100%",
        
        
    },
},
}));
