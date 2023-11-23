"use client"

import React from "react"
import * as RadixSlider from '@radix-ui/react-slider';

type SliderProps = {
    value: number;
    onChange?: (value: number) => void;
}
export const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
    const handleChange = (value: number[]) => {
        console.log(value)
    }
    return (
        <RadixSlider.Root
        style={{width:"170px", height:"3px"}}
        defaultValue={[1]}
        value={[value]}
        onValueChange={handleChange}
        max={1}
        step={0.1}
        arial-label='volume'
        >
            <RadixSlider.Track
            className="flex relative"
                style={{ height: "3px", background: "var(--grey-1)", position: "relative", }}
            >
                <RadixSlider.Range
                    style={{ position: "absolute", height: "100%", background: "#Fff",borderRadius:"50%" }}
                >

                </RadixSlider.Range>
            </RadixSlider.Track>
        </RadixSlider.Root>
    )
}