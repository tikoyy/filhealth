import { AppBar, Toolbar, Typography } from "@mui/material";
//import App from "../pages/App";





export default function Header() {
    return(
        <AppBar position="static"
            style={{
                backgroundColor: "white"
            }}
        >
            <Toolbar variant="dense">
                <img
                    src={`https://www.philhealth.gov.ph/images/ph_logo0.png`}
                    alt={'Philhealth Logo'}
                    loading="lazy"
                />
                <img 
                    src={`https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png`}
                    alt={'Bagong Pilipinas logo'}
                    loading="lazy"
                    />
                
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>    
        </AppBar>
    );
}