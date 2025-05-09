import {Stack, Container, Text} from "@chakra-ui/react"
import Navbar from './Components/Navbar'
import UserGrid from './Components/UserGrid'
export const BASE_URL = "http://localhost:5000/api";
import {useState} from 'react'


function App() {
  /*Database sanga Connection start*/
  const [users, setUsers] = useState([]);

  return (
            <Stack minH={"100vh"}>
              <Navbar setUsers={setUsers} />

              <Container maxW={"1200px"} my={4}>
                <Text
                  fontSize={{base:"3xl", md:"50"}}
                  fontWeight={"bold"}
                  letterSpacing={'2px'}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  mb={8}
                >
                  <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
                    NRB को मेरो साथीहरु !
                  </Text>
                  🚀
                </Text>

                <UserGrid users={users} setUsers={setUsers} />

              </Container>

            </Stack>
  )
}

export default App
