import React from "react";
import { Wine } from "../../types/Wine";
import { WineCard } from "../WineCard";

type Props = {
  wines: Wine[];
};

export const WineList = React.memo<Props>(({wines}) => (
    <>
      {wines.map((wine) => (
        <WineCard
          key={wine._id}
          wineId={wine._id}
          name={wine.name}
          price={wine.price}
          image={wine.image_url}
        />
      ))}
    </>
  )
)