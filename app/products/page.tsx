import Link from "next/link";
import React from "react";
import slugify from "slug";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const products: Product[] = [
  {
    title: "Nước Tinh Khiết Aqua",
    description:
      "Nước tinh khiết Aqua, được lấy từ nguồn nước suối tự nhiên, đảm bảo sự tinh khiết và an toàn tuyệt đối cho sức khỏe của bạn.",
    imageUrl: "/images/products/nuoc-tinh-khiet-aqua.jpg",
    price: 12000,
  },
  {
    title: "Sữa Đậu Nành Soy Milk",
    description:
      "Sữa đậu nành Soy Milk giàu dinh dưỡng, không chất bảo quản, tốt cho sức khỏe với hương vị thơm ngon tự nhiên.",
    imageUrl: "/images/products/sua-dau-nanh-soy-milk.jpg",
    price: 20000,
  },
  {
    title: "Trà Xanh Matcha",
    description:
      "Trà xanh Matcha cao cấp, giúp thanh lọc cơ thể, tăng cường sự tỉnh táo và giảm căng thẳng.",
    imageUrl: "/images/products/tra-xanh-matcha.jpg",
    price: 50000,
  },
  {
    title: "Nước Ép Cam Tươi",
    description:
      "Nước ép cam tươi nguyên chất, bổ sung vitamin C giúp tăng cường hệ miễn dịch và mang lại sự sảng khoái tức thì.",
    imageUrl: "/images/products/nuoc-ep-cam-tuoi.jpg",
    price: 30000,
  },
  {
    title: "Nước Khoáng Lavie",
    description:
      "Nước khoáng Lavie với các khoáng chất tự nhiên, giúp bù khoáng cho cơ thể và mang lại sự tươi mới cho mỗi ngày.",
    imageUrl: "/images/products/nuoc-khoang-lavie.jpg",
    price: 10000,
  },
];

export default function Product() {
  return (
    <div className="flex flex-col gap-3">
      {products.map((pro) => (
        <Link href={`/products/${slugify(pro.title)}.html`}>{pro.title}</Link>
      ))}
    </div>
  );
}
