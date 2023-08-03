import { useRouter } from "next/router";

import BaseLayout from "@/components/Layout/baseLayout";

import "swiper/css";
import "swiper/css/thumbs";
import { ProductDetail } from "@/components/templates";

const productImages = {
  navy: [
    "navy-polkadot-1-1.webp",
    "navy-polkadot-1-2.webp",
    "navy-polkadot-1-3.webp",
    "navy-polkadot-1-4.webp",
  ],
  white: [
    "navy-polkadot-2-1.webp",
    "navy-polkadot-2-2.webp",
    "navy-polkadot-2-3.webp",
  ],
};

export default function DetailProduct() {
  const router = useRouter();

  return (
    <BaseLayout title={router.query.productId}>
      <ProductDetail data={productImages} />
    </BaseLayout>
  );
}
