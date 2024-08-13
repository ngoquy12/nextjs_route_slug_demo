import { notFound } from "next/navigation";
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
    imageUrl:
      "https://file.hstatic.net/1000135323/article/cach-pha-matcha-latte_686784fd460e4934974f2e4125e843a0.jpg",
    price: 12000,
  },
  {
    title: "Sữa Đậu Nành Soy Milk",
    description:
      "Sữa đậu nành Soy Milk giàu dinh dưỡng, không chất bảo quản, tốt cho sức khỏe với hương vị thơm ngon tự nhiên.",
    imageUrl:
      "https://file.hstatic.net/1000135323/article/cach-pha-matcha-latte_686784fd460e4934974f2e4125e843a0.jpg",
    price: 20000,
  },
  {
    title: "Trà Xanh Matcha",
    description:
      "Trà xanh Matcha cao cấp, giúp thanh lọc cơ thể, tăng cường sự tỉnh táo và giảm căng thẳng.",
    imageUrl:
      "https://file.hstatic.net/1000135323/article/cach-pha-matcha-latte_686784fd460e4934974f2e4125e843a0.jpg",
    price: 50000,
  },
  {
    title: "Nước Ép Cam Tươi",
    description:
      "Nước ép cam tươi nguyên chất, bổ sung vitamin C giúp tăng cường hệ miễn dịch và mang lại sự sảng khoái tức thì.",
    imageUrl:
      "https://file.hstatic.net/1000135323/article/cach-pha-matcha-latte_686784fd460e4934974f2e4125e843a0.jpg",
    price: 30000,
  },
  {
    title: "Nước Khoáng Lavie",
    description:
      "Nước khoáng Lavie với các khoáng chất tự nhiên, giúp bù khoáng cho cơ thể và mang lại sự tươi mới cho mỗi ngày.",
    imageUrl:
      "https://file.hstatic.net/1000135323/article/cach-pha-matcha-latte_686784fd460e4934974f2e4125e843a0.jpg",
    price: 10000,
  },
];

interface ProductPageProps {
  params: { slug: string };
}

const getProductBySlug = (slug: string) => {
  return products.find(
    (product) => slugify(product.title, { lower: true }) === slug.split(".")[0]
  );
};

export default function ProductDetail({ params }: ProductPageProps) {
  const slugWithoutHtml = params.slug.split(".")[0];
  const product = getProductBySlug(slugWithoutHtml);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <p>Price: {product.price} VND</p>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: `${slugify(product.title, { lower: true })}.html`,
  }));
}
