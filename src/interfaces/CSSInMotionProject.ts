import { ReactNode } from "react";
import { Vector2 } from "./timeline";

/**
 * ## ✨ Css In Motion Base
 * Defines the file structure for the Css In Motion Project
 */
export interface CSSInMotionProject {
    animation: string;
    layers:    ILayer[];
}

/**
 * ## 🚀 Layer
 * Represents Each element o schene
 */
export interface ILayer {
    name:           string;
    show_keyframes: boolean;
    animated:       boolean;
    attributes:     Attribute[];

}

/**
 * ## 🪄 Attribute
 * Define Each Animated Atrribute 
 */
export interface Attribute {
    name:      string;
    keyframes: Keyframe[];
}

/**
 * 🔥 Keyframe
 * Its a serie of points that takes the change of the attribute over time
 */
export interface Keyframe {
    position: Vector2;
    value:    string;
}
