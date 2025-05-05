"use client";
import { CatImage } from "@/entities/cat-image/cat-image";
import { ButtonPrimary } from "@/shared/ui/button-primary/button-primary";
import { CheckBoxInput } from "@/shared/ui/checkbox-input/checkbox-input";
import { useFetchForm } from "../model/use-fetch-form";
import { getClasses } from "./styles/get-classes";

export const MainScreen = () => {
    const { cnRoot, cnForm } = getClasses();

    const { isPending, isSubmitEnabled, imageUrl, onSubmit } = useFetchForm();

    const isButtonDisabled = isPending || !isSubmitEnabled;
    const buttonText = isPending ? "Loading..." : "Get cat";

    return (
        <div className={cnRoot}>
            <form onSubmit={onSubmit} className={cnForm}>
                <CheckBoxInput
                    labelText="Enabled"
                    // {("enabled")}
                />
                <CheckBoxInput
                    labelText="Auto-refresh every 5 seconds"
                    // {("autoRefetch")}
                />

                <ButtonPrimary type="submit" disabled={isButtonDisabled}>
                    {buttonText}
                </ButtonPrimary>
            </form>
            <CatImage imageUrl={imageUrl} />
        </div>
    );
};
