import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import test from "../../assets/json/mbti.json"
import QuestionTestMBTI from "../../component/QuestionTestMBTI/QuestionTestMBTI";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import style from "./MBTITest.module.css"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const MBTITest = () => {
    const [choices, setChoices] = useState([]);
    const [index, setIndex] = useState(0)
    const [disabled, setDisabled] = useState(true)

    const setAns = (a) => {
        let temp = choices
        temp[index] = a
        setChoices(temp)
        setDisabled(false)
    }

    const handleSubmit = () => {
        setDisabled(true)
        index == 4 ? console.log(choices) : setIndex(index + 1)
    }

    return <div>
        <div style={{maxWidth: "550px", margin: "auto"}}>
            <BorderLinearProgress variant="determinate" value={(index + 1) / 3 * 100} />
            <QuestionTestMBTI quest={test.questions[index]} setAns={a => setAns(a)} />
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
            <Button variant="outlined">
                Làm sau
            </Button>
            <Button variant="contained" onClick={handleSubmit} disabled={disabled}>
                {index == 4 ? "Done" : "Continue"}
            </Button>
            
            
            </div>
            
        </div>
    </div>
}

export default MBTITest