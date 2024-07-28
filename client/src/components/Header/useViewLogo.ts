import React, {SetStateAction, useEffect, useState} from "react";

export default function useViewLogo(init: boolean): [boolean, React.Dispatch<SetStateAction<boolean>>] {
    const [displayLogo, setDisplayLogo] = useState<boolean>(init);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = document.body.scrollTop;
            if (scrollTop) {
                setDisplayLogo(true);
            } else {
                setDisplayLogo(false);
            }
        }

        document.body.addEventListener("scroll", handleScroll);
        return () => {
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return [displayLogo, setDisplayLogo];
}