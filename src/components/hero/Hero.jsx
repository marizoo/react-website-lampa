import React from "react";
import Button from "../../UI/Button";
import Section from "../../UI/Section";
import { ScHero } from "./hero.styled";

const Hero = () => {
    return (
        <ScHero>
            <Section>
                <div className="hero__datas">
                    <div className="hero__titles">
                        <h1 className="hero__titles-1">We make</h1>
                        <h1 className="hero__titles-2">Custom light</h1>
                    </div>
                    <div className="hero__subtitles">
                        <h3 className="hero__subtitles-1">
                            Meow purr kitty scratch
                        </h3>
                        <h3 className="hero__subtitles-2">
                            Woof woof grrrr slurrp woffyy
                        </h3>
                    </div>
                    <div className="hero__button">
                        <Button>View More</Button>
                    </div>
                </div>
            </Section>
        </ScHero>
    );
};

export default Hero;
