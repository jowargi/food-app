import { useCallback, useState } from "react";

export const useReviewEditingMode = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = useCallback(() => setIsEditing(true), []);
  const stopEditing = useCallback(() => setIsEditing(false), []);

  return { isEditing, startEditing, stopEditing };
};
