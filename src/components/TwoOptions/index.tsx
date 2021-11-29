import { useState } from "react"
import { twoOptionsProps } from "../../types"
import { TwoOptionsContainer, OptionValue } from "./index.style"

const TwoOptions = ({
    firstValue,
    secondValue,
    isDegreeForTemp,
    handleCLickOption
}: twoOptionsProps) => {
    const [highlight, setHighlight]= useState(false);
    const handleClickOptionValue = (arg: boolean) => {
        handleCLickOption(arg)
        setHighlight(arg)
    }
    return (
        <TwoOptionsContainer>
          <OptionValue isDegree={isDegreeForTemp} onClick={() => handleClickOptionValue(false)} style={{fontWeight: !highlight ? 'bolder': 'initial'}}>{firstValue}</OptionValue>
          <OptionValue isDegree={isDegreeForTemp} onClick={() => handleClickOptionValue(true)} style={{fontWeight: highlight ? 'bolder': 'initial'}}>{secondValue}</OptionValue>
        </TwoOptionsContainer>
    )
}

export default TwoOptions
