import React, { useState } from "react";
import productContext from "./productContext";


const productContextProvider = ({ children }) => {

    let [product, setProduct] = useState();

    return (
        <productContext.Provider>

            {children}

        </productContext.Provider>
    )

}