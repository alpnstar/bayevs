import React, {FC, useEffect, useState} from "react";
import "./productSingle.scss";
import {useToggler} from "../../hooks/useToggler";
import {useAppDispatch} from "../../store/hooks";
import {Product} from "../../types/types";
import {useParams} from "react-router";
import {useLazyGetProductByIdQuery} from "../../store/query/productsApi";
import {MainButton} from "../UI/MainButton/MainButton";
import ImageView from "../UI/ImageView/ImageView";
import addToCart from "../Products/useAddToCart";
import {Breadcrumbs} from "../UI/Breadcrumbs/Breadcrumbs";




const ProductSingle: FC<IProductSingleProps> = () => {
    const params = useParams<{ id: string }>();
    const [trigger, {data, isSuccess, isLoading}] = useLazyGetProductByIdQuery();
    const [product, setProduct] = useState<Product>(data);
    const [currentSku, setCurrentSku] = useState(0);
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

    useEffect(() => {
        if (params.id) {
            trigger(params.id);
        }
    }, [params]);
    useEffect(() => {
        data && setProduct(data.data);
    }, [data]);
    return (
        product && isSuccess &&
        <section className="product-single">
            <div className="product-single__wrapper container">
                <div className="product-single__breadcrumbs">
                    {<Breadcrumbs items={data.breadcrumbs}/>}
                </div>
                <div className="product-single__main">
                    <div className="product-single__view">
                        <div onClick={imageClickHandler(0)} className="product-single__view-main">
                            <img src={product.attributes.media[selectedImage].attributes.generated_conversions.list}
                                 alt=""/>
                        </div>
                        <div className="product-single__view-other">
                            {product.attributes.media.map((item, index) =>
                                index !== 0 ?
                                    <img onClick={imageClickHandler(index)}
                                         src={item.attributes.generated_conversions.list} alt=""/> : "")}
                        </div>
                    </div>
                    <div className="product-single__info">
                        <h1 className="product-single__info-title main-h1">
                            {product.attributes.name}
                        </h1><h1 className="product-single__info-price main-h2">
                        {product.attributes.skus[currentSku].attributes.price.amount + ' ' + product.attributes.skus[currentSku].attributes.price.currency}
                    </h1>
                        <span
                            className="product-single__code">Артикул: {product.attributes.parent_sku}</span>
                        <div className="product-single__character">
                            {product.attributes.skus[currentSku].attributes.attributeOptions.map(attrs =>
                                <div className="product-single__character-item">
                                    {attrs.attributes.label}: <b>{attrs.attributes.value}</b>
                                </div>
                            )}
                        </div>
                        <MainButton onClick={addToCart(product)} text="В корзину"/>
                    </div>
                </div>
            </div>
            <ImageView display={imageView} setDisplay={setImageViewHandler} data={product.attributes.media}
                       indexSelectedImage={selectedImage} setIndexSelectedImage={setSelectedImage}/>
        </section>

    );
};

export default ProductSingle;