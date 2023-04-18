import React from "react";
import { useState } from 'react'
import {Flex, Button, IconButton, Link, Heading, Box } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'



function Homepage () {
  const [display, changeDisplay] = useState('none');
    return (

  <Flex>
    <Box mr='2em' ml='2em'><Heading as='h1'>W.</Heading></Box>
    
    
<Flex top="1rem" right="1rem" align="center">
 
    {/* Desktop */}
  <Flex position='fixed' display={['none', 'none', 'flex','flex']} color='black' justify='space-between'>
        <Link href="/" passHref>
      <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
        Home
      </Button>
    </Link>

    <Link href="/about" passHref>
      <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
        About
      </Button>
    </Link>

    <Link href="/contact" passHref>
      <Button as="a" variant="ghost" aria-label="Popular" my={5} w="100%">
        Popular
      </Button>
    </Link>
  

   <Link href="/popular" passHref>
      <Button as="a" variant="ghost" aria-label="Popular" my={5} w="100%">
        Popular
      </Button>
    </Link>
  

   <Link href="/trend" passHref>
      <Button as="a" variant="ghost" aria-label="trend" my={5} w="100%">
        trend
      </Button>
    </Link>
  

   <Link href="/news" passHref>
      <Button as="a" variant="ghost" aria-label="news" my={5} w="100%">
       news
      </Button>
    </Link>
  </Flex>

  {/* Mobile */}
  <IconButton
    aria-label="Open Menu"
    size="lg"
    mr={2}
    icon={<HamburgerIcon />}
    onClick={() => changeDisplay('flex')}
     display={['flex', 'flex', 'none', 'none']}
  />
  {/* <Switch color="green" isChecked={isDark} onChange={toggleColorMode} /> */}
</Flex>


{/* Mobile Content */}
<Flex
 w='100vw'
display={display}
  bgColor="gray.50"
   zIndex={20}
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    overflowY="auto"
  flexDir="column"
>
  <Flex justify="flex-end">
    <IconButton
      mt={2}
      mr={2}
      aria-label="Open Menu"
      size="lg"
      icon={<CloseIcon />}
      onClick={() => changeDisplay('none')}
    />
  </Flex>

  <Flex flexDir="column" align="center">
   <Link href="/" passHref>
      <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
        Home
      </Button>
    </Link>

    <Link href="/about" passHref>
      <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
        About
      </Button>
    </Link>

    <Link href="/contact" passHref>
      <Button as="a" variant="ghost" aria-label="Popular" my={5} w="100%">
        Popular
      </Button>
    </Link>
  

   <Link href="/popular" passHref>
      <Button as="a" variant="ghost" aria-label="Popular" my={5} w="100%">
        Popular
      </Button>
    </Link>
  

   <Link href="/trend" passHref>
      <Button as="a" variant="ghost" aria-label="trend" my={5} w="100%">
        trend
      </Button>
    </Link>
  </Flex>
</Flex>
</Flex>


    )

}
 export default Homepage;