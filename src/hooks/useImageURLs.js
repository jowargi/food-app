import { useEffect, useMemo } from "react";

export const useImageURLs = (objectsWithImage) => {
  const objectsWithImageUrl = useMemo(
    () =>
      objectsWithImage.map((object) => ({
        ...object,
        img: URL.createObjectURL(object.img),
      })),
    [objectsWithImage]
  );

  useEffect(
    () => () =>
      objectsWithImageUrl.forEach((object) => URL.revokeObjectURL(object.img)),
    [objectsWithImageUrl]
  );

  return objectsWithImageUrl;
};
