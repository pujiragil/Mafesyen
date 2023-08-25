import data from "@/utils/data.json";

import {
  BannerCardSection,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "@/components/molecules";
import BaseLayout from "../components/Layout/baseLayout";
import { FilterTab } from "@/components/organism";
import SectionLayout from "@/components/Layout/sectionLayout";

export default function Catalog() {
  return (
    <BaseLayout title="Mafesyen - Catalog Page">
      <BannerCardSection
        title="shoping without limits."
        desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        btnHref="/catalog"
        btnText="see offers"
        imgBg="/images/banner-2.webp"
        className="mx-3.5"
        blurDataUrl="data:image/webp;base64,UklGRhgEAABXRUJQVlA4WAoAAAAgAAAAVAIAkwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKgIAABAoAJ0BKlUClAA+7XSwVD+zJSMi9Xqj8B2JaW7f/IyvMWkBJf9CA3P/n/Hy9YD4x+gIU7l4kVR6vuvYTvxGp6uytGFxZA0mLvF6UhojSBUpGDRz8+N4RhTWuUddhcxCJgSGQFyNkoB4Z/ljoSlHVEYdM9J4eERcGXTLcAgjPyUK8WyRD6tMHDfu+MnJGcjQRPo8eHhEXi7gIJa1ux2vf56jyrDiTXo/Pr5b7Kb7VPpRYixgfEJxi8w006vho4vlbUJ/kj1zpw9CccccbagugQRn6so8mGw+wUsNVQlH6Eg/Rfn2UJxxxxxtceQWSkHEHVrUZm/O/aFyc/O/cUDbXQzWdddaIRwbt24/l1RHkoARWWSvA5FHep9jbTzFrOus5Iwpmzx9fQ6uHI8lAOT2vovA5Foncq/d0cccccabC1Dgd3aU0PPA4ZWAAP7vYnbs4wBlCL5wBiCHpHFffcjsPdRN7r28zaemgCCS/nFtRBd58r4QJ9PzZKqR96b9CWxMgjXOzOYdSq+U/6ep3BxYRX1aLorvT0C7KT8fjwSoRX2REan1zJYNbrjMOFgzoDD8qRn5Gg2WKYqCDL0iglQVEq5ELpXYqzaOOOHXBoEKD4oTaB1pkGkX0jkGgZutU2NJS2tkYMyVupz0ggI1SDns4PqbEaXCwCDTXFomDobKw9QMofGAxIhi/V6PaobFU/Bl3N//2KCo6eoscVG0oAEIvb7pgqh0Ou/AgAAA"
      />
      <CatalogSection />
    </BaseLayout>
  );
}

const CatalogSection = () => {
  const products = data.products;

  return (
    <SectionLayout>
      <div className="mx-3.5 grid gap-3.5 lg:grid-cols-[1fr_4fr] lg:gap-6 lg:pb-8">
        <FilterTab />
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:gap-6 lg:border-l lg:pl-6 pb-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              image={<ProductImage />}
              info={<ProductInfo />}
              price={<ProductPrice />}
            />
          ))}

          <div className="col-span-2 sm:col-span-3 md:col-span-4">
            <BannerCardSection
              title="shoping without limits."
              desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
              color="white"
              btnHref="/"
              btnText="shop now"
              imgBg="/images/banner-3.webp"
              blurDataUrl="data:image/webp;base64,UklGRvIDAABXRUJQVlA4WAoAAAAgAAAAPQIAqQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAIAABAhAJ0BKj4CqgA+7XayVimnJCOgKHEwHYlpbuFiEOs+9Jml509gBWhfyYir3ve973IG04Y6QX4qsaDe/R7ivSQe5qdtC8fjjvjwM8SjTjYg6Z3vbCyAs8kZPcdns9ns0ClPxk/zjc+CEYbpVQWnJsSGo1Go1GI3n4N1+2GTVufxsbZcVJKi847PZ/TF+zwcinJvLgJ/ULu+NyC+Mj/uCKimg+JN99fgS6LQNSdC7p5cuFaLOllOz8IfdmmP7AAsC4n0FBajbpIGwvQeUy/Xx9AT1UG5AE/by5cK0T/wMt581F4hrS/3zy+pfQB5BfgOkfr294tKqtR/vt//xW6cfBKl4qqw5WSXz+eLd6fBthYWgAD+9ujZLPG+dhEWYJAoE1ngtetrDblaCtZg44yfdwAq8yaC8jiJiQ5aBYE0hxSZog7w17kNBpE+zAjOdaqknx/dHB/PreyF1xgnK87PpKiWkQJvO+SqRGioY7tVoR+7oWgl0HhK72powaIAPca1h42TIZbOlgg3qAv/4H615UJ1K8amdJg/jDoqDh/RCx756s4BawFi3BY9Ekc0yuVjq+ijTeHb7XS5CzhwGmSl4hYvSlxL0CE4FMbxG20jqW60XBJnqnlA+XRLc77by0UQwFQAN3uE43Tp1rKvcruxbZajwZzC6EbgeqOPU4AbNSuGwwAAAA=="
            />
          </div>

          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              image={<ProductImage />}
              info={<ProductInfo />}
              price={<ProductPrice />}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
