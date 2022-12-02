import { SingleCard } from "../components/Card"
import Filter from "../components/Filter"
import BaseLayout from "../components/Layout/baseLayout"

export default function Catalog() {
  return (
    <BaseLayout title={"Mafesyen - Catalog Page"}>
      <SingleCard margin={"m-3.5"} bgLink={"/images/banner-2.png"} />
      <Filter/>
    </BaseLayout>
  )
}