import { Meta, MetaProvider } from "@solidjs/meta";
import homeStyles from "./home.module.css";
import { Motion } from "@motionone/solid";
import Section from "./components/Section";

const Home = () => {
  return (
    <MetaProvider>
      <Meta name="description" content="My home page in portfolio my website" />
      <div class={homeStyles.home}>
        <Motion.p
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, easing: "ease-in-out" }}
          class={homeStyles.introduce}
        >
          Hello, welcome to my world! My name is Tuan, nice to meet you{" "}
          <i class={`fa-solid fa-face-laugh-beam ${homeStyles["face-icon"]}`} />
          . You can stay here for a couple minutes and hear me introduce myself{" "}
          <i class={`fa-solid fa-face-laugh-wink ${homeStyles["face-icon"]}`} />
          .
        </Motion.p>
        <Motion.img
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, easing: "ease-in-out", delay: 0.5 }}
          src="/src/assets/images/avatar.jpg"
          class={homeStyles.avatar}
        />
        <Section
          description="I am mobile and web application front-end software engineer, I have 3
          years of experiences working on Javascript, Dart and basic Java
          languages. The frameworks and libraries I have been used that ReactJS,
          React Native, Flutter, Redux, Mobx,... Additional I have integrated
          third-party technologies is Firebase (Cloud Messaging, Realtime
          Database), AppsFlyer (Tracking Activity User Realtime). This is a
          small piece of my career path and I will continue to learn and gain
          more experience in the future."
        />
      </div>
    </MetaProvider>
  );
};

export default Home;
