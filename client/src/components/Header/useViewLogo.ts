import React, {SetStateAction, useEffect, useState} from "react";

export default function useViewLogo(init: boolean): [boolean, React.Dispatch<SetStateAction<boolean>>] {
    const [displayLogo, setDisplayLogo] = useState<boolean>(init);

    useEffect(() => {

        const app = document.querySelector(".app") as HTMLDivElement;
        app.addEventListener("scroll", handleScroll);
        return () => {
            app.removeEventListener("scroll", handleScroll);
        };
        function handleScroll() {
            const scrollTop = app.scrollTop;
            if (scrollTop) {
                setDisplayLogo(true);
            } else {
                setDisplayLogo(false);
            }
        }

    }, []);


    return [displayLogo, setDisplayLogo];
}