import BaseLayout from "@/components/Layout/baseLayout";
import {
  ProductCartDiscount,
  ProductCartItem,
  ProductCartTable,
} from "@/components/organism";

const productCartItems = [
  {
    id: 0,
    data: {
      image: "/images/dress/floral-women-sundress-blue-1.webp",
      title: "Floral Women Sundress",
      color: "Blue",
      size: "SM",
      price: 350000,
    },
  },
  {
    id: 1,
    data: {
      image: "/images/dress/light-blue-woman-dress-1.webp",
      title: "Light Blue Women Dress",
      color: "Light Blue",
      size: "M",
      price: 235000,
    },
  },
  {
    id: 2,
    data: {
      image: "/images/dress/navy-polkadot-1.webp",
      title: "Navy Polkadot Flare Dress",
      color: "Polkadot",
      size: "M",
      price: 200000,
    },
  },
  {
    id: 3,
    data: {
      image: "/images/dress/white-polkadot-1.webp",
      title: "Navy Polkadot Flare Dress",
      color: "White",
      size: "M",
      price: 200000,
    },
  },
  {
    id: 4,
    data: {
      image: "/images/dress/summer-fashion-top-lace-1.webp",
      title: "Summer Fashion Top Lace",
      color: "Blue X White",
      size: "M",
      price: 500000,
    },
  },
];

export default function Cart() {
  return (
    <BaseLayout title="Mafesyen - Cart">
      <div className="container mx-auto max-w-md sm:max-w-lg lg:max-w-6xl">
        <div className="mx-3.5 grid gap-8 py-3.5 md:py-8 lg:gap-12 lg:py-12">
          <h1 className="hidden text-center font-oswald text-2xl font-medium text-[#000] md:block lg:text-3xl">
            Shopping Cart
          </h1>

          <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
            <div className="space-y-8 md:space-y-0">
              <h1 className="border-b border-[#C4C4C4] pb-2.5 font-oswald text-xl font-normal text-black md:hidden">
                Shopping Cart
              </h1>

              <div className="grid grid-cols-1 gap-3">
                <ProductCartTable />
                {productCartItems.map((product) => (
                  <ProductCartItem key={product.id} data={product.data} />
                ))}
              </div>
            </div>

            <ProductCartDiscount />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
