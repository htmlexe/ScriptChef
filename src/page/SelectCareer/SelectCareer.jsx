import { useEffect, useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import style from "../../component/QuestionTestMBTI/QuestionTestMBTI.module.css"
import { useNavigate } from "react-router";

const SelectCareer = () => {
    const [choice, setChoice] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setChoice(event.target.value);
    }

    const handleSubmit = () => {
        navigate("/career-detail");
    }

    return <div style={{ maxWidth: "550px", margin: "auto" }}>
        <div className={style.container}>
            <FormControl className={style.container}>
                <FormLabel id="demo-controlled-radio-buttons-group" style={{ textAlign: "center" }}>
                    <h4 style={{ margin: "20px 0", color: "black" }}>Công việc bạn muốn theo đuổi</h4>
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={choice}
                    onChange={handleChange}
                >
                    <div className={style.element}>
                        <FormControlLabel value={"0"} control={<Radio />} label="Product Owner" />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"1"} control={<Radio />} label="Scrum Master" />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"2"} control={<Radio />} label="Front-end developer" />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={"3"} control={<Radio />} label="Back-end developer" />
                    </div>
                </RadioGroup>
            </FormControl>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Button variant="outlined">
                    Làm sau
                </Button>
                <Button variant="contained" onClick={handleSubmit} disabled={choice == null}>
                    Continue
                </Button>
            </div>
        </div>
    </div>
}

export default SelectCareer;