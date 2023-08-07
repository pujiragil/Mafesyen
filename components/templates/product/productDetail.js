import { useState } from "react";
import Image from "next/image";

import { cn } from "@/utils/utils";

import { ProductSlider } from "@/components/organism";
import {
  ProductHead,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";
import { Button, ProductLabel, ProductPrice } from "@/components/atoms";
import SectionLayout from "@/components/Layout/sectionLayout";

const ProductDetail = ({ data }) => {
  const [product, setProduct] = useState(0);

  return (
    <SectionLayout>
      <div className="mx-3.5 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
        <ProductSlider key={product} productImages={data?.images[product]} />

        <div className="grid place-items-center py-3.5">
          <div className="grid w-full gap-4 sm:w-2/3 md:w-full">
            <ProductHead tag="fendi" title={data.title} className="md:w-4/5" />
            <ProductPrice value={data.price} />
            <div className="grid gap-4 sm:grid-cols-2 sm:content-start md:grid-cols-1 lg:flex lg:flex-col">
              {/* <ProductInputColor label="select color" /> */}
              <div className="space-y-2">
                <ProductLabel>select color</ProductLabel>

                <div className="flex gap-2">
                  {data?.images?.map((image, idx) => (
                    <div
                      key={idx}
                      onClick={() => setProduct(idx)}
                      className={cn(
                        "h-16 w-16 cursor-pointer border p-1",
                        product === idx ? "border-black" : "border-transparent"
                      )}
                    >
                      <Image
                        width={1920}
                        height={1280}
                        src={`/images/dress/${image[0].link}`}
                        alt={image[0].alt}
                        blurDataURL={image[0].blurDataUrl}
                        placeholder="blur"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <ProductInputQuantity label="quantity" />
            </div>
            <ProductInputSize label="select size (inches)" />

            <div className="flex gap-3.5 lg:w-2/3">
              <button className="h-12 w-full bg-black font-oswald text-xs font-medium uppercase text-white outline-none md:text-sm">
                buy now
              </button>
              <Button variant="secondary" width="full">
                add to cart
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:w-2/3">
              <div className="flex items-center gap-2">
                <p className="font-oswald text-xs font-medium uppercase text-[#828282]">
                  share:
                </p>
                <div className="flex items-center gap-2">
                  <Facebook className="h-3 w-auto" />
                  <Twitter className="h-3 w-auto" />
                  <Pinterest className="h-3 w-auto" />
                  <Instagram className="h-3 w-auto" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="h-3 w-auto"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 3L6 8L13 1" stroke="#828282" stroke-width="2.4" />
                </svg>

                <p className="font-oswald text-xs uppercase text-[#828282]">
                  free shipping
                </p>
              </div>

              <div className="flex gap-2 font-oswald text-xs uppercase text-[#828282]">
                <p className="font-medium">product code:</p>
                <p className="font-normal">RFKK1024</p>
              </div>

              <div className="flex gap-2 font-oswald text-xs uppercase text-[#828282]">
                <p className="font-medium">tags:</p>
                <p className="font-normal">NEW arrivals, Top women</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const Facebook = ({ className }) => {
  return (
    <svg
      className={className}
      width="6"
      height="13"
      viewBox="0 0 6 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4.22501V3.08754C4 2.51879 4.07692 2.19376 4.92308 2.19376H6V0H4.23077C2.07692 0 1.38462 1.05628 1.38462 2.92503V4.30629H0V6.5H1.30769V13H4V6.5H5.76923L6 4.22501H4Z"
        fill="#828282"
      />
    </svg>
  );
};

const Twitter = ({ className }) => {
  return (
    <svg
      className={className}
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1.15326C12.5135 1.36079 12.0041 1.49145 11.4795 1.53757C12.0117 1.23012 12.4222 0.738223 12.6199 0.15408C12.0953 0.438465 11.5328 0.64598 10.9474 0.768958C10.4076 0.269362 9.70058 -0.00733705 8.97076 0.000349035C7.54912 -0.0227092 6.37076 1.0995 6.30994 2.5368C6.29473 2.72126 6.31755 2.90569 6.38597 3.07478C4.28012 3.02098 2.2959 2.06793 0.912278 0.461542C0.661401 0.853533 0.532161 1.30702 0.532161 1.76819C0.547366 2.62903 1.00351 3.42066 1.74853 3.84339C1.33041 3.82033 0.912278 3.72044 0.532161 3.53598C0.554968 4.76575 1.45205 5.80338 2.66082 5.99553C2.44035 6.05702 2.20468 6.08775 1.97661 6.07238C1.79415 6.08006 1.6193 6.05702 1.44445 5.99553C1.80936 7.07159 2.82807 7.79407 3.95321 7.76332C2.98772 8.48582 1.80935 8.86241 0.608184 8.83935H0C1.24678 9.57721 2.66082 9.97689 4.10526 9.99226C8.1193 10.1767 11.5175 7.04081 11.7 2.98255C11.7 2.93644 11.7 2.89033 11.7076 2.84421V2.5368C12.1942 2.12943 12.6351 1.66823 13 1.15326Z"
        fill="#828282"
      />
    </svg>
  );
};

const Pinterest = ({ className }) => {
  return (
    <svg
      className={className}
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.91874 9.43848C5.29547 9.31706 4.7046 9.04185 4.21893 8.62903C3.89515 10.4098 3.49043 12.1096 2.19532 13C1.7906 10.3288 2.76192 8.30522 3.16664 6.11973C2.43814 4.90556 3.24758 2.39631 4.78553 2.96292C6.72819 3.69142 3.08569 7.57674 5.51402 8.06241C8.0233 8.54808 9.07557 3.69139 7.53763 2.0725C5.27119 -0.193938 0.981135 1.99156 1.4668 5.31028C1.62869 6.11973 2.43815 6.36257 1.7906 7.49579C0.333599 7.17201 -0.0711326 6.03878 0.00981179 4.50084C0.187889 2.15345 2.03342 0.275539 4.38081 0.0488948C7.13291 -0.274883 9.64219 1.02025 10.0469 3.61047C10.4516 6.52447 8.83274 9.68131 5.91874 9.43848Z"
        fill="#828282"
      />
    </svg>
  );
};

const Instagram = ({ className }) => {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00048 3.56201C4.65618 3.56201 3.5625 4.65565 3.5625 5.99996C3.5625 7.34426 4.65618 8.43795 6.00048 8.43795C7.34479 8.43795 8.43845 7.34426 8.43845 5.99996C8.43845 4.65565 7.35238 3.56201 6.00048 3.56201Z"
        fill="#828282"
      />
      <path
        d="M11.9544 3.04558C11.9241 2.33165 11.8025 1.94428 11.7038 1.68605C11.5747 1.34428 11.4152 1.10126 11.157 0.843027C10.8987 0.584799 10.6557 0.425328 10.3139 0.296214C10.0557 0.19748 9.66837 0.0759476 8.95444 0.0455678C8.17976 0.00759309 7.95191 0 6.00001 0C4.04811 0 3.82026 0.00759309 3.04558 0.0455678C2.33165 0.0759476 1.94431 0.19748 1.68608 0.296214C1.34431 0.425328 1.10127 0.584799 0.843039 0.843027C0.584811 1.10126 0.425316 1.34428 0.296202 1.68605C0.197468 1.94428 0.0759592 2.33165 0.0455794 3.04558C0.00760468 3.82026 0 4.04808 0 5.99998C0 7.95188 0.00760468 8.17974 0.0455794 8.95442C0.0759592 9.66835 0.197468 10.0557 0.296202 10.3139C0.425316 10.6557 0.584811 10.8987 0.843039 11.157C1.10127 11.4152 1.34431 11.5747 1.68608 11.7038C1.94431 11.8025 2.33165 11.9241 3.04558 11.9544C3.81267 11.9924 4.04811 12 6.00001 12C7.95191 12 8.18735 11.9924 8.95444 11.9544C9.66837 11.9241 10.0557 11.8025 10.3139 11.7038C10.6557 11.5747 10.8987 11.4152 11.157 11.157C11.4152 10.8987 11.5747 10.6557 11.7038 10.3139C11.8025 10.0557 11.9241 9.66835 11.9544 8.95442C11.9924 8.17974 12 7.95188 12 5.99998C12 4.04808 11.9924 3.82026 11.9544 3.04558ZM6.00001 9.75188C3.92659 9.75188 2.24811 8.0734 2.24811 5.99998C2.24811 3.92656 3.92659 2.24807 6.00001 2.24807C8.07343 2.24807 9.75191 3.92656 9.75191 5.99998C9.75951 8.0734 8.07343 9.75188 6.00001 9.75188ZM9.90381 2.9772C9.41774 2.9772 9.0228 2.58229 9.0228 2.09621C9.0228 1.61014 9.41774 1.21517 9.90381 1.21517C10.3899 1.21517 10.7848 1.61014 10.7848 2.09621C10.7848 2.58229 10.3899 2.9772 9.90381 2.9772Z"
        fill="#828282"
      />
    </svg>
  );
};

export default ProductDetail;
