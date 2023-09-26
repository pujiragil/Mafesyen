import { Button } from "@/components/atoms";
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "@/components/molecules";
import UserAccessLayout from "@/components/Layout/userAccessLayout";

import data from "@/utils/data.json";

export default function Wishlist() {
  return (
    <UserAccessLayout title="My Wishlist">
      <ProductWishlist />
    </UserAccessLayout>
  );
}

const ProductWishlist = () => {
  const products = data.products;

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <div key={product.id} className="space-y-2.5">
          <ProductCard
            data={product}
            image={<ProductImage />}
            info={<ProductInfo />}
            price={<ProductPrice />}
          />

          <Button
            variant="primary"
            width="full"
            className="h-10 text-xs md:h-12 md:text-sm"
          >
            add to cart
          </Button>
        </div>
      ))}
    </div>
  );
};
