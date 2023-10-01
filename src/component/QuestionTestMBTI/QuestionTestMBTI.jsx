import { useEffect, useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import style from "./QuestionTestMBTI.module.css"

const QuestionTestMBTI = ({ quest, setAns }) => {
    const [choice, setChoice] = useState(null);

    useEffect(() => {
        setChoice(null)
    }, [quest])

    const handleChange = (event) => {
        setChoice(event.target.value);
        setAns(event.target.value)
    }

    return <div>
        <div className={style.container}>
            <FormControl className={style.container}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                    <h4 style={{margin: "20px 0", color: "black"}}>{quest.title}<span style={{color: "red"}}>*</span></h4>
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={choice}
                    onChange={handleChange}
                >
                    <div className={style.element}>
                        <FormControlLabel value={"0"} control={<Radio />} label={quest.selections[0]} />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"1"} control={<Radio />} label={quest.selections[1]} />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"2"} control={<Radio />} label={quest.selections[2]} />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"3"} control={<Radio />} label={quest.selections[3]} />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    </div>
}

export default QuestionTestMBTI;