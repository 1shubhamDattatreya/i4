import "../page-one/page-one.css";
import { Button, Typography, Box } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function PageOne() {
    return (
        <main>
            <section
                className='container-one'
                style={{
                    backgroundImage: "url(https://rollercoastertraveller.com/wp-content/uploads/2020/11/img-worlds-november-2020-1.jpg)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: " space-between",
                    color: "white",
                }} >
                    <img src='logo' alt='Logo......'/>
                    <div className="logo-no">
                        <PhoneIphoneIcon sx={{ height: "18px" }} />
                        <Typography variant='body1' component="span">(214) 405-5533</Typography>
                    </div>
                </Box>
               
                    <Typography variant="h2" sx={{
                        paddingTop: "12vh",
                        fontSize: "4vw",
                        fontWeight: "700",
                        color: "azure"
                    }}>
                        Your All-In-One CRM <br /> Awaits!
                    </Typography>
             
                <Button
                    variant="contained"
                    color="primary"
                >
                    Claim Your
                </Button>
            </section>
        </main>
    );
}
export default PageOne;
