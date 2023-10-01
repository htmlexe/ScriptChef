import { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import style from "./SelectHaveOrientation.module.css";
import { useNavigate } from "react-router-dom";

const SelectHaveOrientation = ({ setIsSelectedOrien }) => {
    const [choice, setChoice] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setChoice(event.target.value);
    }

    const handleSubmit = () => {
        setIsSelectedOrien(true);
        if (!choice) {
            console.log(true);
            navigate("/mbti-test");
        } else {
            navigate("/sign-in")
        }
    }

    return <div>
        <div>
            <FormControl className={style.container}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                <h4 style={{margin: "20px 0", color: "black"}}>Bạn đã có định hướng nghề nghiệp tương lai cho mình chưa?</h4>
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={choice}
                    onChange={handleChange}
                >
                    <div className={style.element}>
                        <FormControlLabel value={true} control={<Radio />} label="Đã có định hướng nghề nghiệp cho riêng mình." />
                    </div>
                    <div className={style.element}>
                        <FormControlLabel value={false} control={<Radio />} label="Chưa có định hướng nghề nghiệp nào." />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
        <Button variant="contained" onClick={handleSubmit}>
            Continue
        </Button>
    </div>
}

export default SelectHaveOrientation