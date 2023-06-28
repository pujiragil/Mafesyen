import { BannerCardSection } from "@/components/molecules";
import Filter from "../components/Filter";
import BaseLayout from "../components/Layout/baseLayout";

export default function Catalog() {
  return (
    <BaseLayout title={"Mafesyen - Catalog Page"}>
      <BannerCardSection
        title="shoping without limits."
        desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        btnHref="/catalog"
        btnText="see offers"
        imgBg="/images/card-4.webp"
        blurDataUrl="data:image/webp;base64,UklGRhgEAABXRUJQVlA4WAoAAAAgAAAAVAIAkwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKgIAABAoAJ0BKlUClAA+7XSwVD+zJSMi9Xqj8B2JaW7f/IyvMWkBJf9CA3P/n/Hy9YD4x+gIU7l4kVR6vuvYTvxGp6uytGFxZA0mLvF6UhojSBUpGDRz8+N4RhTWuUddhcxCJgSGQFyNkoB4Z/ljoSlHVEYdM9J4eERcGXTLcAgjPyUK8WyRD6tMHDfu+MnJGcjQRPo8eHhEXi7gIJa1ux2vf56jyrDiTXo/Pr5b7Kb7VPpRYixgfEJxi8w006vho4vlbUJ/kj1zpw9CccccbagugQRn6so8mGw+wUsNVQlH6Eg/Rfn2UJxxxxxtceQWSkHEHVrUZm/O/aFyc/O/cUDbXQzWdddaIRwbt24/l1RHkoARWWSvA5FHep9jbTzFrOus5Iwpmzx9fQ6uHI8lAOT2vovA5Foncq/d0cccccabC1Dgd3aU0PPA4ZWAAP7vYnbs4wBlCL5wBiCHpHFffcjsPdRN7r28zaemgCCS/nFtRBd58r4QJ9PzZKqR96b9CWxMgjXOzOYdSq+U/6ep3BxYRX1aLorvT0C7KT8fjwSoRX2REan1zJYNbrjMOFgzoDD8qRn5Gg2WKYqCDL0iglQVEq5ELpXYqzaOOOHXBoEKD4oTaB1pkGkX0jkGgZutU2NJS2tkYMyVupz0ggI1SDns4PqbEaXCwCDTXFomDobKw9QMofGAxIhi/V6PaobFU/Bl3N//2KCo6eoscVG0oAEIvb7pgqh0Ou/AgAAA"
      />
      <Filter />
    </BaseLayout>
  );
}
