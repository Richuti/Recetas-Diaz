import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";


function Header() {
  return (
    <Container mt="1" maxW="3xl">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoMdSearch color="gray" />
        </InputLeftElement>
        <Input type="text" placeholder="Buscar receta" />
      </InputGroup>
    </Container>
  );
}

export default Header;
