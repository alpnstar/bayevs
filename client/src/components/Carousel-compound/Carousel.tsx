import React, { Children, cloneElement, useEffect, useRef, useState, ReactElement, ReactNode } from 'react';
import { CarouselContext } from './carousel-context';
import './Carousel.scss';

const TRANSITION_DURATION = 300;
const INTERVAL_SLIDE_DELAY = 10000;
let sliderTimeout: NodeJS.Timeout;

interface CarouselProps {
    children: ReactNode;
    widthInput: number;
    infinite: boolean;
}

interface CloneCount {
    head: number;
    tail: number;
}

export const Carousel: React.FC<CarouselProps> = ({ children, widthInput, infinite }) => {
    const [slideDelayActive, setSlideDelayActive] = useState<boolean>(true);
    const [step, setStep] = useState<number>(1);
    const [width, setWidth] = useState<number>(widthInput);
    const [offset, setOffset] = useState<number>(widthInput * step);
    const [height, setHeight] = useState<string>('auto');
    const [pages, setPages] = useState<ReactElement[]>([]);
    const [realItems, setRealItems] = useState<Element[]>([]);
    const [clonesCount, setClonesCount] = useState<CloneCount>({ head: 0, tail: 0 });
    const [transitionDuration, setTransitionDuration] = useState<number>(0);
    const windowElRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const items = document.querySelectorAll('.carousel-item-img');
        const array = Array.from(items);
        setRealItems(array);
    }, [pages]);

    useEffect(() => {
        setTimeout(() => {
            if (step < realItems.length && realItems[step]) {
                let itemHeight = window.getComputedStyle(realItems[step]).height;
                if (itemHeight !== '' && itemHeight !== '0px' && itemHeight !== '0') {
                    setHeight(itemHeight);
                } else {
                    setStep(step);
                }
            }
        }, 110);
    }, [step, realItems]);

    useEffect(() => {
        const windowStyles = windowElRef.current?.style;
        if (height && windowStyles) windowStyles.height = height;
    }, [height]);

    useEffect(() => {
        setOffset(-(step * width));
    }, [width]);

    useEffect(() => {
        if (infinite) {
            const childrenArray = Children.toArray(children) as ReactElement[];
            if (childrenArray.length > 0) {
                const headClone = React.isValidElement(childrenArray[childrenArray.length - 1])
                    ? cloneElement(childrenArray[childrenArray.length - 1])
                    : null;
                const tailClone = React.isValidElement(childrenArray[0])
                    ? cloneElement(childrenArray[0])
                    : null;
                if (headClone && tailClone) {
                    setPages([headClone, ...childrenArray, tailClone]);
                    setClonesCount({ head: 1, tail: 1 });
                    return;
                }
            }
        }
        setPages(Children.toArray(children) as ReactElement[]);
    }, [children, infinite]);

    useEffect(() => {
        sliderTimeout = setTimeout(() => {
            setStep(step + 1);
        }, INTERVAL_SLIDE_DELAY);
        return () => {
            clearTimeout(sliderTimeout);
        };
    }, [step]);

    useEffect(() => {
        const resizeHandler = () => {
            const windowElWidth = windowElRef.current?.offsetWidth || widthInput;
            setWidth(windowElWidth); // to prevent wrong offset
        };
        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [widthInput]);

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION);
            }, TRANSITION_DURATION);
        }
    }, [transitionDuration]);

    useEffect(() => {
        if (!infinite) return;

        if (step === 0) {
            setTimeout(() => {
                setTransitionDuration(0);
                setStep(pages.length - 1 - clonesCount.tail);
            }, TRANSITION_DURATION);
            return;
        }

        if (step === pages.length - 1) {
            setTimeout(() => {
                setTransitionDuration(0);
                setStep(1);
            }, TRANSITION_DURATION);
        }
    }, [offset, infinite, pages, clonesCount, width]);

    useEffect(() => {
        handleClick();
    }, [step]);

    const handleClick = () => {
        setSlideDelayActive(false);
        setOffset(-(width * step));
        setTimeout(() => setSlideDelayActive(true), 600);
    };

    return (
        <CarouselContext.Provider value={{ width }}>
            <div className="carousel-main-container">
                <div className="carousel-window" ref={windowElRef}>
                    <div
                        className="carousel-all-pages-container"
                        style={{
                            transform: `translateX(${offset}px)`,
                            transitionDuration: `${transitionDuration}ms`,
                        }}
                    >
                        {pages.map((page, index) => (
                            <div className="carousel-item-wrapper" key={index}>
                                {page}
                            </div>
                        ))}
                    </div>
                </div>
                <svg
                    onClick={() => {
                        if (slideDelayActive) {
                            setStep(step - 1);
                        }
                    }}
                    className="carousel-arrow carousel-arrow-left"
                    width="25px"
                    height="40px"
                    viewBox="0 0 25 40"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="carousel-slidenav-previous-large"
                >
                    <polyline strokeWidth="2" points="20.527,1.5 2,20.024 20.525,38.547 " />
                </svg>
                <svg
                    onClick={() => {
                        if (slideDelayActive) {
                            setStep(step + 1);
                        }
                    }}
                    className="carousel-arrow carousel-arrow-right"
                    width="25px"
                    height="40px"
                    viewBox="0 0 25 40"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="carousel-slidenav-next-large"
                >
                    <polyline strokeWidth="2" points="4.002,38.547 22.527,20.024 4,1.5 " />
                </svg>
                <div className="carousel-bullet-list">
                    {pages.length !== 0 &&
                        pages.map((_, index) =>
                            index !== 0 && index !== pages.length - 1 ? (
                                <span
                                    key={index}
                                    onClick={() => {
                                        setStep(index);
                                    }}
                                    className={`carousel-bullet-item ${step === index ? 'carousel-bullet-item--active' : ''}`}
                                ></span>
                            ) : null
                        )}
                </div>
            </div>
        </CarouselContext.Provider>
    );
};
