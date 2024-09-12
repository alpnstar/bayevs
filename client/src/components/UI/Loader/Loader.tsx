import React, {FC} from "react";
import {TailSpin} from "react-loader-spinner";

interface ILoaderProps {
    width?: string;
    height?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
}

export const Loader: FC<ILoaderProps> = ({
                                             width = '80px',
                                             height = '80px',
                                             marginTop = '0',
                                             marginBottom = '0',
                                             marginLeft = '0',
                                             marginRight = '0'
                                         }) => {

    return (
        <div className="loader-wrapper">
            <TailSpin visible={true}
                      height={height}
                      width={width}
                      color="black"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperClass=""
                      wrapperStyle={{
                          marginTop,
                          marginBottom,
                          marginLeft,
                          marginRight,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                      }}
            />
        </div>
    );
};