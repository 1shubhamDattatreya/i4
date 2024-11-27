
import "../page-one/page-one.css";
import { Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PageTwo() {
    return (
        <main>
            <section className="container-two">
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ width: "460px " }}>
                        <Typography variant="h6" gutterBottom>
                            MEET THE FOUNDER & CEO
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Empower Your Marketing with <br /> Seamless Client Management
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Our CRM software is designed specifically for marketing
                            agencies   looking to streamline client management and boost
                            engagement. With intuitive tools and automated features, our
                            solution helps you organize client data, track interactions, and
                            optimize your   marketing efforts—all in one place. Say goodbye
                            to scattered  information and hello to a more efficient,
                            productive workflow.
                        </Typography>
                        <Box component="ul" >
                            <Box component="li">
                                <CheckCircleIcon id='checkcircle' />
                                <Typography variant="body1">Enhance Team Collaboration Effortlessly</Typography>
                            </Box>
                            <Box component="li">
                                <CheckCircleIcon id='checkcircle' />
                                <Typography variant="body1">Streamline Customer Interactions Efficiently</Typography>
                            </Box>
                            <Box component="li">
                                <CheckCircleIcon id='checkcircle' />
                                <Typography variant="body1">Boost Sales with Data Insights</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                            alt="Loading..."
                        />
                    </Box>
                </Box>
            </section>
        </main>

    );
}

export default PageTwo;
