import "../page-one/page-one.css";
import { Button, Typography, Box, Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Page_six() {
    return (
            <main>
                <section className="container-six">
                   
                        <Box sx={{ textAlign: "center", paddingBottom: "2rem", color: "white" }}>
                            <Typography variant="h5" gutterBottom>
                                INTRODUCING
                            </Typography>
                            <Typography
                                variant="h2"
                
                            >
                                Transform Your Marketing With Our CRM
                                <br />
                                Software
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "30px",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ textAlign: "center", maxWidth: "400px" }}>
                                <Typography variant="h6" >
                                    Ultimate CRM Solution
                                </Typography>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                                    alt="Loading... "
                                />
                                <Typography
                                    variant="body1" component="h1"
                                    
                                >
                                    100% risk-free - 30-day money-back guarantee
                                </Typography>
                            </Box>
                            <Card className="card" >
                                <Typography variant="h5"  >
                                    Here's what you get:
                                </Typography>

                                <Box variant="body1" component="span" >

                                    <CheckCircleIcon id="checkcircle" />

                                    <Typography sx={{ lineHeight: "2.2rem" }}> Comprehensive Client Management
                                        Effortlessly organize and track all client
                                        interactions in one place.
                                    </Typography>
                                </Box>
                                <Box variant="body1" component="span" >

                                    <CheckCircleIcon id="checkcircle" />

                                    <Typography gutterBottom sx={{ lineHeight: "2.2rem" }}>  Automated Campaigns <br/>
                                        Save time with automated marketing<br/>
                                        campaigns that reach your audience at the
                                        right moment.
                                    </Typography>
                                </Box>

                                <Box variant="body1" component="div">
                                    <Typography variant="h6" >
                                        Total value:
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                       >
                                        Today: $299/month
                                    </Typography>
                                </Box>
                                <Button variant="contained" color="primary" > Get Started Today  </Button>

                            </Card>
                        </Box>
                  
                </section>
            </main>
    );
}

export default Page_six;
