import React from "react";
import Section from "../../UI/Section";
import SectionTitle from "../../UI/SectionTitle";
import "./gallery.styled.js";
import { ScGallery } from "./gallery.styled.js";

const Gallery = () => {
    return (
        <ScGallery>
            <Section>
                <div className="gallery__container">
                    <div className="gallery__datas">
                        <SectionTitle>Gallery</SectionTitle>
                        <div className="gallery__card-container">
                            {/* gallery card 1*/}
                            <div className="gallery__card">
                                <div className="gallery__card-title">
                                    Kopi 'o teh tarek manis
                                </div>
                                <div className="gallery__card-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quod dolorum quaerat ex
                                    quos, distinctio molestias necessitatibus
                                    blanditiis.
                                </div>
                            </div>
                            {/* gallery card 2*/}
                            <div className="gallery__card">
                                <div className="gallery__card-title">
                                    Kopi 'o teh tarek manis
                                </div>
                                <div className="gallery__card-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quod dolorum quaerat ex
                                    quos, distinctio molestias necessitatibus
                                    blanditiis.
                                </div>
                            </div>
                            {/* gallery card 3*/}
                            <div className="gallery__card">
                                <div className="gallery__card-title">
                                    Kopi 'o teh tarek manis
                                </div>
                                <div className="gallery__card-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quod dolorum quaerat ex
                                    quos, distinctio molestias necessitatibus
                                    blanditiis.
                                </div>
                            </div>
                            {/* gallery card end*/}
                        </div>
                    </div>

                    <div className="gallery__images">
                        <div className="gallery__images-container">
                            {/* images card 1 */}
                            <div className="gallery__images-card">
                                <div className="gallery__images-card-img"></div>
                                <div className="gallery__images-card-title">
                                    Ceiling Lamp
                                </div>
                            </div>
                            {/* images card 2 */}
                            <div className="gallery__images-card">
                                <div className="gallery__images-card-img"></div>
                                <div className="gallery__images-card-title">
                                    Floor Lamp
                                </div>
                            </div>
                            {/* images card 3 */}
                            <div className="gallery__images-card">
                                <div className="gallery__images-card-img"></div>
                                <div className="gallery__images-card-title">
                                    Wall Lamp
                                </div>
                            </div>
                            {/* images card end */}
                        </div>
                    </div>
                </div>
            </Section>
        </ScGallery>
    );
};

export default Gallery;
