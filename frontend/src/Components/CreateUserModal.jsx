import React from 'react'
import {useState} from 'react'
import {Button,  useDisclosure, Input, FormLabel,
     FormControl, Flex, Modal, ModalBody, 
     ModalHeader, ModalCloseButton, ModalContent, 
     ModalOverlay, Textarea,
     RadioGroup, Radio,
     ModalFooter,
     useToast
 } from "@chakra-ui/react"
import {BiAddToQueue} from "react-icons/bi"
import { BASE_URL } from '../App'


const CreateUserModal = ({setUsers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name:"",
        role:"",
        description:"",
        gender:"",
    });
    const toast = useToast();
    const handleCreateUser = async (e) => {
        //prevent reload
        e.preventDefault();   
        //Set isLoading to true 
        setIsLoading(true);    
        try {
            const res = await fetch(BASE_URL+"/friends",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error)
            }
            
            toast({
                status: "success",
                title: "💐 Yayy! 🎉",
                description: "Friend Created Successfully",
                duration: 2000,
                position: "top-center",
            });
            onClose();
            //Refresh nagari add gareko naya lai dekhauna
            setUsers((prevUsers) => [...prevUsers, data]);
            setInputs({
                name:"",
                role:"",
                description:"",
                gender:"",
            }); //clear Inputs

            
        } catch (error) {
            toast({
                status: "error",
                title: "An error occurred !",
                description: error.massage,
                duration: 4000,
            });            
        } finally{
            setIsLoading(false);
            
        }
    };


  return (
    <>      <Button onClick={onOpen}>
                        <BiAddToQueue size={20} />
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleCreateUser}>
                <ModalContent>
                    <ModalHeader> My New BFF 😍 </ModalHeader>
                    <ModalCloseButton />
                    
                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input placeholder="Ram Hari Shrestha" 
                                value={inputs.name}
                                onChange={(e) => setInputs({...inputs, name: e.target.value}) } 
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input placeholder="Software Engineer" 
                                value={inputs.role}
                                onChange={(e) => setInputs({...inputs, role: e.target.value}) } 
                                />
                            </FormControl>                            
                        </Flex>
                        <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder="He's a Software Engineer who loves to code and build things"                                
                                    value={inputs.description}
                                    onChange={(e) => setInputs({...inputs, description: e.target.value}) } 
                                />
                            </FormControl>
                            <RadioGroup mt={4}>
								<Flex gap={5}>
									<Radio
										value='male'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
									>
										Male
									</Radio>
									<Radio
										value='female'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
									>
										Female
									</Radio>
								</Flex>
							</RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit'
                        isLoading={isLoading}
                        >Add</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>

                </ModalContent>
                </form>
            </Modal>
    </>
  )
}

export default CreateUserModal
