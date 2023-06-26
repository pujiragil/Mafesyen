import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";
import { BigHead, ButtonLink, Text } from "@/components/atoms";

const card = cva("relative z-10 grid w-full grid-cols-2 p-7", {
  variants: {
    variant: {
      primary:
        "h-72 content-end md:row-span-2 md:h-full md:place-items-center md:content-center",
      secondary: "h-36 place-content-between content-center md:h-full",
    },
  },
});

const OfferCard = ({ variant, order, className, data }) => {
  const headVariant = variant === "primary" ? "primary-card" : "secondary-card";
  return (
    <div className={cn(card({ variant, className }))}>
      <div
        className={cn(
          "space-y-2",
          order === "first" ? "col-start-1" : "col-start-2"
        )}
      >
        <div className="space-y-1">
          <BigHead type="h2" variant={headVariant}>
            {data.title}
          </BigHead>
          <Text family="roboto" size="xs/lg" className="md:leading-snug">
            {data.description}
          </Text>
        </div>
        <ButtonLink href={data.linkTo} variant="primary" size="base">
          {data.button}
        </ButtonLink>
      </div>
      <Image
        width={924}
        height={434}
        src={data.imageBg}
        blurDataURL={data.blurDataUrl}
        alt="offer-card"
        placeholder="blur"
        className={cn(
          "absolute top-0 left-0 -z-10",
          "h-full w-full",
          "object-cover",
          variant === "primary" ? "object-right-top" : "object-top"
        )}
      />
    </div>
  );
};

export default OfferCard;
