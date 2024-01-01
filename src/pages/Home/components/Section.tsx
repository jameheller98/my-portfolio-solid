import { Component } from "solid-js";
import sectionStyles from "./section.module.css";
import { Motion } from "@motionone/solid";

const Section: Component<{ description: string }> = (props) => {
  return (
    <section>
      <Motion.h1
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1, easing: "ease-in-out", delay: 1.25 }}
        class={sectionStyles.title}
      >
        Work
        <Motion.div
          animate={{ opacity: 1, width: "100%" }}
          initial={{ opacity: 0, width: "0%" }}
          transition={{ duration: 1, easing: "ease-in-out", delay: 1.5 }}
          class={sectionStyles.horizontal}
        />
      </Motion.h1>
      <Motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, easing: "ease-in-out", delay: 1 }}
        class={sectionStyles.description}
      >
        {props.description}
      </Motion.p>
    </section>
  );
};

export default Section;
