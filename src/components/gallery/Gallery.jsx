import React from "react";
import Section from "../../UI/Section";
import SectionTitle from "../../UI/SectionTitle";
import { ScGallery } from "./gallery.styled";

const Gallery = () => {
    return (
        <ScGallery>
            <Section>
                <div className="gallery__container">
                    <div className="gallery__datas">
                        <SectionTitle>Gallery</SectionTitle>
                        <div className="gallery__data-card-container">
                            {/* BOX 1 */}
                            <div className="gallery__data-card">
                                <div className="gallery__data-card-title">
                                    Environmental Friendly Material
                                </div>
                                <div className="gallery__data-card-paragraph">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus inventore
                                    molestias labore illum fuga corporis.
                                </div>
                            </div>
                            {/* BOX 2 */}
                            <div className="gallery__data-card">
                                <div className="gallery__data-card-title">
                                    Designed with Lots of Love
                                </div>
                                <div className="gallery__data-card-paragraph">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus inventore
                                    molestias labore illum fuga corporis.
                                </div>
                            </div>
                            {/* BOX 3 */}
                            <div className="gallery__data-card">
                                <div className="gallery__data-card-title">
                                    Sustainable for your needs
                                </div>
                                <div className="gallery__data-card-paragraph">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus inventore
                                    molestias labore illum fuga corporis.
                                </div>
                            </div>
                            {/* Box ends */}
                        </div>
                    </div>
                    <div className="gallery__images-container"></div>
                </div>
            </Section>
        </ScGallery>
    );
};

export default Gallery;
