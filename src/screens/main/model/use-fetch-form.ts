import { useState } from "react";

export const useFetchForm = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);

    const handleChangeImageUrl = (url: string) => {
        setImageUrl(url);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 2000);
    };

    return {
        imageUrl,
        isPending,
        isSubmitEnabled,
        onSubmit,
    };
};
