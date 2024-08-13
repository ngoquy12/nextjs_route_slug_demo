import React from "react";
import slugify from "slug";

export default function page() {
  const generateSlug = () => {
    const productName = "Nước Tinh Khiết";
    const productSlug = slugify(productName, { lower: true }); // "nuoc-tinh-khiet"

    return productSlug;
  };
  return <div>{generateSlug()}</div>;
}
