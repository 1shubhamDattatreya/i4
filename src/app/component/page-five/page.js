// import React from 'react'
import "../page-one/page-one.css";
import { Button, Typography, Box } from '@mui/material';

function Page_five() {
    return (
        <>
                <main>
                    <section className='container-five'>
                        <Box >
                            <Box sx={{ padding: "75px" }} >
                                <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "blue", letterSpacing: "2px", p: "8px 0" }} >
                                    TESTIMONIALS
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "1.7em", fontWeight: "bold" }}>
                                    What others are saying
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "5%",
                                    padding: "3% 12%",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Box sx={{ maxWidth: "300px" }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.1rem"
                                    }}>"Loved everything so far"</Typography>
                                    <Typography variant="body1" sx={{ margin: ".5em 0",color:"grey" }}>
                                        This CRM transformed our <br/> customer management! It's easy to use  <br/> and
                                        has boosted our productivity  <br/> significantly.
                                    </Typography>
                                    <Typography variant="subtitle2" color="grey" sx={{fontWeight:"bold"}}>
                                        - Sarah T.
                                    </Typography>
                                </Box>

                                <Box sx={{ maxWidth: "300px" }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.1rem"
                                    }}>"My life changed forever"</Typography>
                                    <Typography variant="body1" sx={{ margin: ".5em 0", color:"grey"}}>
                                        Our sales team loves this CRM! It keeps everything organized and has
                                        helped increase our conversions.
                                    </Typography>
                                    <Typography variant="subtitle2" color="grey" sx={{fontWeight:"bold"}}>
                                        - Mark L.
                                    </Typography>
                                </Box>

                                <Box sx={{ maxWidth: "300px" }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.1rem"
                                    }}>"Highly recommend this"</Typography>
                                    <Typography variant="body1" sx={{ margin: ".5em 0", color:"grey" }}>
                                        The insights we gain from this CRM are invaluable. It's a
                                        game-changer for our business.
                                    </Typography>
                                    <Typography variant="subtitle2" color="grey" sx={{fontWeight:"bold"}}>
                                        - Emily R.
                                    </Typography>
                                </Box>
                            </Box>
                            <Button variant="contained" color="green" >
                                Get Answers
                            </Button>
                        </Box>
                    </section>
                </main>
           
        </>
    )
}

export default Page_five