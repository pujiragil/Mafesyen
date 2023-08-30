import dress from "@/utils/dress";

import { ProductSection } from "@/components/templates";
import BaseLayout from "@/components/Layout/baseLayout";

import "swiper/css";
import "swiper/css/thumbs";

export default function DetailProduct(props) {
  return (
    <BaseLayout title={props.productData.title}>
      <ProductSection data={props.productData} />
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const paths = dress.map((data) => ({
    params: { productId: data.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productId = params.productId;
  const productData = dress.find((data) => data.id === productId);

  return { props: { productData } };
}
