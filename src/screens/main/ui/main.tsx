"use client";
import { CatImage } from "@/entities/cat-image/cat-image";
import { ButtonPrimary } from "@/shared/ui/button-primary/button-primary";
import { CheckBoxInput } from "@/shared/ui/checkbox-input/checkbox-input";
import { useFetchForm } from "../model/use-fetch-form";
import { getClasses } from "./styles/get-classes";

export const MainScreen = () => {
    const { cnRoot, cnForm } = getClasses();

    const {
        isPending,
        isSubmitEnabled,
        imageUrl,
        onSubmit,
        autoRefetch,
        setAutoRefetch,
        setIsSubmitEnabled,
    } = useFetchForm();

    const handleEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSubmitEnabled(e.target.checked);
    };

    const handleAutoRefetchChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAutoRefetch(e.target.checked);
    };

    const isButtonDisabled = isPending || !isSubmitEnabled;
    const buttonText = isPending ? "Loading..." : "Get cat";

    return (
        <div className={cnRoot}>
            <form onSubmit={onSubmit} className={cnForm}>
                <CheckBoxInput
                    labelText="Enabled"
                    defaultChecked={isSubmitEnabled}
                    onChange={handleEnabledChange}
                />
                <CheckBoxInput
                    labelText="Auto-refresh every 5 seconds"
                    defaultChecked={autoRefetch}
                    onChange={handleAutoRefetchChange}
                />

                <ButtonPrimary type="submit" disabled={isButtonDisabled}>
                    {buttonText}
                </ButtonPrimary>
            </form>
            <CatImage imageUrl={imageUrl} />
        </div>
    );
};
