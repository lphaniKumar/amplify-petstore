/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    "Remove Pet"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    MyIcon?: MyIconProps;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
