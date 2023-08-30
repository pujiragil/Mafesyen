import SectionLayout from "@/components/Layout/sectionLayout";
import { BigHead, ButtonLink, Text } from "@/components/atoms";
import { cn } from "@/utils/utils";
import Image from "next/image";

const BannerCardSection = ({
  imgBg,
  color = "black",
  title,
  desc,
  btnText,
  btnHref,
  blurDataUrl,
  className,
}) => {
  return (
    <SectionLayout>
      <div
        className={cn(
          "p-7",
          "relative z-10",
          "min-h-36 md:h-56 lg:h-72",
          "grid grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr]",
          "lg:place-items-center",
          className
        )}
      >
        <div className="flex flex-col gap-2">
          <BigHead color={color} variant="banner" type="h2">
            {title}
          </BigHead>
          <Text
            weight={300}
            color={color}
            family="roboto"
            size="xxs/sm/base"
            className="md:w-9/12"
          >
            {desc}
          </Text>
          <ButtonLink color={color} href={btnHref}>
            {btnText}
          </ButtonLink>
        </div>
        <Image
          src={imgBg}
          width={1878}
          height={467}
          blurDataURL={blurDataUrl}
          placeholder="blur"
          alt="banner"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
        />
      </div>
    </SectionLayout>
  );
};

export default BannerCardSection;
