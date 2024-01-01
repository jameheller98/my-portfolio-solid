import { A } from "@solidjs/router";
import navbarStyles from "./navbar.module.css";
import { createSignal, onMount } from "solid-js";
import { Motion } from "@motionone/solid";

const Navbar = () => {
  const [currentItem, setCurrentItem] = createSignal<DOMRect>(
    new DOMRect(0, 0, 0, 0)
  );

  onMount(() => {
    setTimeout(() => {
      const navbarActive = document.querySelector(
        `.${navbarStyles["navbar__item--active"]}`
      );

      if (navbarActive) {
        const boundingCurrent = navbarActive.getBoundingClientRect();
        const previousElement = navbarActive.previousElementSibling;
        const domRect = new DOMRect(
          0,
          boundingCurrent.y,
          boundingCurrent.width,
          boundingCurrent.height
        );

        if (previousElement) {
          const boundingPrevious = previousElement.getBoundingClientRect();

          domRect.x = boundingPrevious.width + boundingPrevious.left + 8 - 24;
        } else {
          domRect.x = boundingCurrent.x - 24;
        }

        setCurrentItem(domRect);
      }
    }, 250);
  });

  const handleAnimation = (
    e: MouseEvent & {
      currentTarget: HTMLAnchorElement;
      target: Element;
    }
  ) => {
    const previousElement = e.currentTarget.previousElementSibling;
    const boundingCurrent = e.currentTarget.getBoundingClientRect();
    const domRect = new DOMRect(
      0,
      boundingCurrent.y,
      boundingCurrent.width,
      boundingCurrent.height
    );

    if (previousElement) {
      const boundingPrevious = previousElement.getBoundingClientRect();

      domRect.x = boundingPrevious.width + boundingPrevious.x + 8 - 24;
    } else {
      domRect.x = boundingCurrent.x - 24;
    }

    setCurrentItem(domRect);
  };

  return (
    <>
      <Motion
        animate={{
          x: currentItem().x,
          width: `${currentItem().width}px`,
          height: `${currentItem().height}px`,
          borderRadius:
            currentItem().x > 0
              ? `var(--radius-blob-4)`
              : `var(--radius-blob-3)`,
        }}
        class={navbarStyles["navbar__motion"]}
      />
      <nav class={navbarStyles.navbar} id="navbar">
        <A
          href="/"
          onClick={handleAnimation}
          class={navbarStyles.navbar__item}
          activeClass={navbarStyles["navbar__item--active"]}
          end
        >
          Home
        </A>
        <A
          href="/contact"
          onClick={handleAnimation}
          class={navbarStyles.navbar__item}
          activeClass={navbarStyles["navbar__item--active"]}
        >
          Contact
        </A>
      </nav>
    </>
  );
};

export default Navbar;
