// Complete the Index page component for a note-taking app similar to Google Keep
import { useState } from "react";
import { Box, Button, Flex, Input, Text, VStack, useColorMode, useColorModeValue, IconButton, Stack, Heading } from "@chakra-ui/react";
import { FaPlus, FaSun, FaMoon, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Box p={5} bg={bgColor} minH="100vh">
      <Flex justifyContent="space-between" mb={5}>
        <Heading color={color}>Note Keeper</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={4}>
        <Flex>
          <Input placeholder="Add a new note..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && addNote()} />
          <Button ml={2} onClick={addNote} leftIcon={<FaPlus />} colorScheme="blue">
            Add
          </Button>
        </Flex>
        <Stack spacing={4} w="100%">
          {notes.map((note, index) => (
            <Flex key={index} justify="space-between" align="center" p={4} bg="white" borderRadius="md" boxShadow="md">
              <Text>{note}</Text>
              <IconButton icon={<FaTrash />} onClick={() => deleteNote(index)} aria-label="Delete note" colorScheme="red" />
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default Index;
