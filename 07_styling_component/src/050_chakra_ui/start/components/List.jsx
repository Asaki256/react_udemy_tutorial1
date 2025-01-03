import { HStack, IconButton, StackDivider, Text, VStack } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <VStack
      divider={<StackDivider />}
      width="80%"
      bgColor="white"
      // sm:スマホ、md:タブレット、lg:ノートPC、xl:通常のデスクトップ、2xl：でかい画面
      // color={{ sm: "red.600", md: "blue.600", lg: "green.500", xl: "red.600" }}
      borderColor="blackAlpha.100"
      borderWidth="1px"
      borderRadius="3px"
      p={5}
      alignItems="start"
    >
      {todos.map((todo) => {
        return (
          <HStack key={todo.id} spacing="5">
            <IconButton
              onClick={() => complete(todo.id)}
              icon={<VscCheck />}
              isRound="true"
              bgColor="cyan.100"
              opacity="0.5"
            >
              完了
            </IconButton>
            <Text>{todo.content}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
