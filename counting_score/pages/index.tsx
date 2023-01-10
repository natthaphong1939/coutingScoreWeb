import { Button, Container, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { plus, minus } from './is.ts';
import { GameScore, ScorePlayer1, ScorePlayer2 } from "./is.ts";



const teamA: ScorePlayer1 = new ScorePlayer1("Team A");
const teamB: ScorePlayer2 = new ScorePlayer2("Team B");

const IndexPage = () => {
  // const [counter, setCounter] = useState(0)
  // const [a, seta] = useState(0)
  // console.log(teamA, teamB)

  const [ score_a, set_score_a] = useState(0);
  const [ score_b, set_score_b] = useState(0);

  const [ set_a, set_set_a] = useState(0);
  const [ set_b, set_set_b] = useState(0);

  
  // useEffect(() => {
  //   const data = localStorage.getItem('counterUpdate')
  //   if (data != null) setCounter(JSON.parse(data))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('counterUpdate', JSON.stringify(counter))
  // }, [counter])

  function reState(x: any): void {
    if (x) {

      let scoreA = x[0], scoreB = x[1];
      let setA = x[2], setB = x[3];
      // console.log(scoreA);
      
      set_score_a(scoreA)
      set_score_b(scoreB)
      set_set_a(setA)
      set_set_b(setB)
    }
  }

  function addScoreA(): void {
    reState(addScoreTeamA());
    // let x: any = addScoreTeamA()
    // if (x) {

    //   let scoreA = x[0], scoreB = x[1];
    //   let setA = x[2], setB = x[3];
    //   // console.log(scoreA);
      
    //   set_score_a(scoreA)
    //   set_score_b(scoreB)
    //   set_set_a(setA)
    //   set_set_b(setB)
    // }
  }

  function addScoreB(): void {
    reState(addScoreTeamB());
    // let x: any = addScoreTeamB()
    // if (x) {
    //   let scoreA = x[0], scoreB = x[1];
    //   let setA = x[2], setB = x[3];
    //   // console.log(scoreA);
      
    //   set_score_a(scoreA)
    //   set_score_b(scoreB)
    //   set_set_a(setA)
    //   set_set_b(setB)
    // }

  }

  function subtractScoreA(): void {
    reState(subtractScoreTeamA());
  }

  function subtractScoreB(): void {
    reState(subtractScoreTeamB());
  }

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
          <Heading mb={10} >{score_a}</Heading>
          <Flex>
            <Button onClick={() => addScoreA()}>+</Button>
            <Button onClick={() => subtractScoreA()}>-</Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} p={"12"} align={'center'}>
          <Button rounded={'full'}></Button>
        </Flex>
        <Flex direction={'column'} background="blue.100" p={"12"} rounded='5' align={'center'}>
          <Heading mb={6}>score</Heading>
          <Heading mb={10} >{score_b}</Heading>
          <Flex>
            <Button onClick={() => addScoreB()}>+</Button>
            <Button onClick={() => subtractScoreB()}>-</Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex justify={'center'} >
        <Flex p={12} background={'red.100'}>
          <Heading>{set_a}</Heading>
        </Flex>
        <Flex p={12} background={'blue.100'}>
          <Heading>{set_b}</Heading>
        </Flex>
      </Flex>

    </Stack>
  )



}


function addScoreTeamA(): any {
  // GameScore.getNumOfSetToWin();
  // console.log(GameScore.numOfSetToWin);
  
  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin()) {


    teamA.addScore();
    GameScore.updateScore(teamA, teamB)
    // const data = getDataArray();
    // console.log(typeof(data));
    // console.log(data[0]);
    // backUpVariables(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
    // backUpVariables();
    // updateScoreAndSet()
    let scoreA: number, scoreB: number
    let dataReturn = GameScore.updateScore(teamA, teamB);
    // console.log(scoreA, scoreB, setA, setB);
    console.log(dataReturn);
    
    return dataReturn;
  } else {
    alert("เอาล่ะ มันชนะแล้วลูกพี่");
  }
  // GameScore.updateScoreAndSet();
  // document.getElementById('score-a').innerText = teamA.getScore()
}

function subtractScoreTeamA() {
  teamA.subtractScore();
  // updateScoreAndSet()
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
  // backUpVariables();
  GameScore.updateScore(teamA, teamB);
  let dataReturn = GameScore.updateScore(teamA, teamB);
  return dataReturn;
}

function addScoreTeamB(): any {

  

  if (teamA.getWinSet() < GameScore.getNumOfSetToWin() && teamB.getWinSet() < GameScore.getNumOfSetToWin()) {


    teamB.addScore();
    GameScore.updateScore(teamA, teamB)
    // const data = getDataArray();
    // console.log(typeof(data));
    // console.log(data[0]);
    // backUpVariables(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
    // backUpVariables();
    // updateScoreAndSet()
    let scoreA: number, scoreB: number
    let dataReturn = GameScore.updateScore(teamA, teamB);
    // console.log(scoreA, scoreB, setA, setB);
    console.log(dataReturn);
    
    return dataReturn;
  } else {
    alert("เอาล่ะ มันชนะแล้วลูกพี่");
  }

}

function subtractScoreTeamB(): any {
  teamB.subtractScore();
  // updateScoreAndSet()
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());
  // backUpVariables();
  GameScore.updateScore(teamA, teamB);
  let dataReturn = GameScore.updateScore(teamA, teamB);
  return dataReturn;

}

function resetScoreAndSet() {
  // teamA.setScore(0);
  // teamB.setScore(0);
  // updateScoreAndSet();
  // GameScore.updateScoreAndSet();
  // backUpVariables(teamA.getScore(), teamA.getWinSet(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin());

  GameScore.resetScoreAndSet(teamA, teamB);
  // backUpVariables();


}

// comment all backUpVariables()

export default IndexPage