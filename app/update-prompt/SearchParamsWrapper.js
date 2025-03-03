"use client";
import { useSearchParams } from "next/navigation";

const SearchParamsWrapper = ({ setPromptId }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Pass the promptId to the parent component
  useEffect(() => {
    if (id) setPromptId(id);
  }, [id, setPromptId]);

  return null; // No UI needed, just passing data
};

export default SearchParamsWrapper;
