import React, { useState } from "react";

function useFlip() {
    const [isFlipped, setIsFlipped] = useState(false)

    const toggleFlip = () => {
        setIsFlipped(prev => !prev)
    };
    return [isFlipped, toggleFlip]
}

export default useFlip;