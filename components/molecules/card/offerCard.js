import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";
import { BigHead, ButtonLink, Text } from "@/components/atoms";

const card = cva("relative z-10 grid w-full grid-cols-2 px-3.5 py-7", {
  variants: {
    variant: {
      primary: "h-72 place-items-end md:row-span-2 md:h-full md:p-7",
      secondary: "h-36 place-items-center md:h-full",
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
          <Text family="roboto" size="xs/lg">
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
        alt="offer-card"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-top"
      />
    </div>
  );
};

export default OfferCard;
