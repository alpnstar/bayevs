import React, {FC, useState} from "react";
import "./productSingle.scss";
import tempImg from "../../../public/images/product.jpg";
import tempImg2 from "../../../public/images/model.jpg";
import {useToggler} from "../../hooks/useToggler";
import ImageView from "../UI/ImageView/ImageView";
import {MainButton} from "../UI/MainButton/MainButton";
import {useAppDispatch} from "../../store/hooks";
import {IProductSingle} from "../../types/types";


const tempData = [{
    id: Math.random(),
    data: tempImg
}, {
    id: Math.random(),
    data: tempImg2
}, {
    id: Math.random(),
    data: tempImg2
}, {
    id: Math.random(),
    data: tempImg
}, {
    id: Math.random(),
    data: tempImg2
}];

interface IProductSingleProps {
    product: IProductSingle,
}

const ProductSingle: FC<IProductSingleProps> = ({product}) => {
    const [imageView, setImageViewHandler] = useToggler(false);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const dispatch = useAppDispatch();


    function setSelectedImageHandler(i: number) {
        return function () {
            setSelectedImage(i);
        };
    }

    function imageClickHandler(index: number) {
        return function () {
            setSelectedImageHandler(index)();
            setImageViewHandler(true);

        };
    }

    return (
        <section className="product-single">
            <div className="product-single__wrapper container">
                <div className="product-single__breadcrumbs">
                    <div className="product-single__breadcrumbs-item product-single__breadcrumbs-item--available">
                        <a href="#">LF-LABEL</a>
                    </div>
                    <div className="product-single__breadcrumbs-item">
                        <a href="#">LF-LABEL</a>
                    </div>
                    <div className="product-single__breadcrumbs-item">
                        <a href="#">LF-LABEL</a>
                    </div>
                </div>
                <div className="product-single__main">
                    <div className="product-single__view">
                        <div onClick={imageClickHandler(0)} className="product-single__view-main">
                            <img src={tempData[0].data} alt=""/>
                        </div>
                        <div className="product-single__view-other">
                            {tempData.map((item, index) =>
                                index !== 0 ?
                                    <img onClick={imageClickHandler(index)} src={item.data} alt=""/> : "")}
                        </div>
                    </div>
                    <div className="product-single__info">
                        <h1 className="product-single__info-title main-h1">
                            Товар lorem
                        </h1>
                        <span className="product-single__code">Артикул: 241235132</span>
                        <div className="product-single__character">
                            <div className="product-single__character-item">
                                Ткань: <b>70% шерсть</b>
                            </div>
                            <div className="product-single__character-item">
                                Материал подкладки: <b>флис</b>
                            </div>
                            <div className="product-single__character-item">
                                Размеры: <b>56, 57, 58, 59, 60, 61, 62</b>
                            </div>

                        </div>
                        {/*<MainButton onClick={addToCart(product)} text="В корзину"/>*/}
                        <MainButton onClick={() => 1} text="В корзину"/>
                    </div>
                </div>
            </div>
            <ImageView display={imageView} setDisplay={setImageViewHandler} data={tempData}
                       indexSelectedImage={selectedImage} setIndexSelectedImage={setSelectedImage}/>
        </section>

    );
};

export default ProductSingle;