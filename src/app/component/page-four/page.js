import "../page-one/page-one.css";
import { Button, Typography, Box, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Page_four() {
    return (
            <main>
                <section className='section-page-four'>

                    <Box sx={{ textAlign: "center", marginBottom: 4, p: "50px 0 0 ", color: "white" }}>
                        <Typography variant="h6" >
                            STILL NOT SURE?
                        </Typography>
                        <Typography variant="h4" >
                            Frequently Asked Questions
                        </Typography>
                        <Typography variant="body1" component="p">
                            Find answers to our most frequently asked questions here.
                        </Typography>
                    </Box>

                    <Box  >
                        <Accordion className='Accordion' >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Question 1: What is CRM software, and how does it work?
                            </AccordionSummary>
                        </Accordion>
                        
                        <Accordion className='Accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                Question 2: How can CRM software benefit my business?
                            </AccordionSummary>
                        </Accordion>
                        <Accordion className='Accordion' >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                Question 3: Is CRM software suitable for small businesses?
                            </AccordionSummary >
                        </Accordion>
                        <Accordion className='Accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                Question 4: Can CRM software integrate with other tools?
                            </AccordionSummary >
                        </Accordion>
                    </Box>
                    <Button variant="contained" color="primary" >
                        Get Answers
                    </Button>
                </section>
            </main>
    );
}

export default Page_four