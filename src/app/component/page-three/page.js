// import React from 'react'
import "../page-one/page-one.css";
import { Typography, Box } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Page_three() {
    return (
      
            <main>
                <section className='container-three'>
                  
                        <Typography variant="h1"  >
                            FUNNEL TEMPLATES 4
                        </Typography>
                        <Typography variant="body1" component="p" >
                            Our Template Staging Process is crafted to streamline the setup and implementation of your CRM, ensuring
                            your marketing agency experiences a smooth transition and maximum efficiency from day one. with expert
                            guidance and every step, we configure and customise your CRM to meet your unique needs, helping you
                            leverage powerful tools that drive client satisfaction and operational success
                        </Typography>
                        <Box className='image-text-three'>
                            <Box >
                                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' alt='Loading...' />
                            </Box>
                        
                                <ul >
                                    <li  >
                                       <Typography variant="div">  <CheckCircleIcon  style={{color:"#31cba2", fontSize:"18px"}}/></Typography>
                                      <Typography variant="div" > <strong>Customized CRM Setup:</strong>
                                             Tailor your CRM Layout And
                                            Features To Align With Your Agency's Specific Workflowes
                                            And Goals.</Typography>
                                    </li>
                                    
                                    <li>
                                    <Typography variant="div"> <CheckCircleIcon style={{color:"#31cba2", fontSize:"18px"}} /></Typography>
                                         <Typography variant="div"> <strong>Seamless Data Migration:</strong>
                                           Easily transfer and organize
                                            your existing client data without disruptions,saving time
                                            and preserving valuable information   </Typography>
                                    </li>
                                    <li>
                                    <Typography variant="div"> <CheckCircleIcon style={{color:"#31cba2", fontSize:"18px"}} /></Typography>
                                         <Typography variant="div"> <strong>Automated Workflows:</strong>
                                            Set Up automated workflows
                                            That Simplify Repetitive Tasks, So You Can Focus On
                                            Growing Client Relationships And Delivering Results
                                        </Typography>
                                    </li>
                                    <li>
                                    <Typography variant="div">  <CheckCircleIcon style={{color:"#31cba2", fontSize:"18px"}} /></Typography>
                                       <Typography variant="div"> <strong>Ongoing Support And Training:</strong>
                                             Access Expert Support
                                            And Training Session To Ensure That Image Fully
                                            Equipped To Maximize The CRM's Capabilities
                                        </Typography>
                                    </li>
                                </ul>
                        </Box>
                   
                </section>
            </main>
      
    )
}
export default Page_three

