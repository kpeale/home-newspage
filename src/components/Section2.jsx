import React from "react";
import picture from '../assets/image-web-3-desktop.jpg';
import picture1 from '../assets/image-retro-pcs.jpg';
import picture2 from '../assets/image-top-laptops.jpg';
import picture3 from '../assets/image-gaming-growth.jpg';
import {Box, Grid, GridItem, Heading, Text, Button, Image, Container} from '@chakra-ui/react';

function Section2 () {
    return (
      <Box>
      
   <Grid h='200px' templateRows={['repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(2, 1fr)' ]} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)' ]}gap={4} ml='2em' mr='2em' zIndex={50}> 

   <GridItem rowSpan={1} colSpan={2} >
    <Box>
         <Image src={picture} alt='games' />
    </Box>
   </GridItem>
  <GridItem rowSpan={[1,1,1,2]} colSpan={[2,2,2,1]} bg='blackAlpha.900' w={['25em', '25em', '25em', '20em'  ]} > 
  <Container maxW='sm' >
    <Box as='div' >
    <Heading color='orange.200' my='1em' >New</Heading>
    <Box as='div' borderBottom='1px' borderColor='hsl(233, 8%, 79%)'>
        <Heading as='h3' size='md' color='white'>Hydrogen VS Electric Cars</Heading>
        <Text fontSize='sm' color='hsl(233, 8%, 79%)' my='1.5em' >Will hydrogen-fueled cars ever catch up to EVs?</Text>
    </Box>
    <Box as='div' color='white' my='2em' borderBottom='1px' borderColor='hsl(233, 8%, 79%)'><Heading as='h3' size='md'>The Downsides of AI Artistry</Heading>
        <Text fontSize='sm'  color='hsl(233, 8%, 79%)' my='1.5em'>What are the possible adverse effects of on-demand AI image generation?</Text>
   </Box>

    <Box as='div' color='white' my='2em' ><Heading as='h3' size='md'>Is VC Funding Drying Up?</Heading>
        <Text fontSize='sm' color='hsl(233, 8%, 79%)' my='1.5em'>Private funding by VC firms is down 50% YOY. We take a look at what that means</Text></Box>
  </Box>
  </Container>
  
  </GridItem>

  <GridItem > 
    <Container maxW='xs' ml='-1em'>
      <Text fontSize='5xl' fontWeight='700' w={['10em', '10em', '10em', '6em']}>The Bright Future of Web 3.0?</Text>
    </Container>
  
  </GridItem>

  <GridItem > 
    <Box as='div' mt='1.5em' ml='-5em' >
        <Container mb='1em' maxW='md' > 
          <Text fontSize='xl' color='hsl(233, 8%, 79%)' fontWeight='700' mt={['8em', '8em', '8em', '-10px'  ]}  ml={['-20em', '-20em', '-20em', '-5em']}  w={['20em', '20em', '20em', '25em']}>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </Text>
          </Container>
        <Button colorScheme='red' ml={['-20em', '-20em', '-20em', '-2em']} > Read More</Button>
    </Box>
  </GridItem>

    </Grid>


 <Grid mt={['60em', '60em', '60em', '30em']} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(6, 1fr)']} templateRows={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(1, 1fr)' ]} gap={2} mb='5em' ml='2em' mr='5em'>
        <GridItem rowSpan={1} colSpan={1}>
          <Box>
             <Image boxSize='180px' src={picture1} display="inline"/>
          </Box>
          </GridItem> 

          <GridItem colSpan={1}>
            <Heading as='h3' size='lg' my='13px' color='hsl(233, 8%, 79%)'>01</Heading>
            <Heading as='h4' size='md'>Reviving Retro Pcs</Heading>
            <Text mt='13px'>What happens when old PCs are given modern upgrades?</Text>
        </GridItem>

         <GridItem>
          <Box>
            <Image boxSize='180px' src={picture2}/>
          </Box>
        </GridItem>    

        <GridItem colSpan={1}>
            <Heading  as='h3' size='lg' my='13px' color='hsl(233, 8%, 79%)'>02</Heading>
            <Heading as='h4' size='md'>Top 10 Laptops of 2022</Heading>
            <Text mt='13px'>Our best picks for various needs and budgets.</Text>
        </GridItem>

        <GridItem>
          <Box>
            <Image  boxSize='180px' src={picture3}/>
          </Box>
         </GridItem> 

         <GridItem colSpan={1}>  
            <Heading as='h3' size='lg' my='13px' color='hsl(233, 8%, 79%)'>03</Heading>
            <Heading as='h4' size='md'>The Growth of Gaming</Heading>
            <Text  mt='13px'>How the pandemic has sparked fresh opportunities</Text>
        </GridItem>
    </Grid>
</Box>

    )
    

}

export default Section2;