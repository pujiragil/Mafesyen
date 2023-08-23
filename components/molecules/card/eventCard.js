import Image from "next/image";
import SectionLayout from "@/components/Layout/sectionLayout";
import { ButtonLink, Text, BigHead } from "@/components/atoms";

import data from "@/utils/data.json";

const EventCardSection = () => {
  const second = data.banners.second;

  return (
    <SectionLayout>
      <div className="relative mx-3.5 z-0 grid h-72 place-items-center   p-4 lg:grid-cols-[3fr_2fr] lg:gap-8 lg:p-0">
        <div className="grid place-items-center bg-white p-4 h-fit lg:h-full text-center lg:text-left text-black lg:order-2 lg:h-full">
          <div className="space-y-2.5 md:space-y-4">
            <BigHead
              type="h2"
              variant="banner"
              className="font-oswald text-sm font-medium uppercase"
            >
              {second.title}
            </BigHead>
            <Text weight={300} family="roboto" size="xs/sm/base">
              {second.desc}
            </Text>

            <div className="flex justify-center lg:justify-start">
              <ButtonLink href={second.btnHref} variant="secondary">
                {second.btnText}
              </ButtonLink>
            </div>
          </div>
        </div>

        <Image
          width={584}
          height={504}
          src={second.imgBg}
          blurDataURL={second.blurDataUrl}
          placeholder="blur"
          className="absolute inset-0 -z-10 h-full lg:h-72 lg:static w-full object-cover"
          alt="event-card"
        />
      </div>
    </SectionLayout>
  );
};

export default EventCardSection;
