import SectionLayout from "@/components/Layout/sectionLayout";
import { BigHead, ButtonLink, Text } from "@/components/atoms";
import Image from "next/image";

const BannerCardSection = ({ imageBg }) => {
  return (
    <SectionLayout>
      <div className="min-h-36 relative z-10 mx-3.5 grid grid-cols-[2fr_1fr] p-7 md:h-56 lg:h-72 lg:place-items-center">
        <div className="flex flex-col gap-2">
          <BigHead variant="banner" type="h2">
            shoping without limits.
          </BigHead>
          <Text size="xs/lg" className="md:w-9/12 lg:hidden">
            Choose the best option for you, and it does not matter whether you
            are.
          </Text>
          <Text size="xs/lg" className="hidden md:w-9/12 lg:inline">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco. We will deliver your
            purchase anywhere!
          </Text>
          <ButtonLink href="/catalog">shop now</ButtonLink>
        </div>
        <Image
          src={imageBg}
          width={1878}
          height={467}
          alt="banner"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
        />
      </div>
    </SectionLayout>
  );
};

export default BannerCardSection;
