// import React from 'react'
import "../page-one/page-one.css";
import { Typography, Box, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";


function Footer() {
    return (
        <>
          
                <main>
                    <footer className='footer'>
                        <Box>
                            <Box sx={{ p: "2.5rem 0", textAlign: "center" }}>
                                <Typography variant="h5" >
                                    Want to work with us?
                                </Typography>
                                <Typography
                                    variant="body1" component="p"
                                >
                                    Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem
                                    dolore, alias, <br />
                                    numquam enim ab voluptate id quam harum ducimus cupiditate similique
                                    quisquam et deserunt,<br />
                                    recusandae.here
                                </Typography>

                                <Typography variant="h4">
                                    CONTACT US
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    padding: "7% 0 7% 12%",
                                    borderTop: "1px solid #ccc",
                                    borderBottom: "1px solid #ccc",
                                    ColumnCount: "4",
                                    columnGap: "80px",
                                    // justifyContent: "start",
                                    textTransform: "uppercase"
                                   
                                }}  >
                                <Box>
                                    <Typography variant="h6" >
                                        Company
                                    </Typography>
                                    <Link underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem",fontSize:"15px" }}>
                                        About Us
                                    </Link>
                                    <Link underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem" ,fontSize:"15px"}}>
                                        Our Team
                                    </Link>
                                    <Link underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem",fontSize:"15px" }}>
                                        Our Location
                                    </Link>
                                    <Link underline="none" sx={{ display: "block", color: "#555",fontSize:"15px" }}>
                                        Careers
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography variant="h6" >
                                        Customer Care
                                    </Typography>
                                    <Link underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem",fontSize:"15px" }}>
                                        Contact Us
                                    </Link>
                                    <Link underline="none" sx={{ display: "block", color: "#555",fontSize:"15px" }}>
                                        Support
                                    </Link>
                                </Box>

                                <Box>
                                    <Typography variant="h6" >
                                        Legal
                                    </Typography>
                                    <Link  underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem" ,fontSize:"15px"}}>
                                        Terms of Use
                                    </Link>
                                    <Link  underline="none" sx={{ display: "block", color: "#555", marginBottom: "0.5rem",fontSize:"15px" }}>
                                        Privacy Policy
                                    </Link>
                                    <Link underline="none" sx={{ display: "block", color: "#555",fontSize:"15px" }}>
                                        Warranty
                                    </Link>
                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem",fontSize:"15px" }}>
                                        Follow Us
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "2rem",
                                            justifyContent: "center",
                                            
                                        }}
                                    >
                                        <Facebook sx={{ color: "rgb(249, 249, 249)",backgroundColor:"blue" ,fontSize: "18px" }} />
                                        <Instagram sx={{ color: "rgb(249, 249, 249)", backgroundColor:"rgb(250, 59, 186)",fontSize: "18px"  }} />
                                        <LinkedIn sx={{ color: "rgb(249, 249, 249)",backgroundColor:"rgb(70, 70, 248)",fontSize: "20px" ,fontSize: "18px"  }} />
                                        <YouTube sx={{ color: "rgb(249, 249, 249)",backgroundColor:"red",fontSize: "18px"  }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" component="h1">
                                © Copyright 2024. Funnel Templates 4. All Rights Reserved.
                            </Typography>
                        </Box>
                    </footer>
                </main>
          
        </>
    )
}
export default Footer