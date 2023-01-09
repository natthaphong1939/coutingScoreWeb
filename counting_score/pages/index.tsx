import { Button, Container, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { plus, minus } from './is.ts';








const IndexPage = () => {
  const [counter, setCounter] = useState(0)
  const [a, seta] = useState(0)

  // useEffect(() => {
  //   const data = localStorage.getItem('counterUpdate')
  //   if (data != null) setCounter(JSON.parse(data))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('counterUpdate', JSON.stringify(counter))
  // }, [counter])

  return (
    <Stack direction={'column'}>
      <Flex alignItems="center" justifyContent={"center"}>
        <Button roundedBottom={'full '}>
          เวลา {/*  เดี๋ยวทำ */}
        </Button>
      </Flex>

      <Flex alignItems="center" justifyContent={"center"}>
        <Flex direction={'column'} background="red.100" p={"12"} rounded='5' align={'center'}>
          <Heading mb={6}>score</Heading>
          <Heading mb={10} >{counter}</Heading>
          <Flex>
            <Button onClick={() => setCounter(plus(counter))}>+</Button>
            <Button onClick={() => setCounter(minus(counter))}>-</Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} p={"12"} align={'center'}>
          <Button rounded={'full'}></Button>
        </Flex>
        <Flex direction={'column'} background="blue.100" p={"12"} rounded='5' align={'center'}>
          <Heading mb={6}>score</Heading>
          <Heading mb={10} >{counter}</Heading>
          <Flex>
            <Button onClick={() => setCounter(plus(counter))}>+</Button>
            <Button onClick={() => setCounter(minus(counter))}>-</Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex justify={'center'} >
        <Flex p={12} background={'red.100'}>
          <Heading>{counter}</Heading>
        </Flex>
        <Flex p={12} background={'blue.100'}>
          <Heading>{counter}</Heading>
        </Flex>
      </Flex>

    </Stack>
  )
}

export default IndexPage