import { Button, ButtonProps } from "react-native";
import { COLOR } from "../design";

interface ICButtonProps extends ButtonProps {}

export function CButton({ color, ...props }: ICButtonProps)
{
    return <Button color={color || COLOR} {...props} />
}