import SectionLayout from "@/components/Layout/sectionLayout";
import { BigHead, ButtonLink, Text } from "@/components/atoms";
import Image from "next/image";

const BannerCardSection = ({
  imgBg,
  color = "black",
  title,
  desc,
  btnText,
  btnHref,
  blurDataUrl,
}) => {
  return (
    <SectionLayout>
      <div className="min-h-36 relative z-10 mx-3.5 grid grid-cols-[3fr_1fr] p-7 md:h-56 md:grid-cols-[2fr_1fr] lg:h-72 lg:place-items-center">
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
