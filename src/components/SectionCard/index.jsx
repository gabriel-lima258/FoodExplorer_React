import { useRef } from "react";
import { Container, Slider } from "./style";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function SectionCard({title, children}){

    const slider = useRef(null)

    function handleLeftClick(e){
        e.preventDefault();

        slider.current.scrollLeft -= slider.current.offSetWidth;
    }

    function handleRightClick(e){
        e.preventDefault();

        slider.current.scrollLeft += slider.current.offSetWidth;
    }

    return (
        <Container>
            <h2>{title}</h2>

            <Slider>
                <button
                    className="button-left"
                    onClick={handleLeftClick}
                >
                    <FiChevronLeft size={50}/>
                </button>

                <div ref={slider}>
                    {children}
                </div>

                <button
                    className="button-right"
                    onClick={handleRightClick}
                >
                    <FiChevronRight size={50}/>
                </button>

            </Slider>
        </Container>
    );
}