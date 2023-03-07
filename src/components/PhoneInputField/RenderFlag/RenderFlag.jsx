import ReactCountryFlag from "react-country-flag";

export const RenderFlag = ({ country, width, height }) => {
  const flag = country || "NG";
  return (
    <ReactCountryFlag
      countryCode={flag}
      svg
      style={{
        // width: `clamp(${width}px)`,

        width: " clamp(1.875rem, 0.9144rem + 1.9212vw, 3.125rem)",
        height: `clamp(${height})`,
        paddingRight: "clamp(0.3125rem, -0.0237rem + 0.6724vw, 0.75rem)",
        display: "inline-block",
      }}
      title={flag}
    />
  );
};
