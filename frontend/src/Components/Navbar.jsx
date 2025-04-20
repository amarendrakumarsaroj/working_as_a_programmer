import React from 'react'
import {Container,
        Flex,
        Box,Text, Button, useColorMode,
        useColorModeValue
        } from "@chakra-ui/react"

import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";        
import CreateUserModal from './CreateUserModal';

const Navbar = ({setUsers}) => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container maxW={'900px'}>
            <Box
            px={4}
            my={4}
            borderRadius={5}
            bg={useColorModeValue("gray.200","gray.700")} >
              <Flex h="20"
                    alignItems={"center"}
                    justifyContent={"space-between"}
              >
                {/*Left side*/}
                <Flex
                  alignContent={"center"}
                  justifyContent={"center"}
                  gap={3}
                  display={{base:"none", sm:"flex"}}
                >
                  <img src="/react.png" alt="react logo" width={75} height={21}/><Text textColor={"white"} fontSize={"40px"}>+</Text>
                  <img src="/python.png" alt="react logo" width={55} height={40}/><Text textColor={"white"} fontSize={"40px"}>=</Text>
                  <img src="/explode.png" alt="react logo"  width={55} height={20}/>
                </Flex>
                 {/*Right side*/}
                <Flex
                gap={3}
                alignItems={"center"}
                ><Text fontSize={"lg"} textColor={"white"} fontWeight={500} display={{base:"none", md:"block"}}>BFFship 🔥</Text></Flex>
                <Button onClick={toggleColorMode}> { colorMode === "light" ? <IoMoon /> : <LuSun size={20} /> } 
                </Button>  
                <CreateUserModal setUsers={setUsers} />
              </Flex>
            </Box>
            
    </Container>
      

  );
}
export default Navbar
