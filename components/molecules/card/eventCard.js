import Image from "next/image";
import SectionLayout from "@/components/Layout/sectionLayout";
import { ButtonLink, Text, BigHead } from "@/components/atoms";

import data from "@/utils/data.json";

const EventCardSection = () => {
  const second = data.banners.second;

  return (
    <SectionLayout>
      <div className="relative z-10 mx-3.5 flex h-72 items-end justify-center p-4 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-8 lg:p-0">
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-4 text-center text-black lg:order-2 lg:h-full lg:items-start lg:text-left">
          <div className="space-y-2.5 md:space-y-4">
            <BigHead
              type="h2"
              variant="banner"
              className="font-oswald text-sm font-medium uppercase"
            >
              {second.title}
            </BigHead>
            <Text size="xxs/base">{second.desc}</Text>
          </div>
          <ButtonLink href={second.btnHref} variant="secondary">
            {second.btnText}
          </ButtonLink>
        </div>
        <Image
          width={584}
          height={504}
          src={second.imgBg}
          blurDataURL={second.blurDataUrl}
          placeholder="blur"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover md:object-top lg:static lg:order-1"
          alt="event-card"
        />
      </div>
    </SectionLayout>
  );
};

export default EventCardSection;
