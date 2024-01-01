import { Meta, MetaProvider } from "@solidjs/meta";

const Contact = () => {
  return (
    <MetaProvider>
      <Meta name="description" content="Let's contact me, I always welcome" />
      <div>Contact</div>
    </MetaProvider>
  );
};

export default Contact;
