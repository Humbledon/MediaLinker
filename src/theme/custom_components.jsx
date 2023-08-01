import { Container, List, ListItem,ListItemText , Link, Box, Button, styled,Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@mui/material/styles';

export const NavDiv = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1 3rem",
    marginTop: "1.5rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'
       
        padding: "0rem",
        
      },

}));

export const ContentNavDiv = styled(Box)({
    display: "flex",
    alignItems: "center",
   

});

export const LogoDiv = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    height: "2rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'
       
  
      },
     

}));

export const ButtonWithBackground = styled(Button)(({ theme }) => ({
    display: "flex",
    alignItems: "center",    
    height: "3.5rem",
    margin: "0 1rem",
    width: "12rem",
    borderRadius: "30px",
    fontFamily: 'Aileron, sans-serif',
    fontWeight: 900,
    background: "linear-gradient(to right, #0097B2, #004AAD)",
    color: "white",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
        transform: "scale(1.1)", // zooms the button on hover
    },
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'
       height: "1.5rem",
       width: "1rem",
       fontWeight: 300,
       fontSize: "0.5rem",
       margin: "0 0.5rem",
    },
    

}));

export const ButtonWithoutBackground = styled(Button)(({ theme }) => ({
    display: "flex",
    alignItems: "center",    
    height: "3.5rem",
    margin: "0 1rem",
    fontFamily: 'Aileron, sans-serif',    
    fontWeight: 900,
    color: "black",
    borderRadius: "30px",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    '&:hover': {
        transform: "scale(1.1)", // zooms the button on hover
        backgroundColor: "#f0f0f0", // changes background color on hover
    },
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'
        height: "1.5rem",
        width: "1rem",
        fontWeight: 300,
        fontSize: "0.5rem",
        margin: "0 0.5rem",
     },
     
 
 }));

export const SpacebetweenDiv = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
   
    padding: "1 3rem",
    marginTop: "1.5rem",

});
export const SeperateDiv = styled(Box)({
    display: "flex",
    flexDirection: "column",  
    alignItems: "center",
    width: "50%",
    padding: "3rem",
    marginTop: "1.5rem",

});

export const ColumnDiv = styled(Box)({
    display: "flex",
    flexDirection: "column",  
    justifyContent: "center",
    paddingBottom: "3rem",
});


export const BlueText = styled(Typography)(({ theme }) => ({
    color: "#0097B2",
    fontSize  : "4rem",
    fontFamily: 'Aileron, sans-serif',
    fontWeight: 750, 
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        fontSize  : "1.5rem",
        fontWeight: 550,
     },
     
 
 }));

export const NormalText = styled(Typography)(({ theme }) => ({
    fontSize  : "1.8rem",
    fontFamily: 'Aileron, sans-serif',
    marginTop: "1.5rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        fontSize  : "1rem",
    
     },
     
 
 }));
export const CustomList = styled('ul')({
    // ...your list styles
});

export const CustomListItem = styled('li')(({ theme }) => ({
    fontSize  : "1.5rem",
    fontFamily: 'Aileron, sans-serif',

    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        fontSize  : "1rem",
    
     },
     
 
 }));

export const CustomListItemText = styled(ListItemText)({
    fontSize  : "1.5rem",
    fontFamily: 'Aileron, sans-serif',
});
export const BoldText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize  : "1.8rem",
    fontFamily: 'Aileron, sans-serif',
    marginTop: "1.5rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        fontSize  : "1rem",
    
     },
     
 
 }));

export const BlackLine = styled(Box)({
    borderBottom:"3px solid black",
    width:"6rem",
    height:"1rem",
  })

  export const VideoPageDiv = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",  
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        marginLeft  : "11rem",
    
     },
     
  }))

  export const StepPresentationPageDiv = styled(Box)(({ theme }) => ({
    display: "flex",      
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        marginLeft  : "11rem",
    
     },
     
  }))
  
  export const StepPresentation = styled(Box)({
    display: "flex",
    alignItems: "center"     

});

export const CampaignPresentationPageDiv = styled(Box)(({ theme }) => ({
    display: "flex",      
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        marginLeft  : "12rem",
    
     },
     
  }))

  export const PresentationBox = styled(Box)(({ theme }) => ({
    display: "flex",   
    flexDirection: "column",   
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "3rem",
    padding : "3rem",
  
     
  }))

  export const TemoignagePageDiv = styled(Box)(({ theme }) => ({
    display: "flex",      
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2.5rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        marginLeft  : "12rem",
    
     },
     
  }))

  export const Rowbox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "3rem"
  });


  export const FAQPageDiv =  styled(Box)(({ theme }) => ({
    display: "flex",      
    alignItems: "center",
    flexDirection: "column",    
    paddingTop: "3.3rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down('sm')]: { // Appliquer ces styles pour les écrans inférieurs ou égaux à 'sm'

        marginLeft  : "12rem",
    
     },
     
  }))
  export const RessourcesDiv = styled(Box)({
    display: "flex",      
    alignItems: "center",
    flexDirection: "column",    
    paddingTop: "3.3rem",
    paddingBottom: "3rem",
  })

