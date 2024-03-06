import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

type Orientation = "portrait" | "landscape";

export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>("portrait");

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      const { width, height } = window;
      if (width < height) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
};
