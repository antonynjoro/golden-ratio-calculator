import Script from "next/script";

const BuyMeACoffee = () => {
  return (
    <Script
      id="buymeacoffee-widget-script"
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="antonymutharia"
      data-description="Support me on Buy me a coffee!"
      data-message="If you found this useful, buy me a Coffee?"
      data-color="#FF813F"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    />
  );
};

export default BuyMeACoffee;
