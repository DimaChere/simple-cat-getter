import { fetchCatImage } from "@/shared/api/fetch-cat-image";
import { useEffect, useState } from "react";

export const useFetchForm = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);
    const [autoRefetch, setAutoRefetch] = useState<boolean>(false);
    const [fetchInterval, setFetchInterval] = useState<NodeJS.Timeout | null>(
        null
    );

    const fetchImage = async () => {
        if (!isSubmitEnabled) return;

        setIsPending(true);
        try {
            const url = await fetchCatImage();
            setImageUrl(url);
        } catch (error) {
            console.error("Error fetching cat image:", error);
        } finally {
            setIsPending(false);
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchImage();

        if (autoRefetch) {
            if (fetchInterval) {
                clearInterval(fetchInterval);
            }

            const interval = setInterval(fetchImage, 5000);
            setFetchInterval(interval);
        } else {
            if (fetchInterval) {
                clearInterval(fetchInterval);
                setFetchInterval(null);
            }
        }
    };

    useEffect(() => {
        return () => {
            if (fetchInterval) {
                clearInterval(fetchInterval);
            }
        };
    }, [fetchInterval]);

    return {
        imageUrl,
        isPending,
        isSubmitEnabled,
        autoRefetch,
        setAutoRefetch,
        setIsSubmitEnabled,
        onSubmit,
    };
};
