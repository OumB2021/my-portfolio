import Image from "next/image";

const Grain = ({ opacity = 0.1, zIndex = 0 }) => {
  return (
    <div className={`absolute inset-0 z-${zIndex}`}>
      {" "}
      <Image
        src="/Noise.svg"
        alt="noise"
        fill
        style={{
          objectFit: "cover",
          opacity: opacity,
          pointerEvents: "none", // Prevent interference with clicks
        }}
      />
    </div>
  );
};

export default Grain;
