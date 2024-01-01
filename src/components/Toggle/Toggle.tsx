import { Component, mergeProps } from "solid-js";
import { Motion } from "@motionone/solid";
import { useTheme } from "../../contexts/ThemeContext";
import toggleStyles from "./toggle.module.css";

const Toggle: Component<{
  value: boolean;
  width?: number;
  height?: number;
  gap?: number;
  CustomIndicator?: Component;
  onToggle: (value: boolean) => void;
}> = (props) => {
  const { theme } = useTheme();
  const merged = mergeProps({ width: 45, height: 20, gap: 10 }, props),
    isFirstValueFalse = !props.value,
    inputAnimationX = isFirstValueFalse
      ? [
          0 + merged.gap / 2,
          merged.width - merged.height + merged.gap - merged.gap / 2,
        ]
      : [
          -merged.width + merged.height - merged.gap + merged.gap / 2,
          0 - merged.gap / 2,
        ];

  return (
    <Motion
      animate={{
        borderColor:
          theme() === "light" ? "var(--light-border)" : "var(--dark-border)",
      }}
      transition={{ duration: 0.25, easing: "ease-in-out" }}
      style={{
        width: `${merged.width}px`,
        height: `${merged.height}px`,
        "justify-content": isFirstValueFalse ? "flex-start" : "flex-end",
      }}
      class={toggleStyles.toggle}
      onClick={() => merged.onToggle(!merged.value)}
    >
      <Motion
        animate={{
          x: merged.value === false ? inputAnimationX[0] : inputAnimationX[1],
          backgroundColor: props.CustomIndicator
            ? "transparent"
            : theme() === "light"
            ? "var(--light-border)"
            : "var(--dark-border)",
        }}
        transition={{ duration: 0.25, easing: "ease-in-out" }}
        class={toggleStyles.toggle__indicator}
        style={{
          width: `${merged.height - merged.gap}px`,
          height: `${merged.height - merged.gap}px`,
        }}
      >
        {props.CustomIndicator && <props.CustomIndicator />}
      </Motion>
    </Motion>
  );
};

export default Toggle;
