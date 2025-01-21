import Image from "next/image";

const Grain = ({ opacity = 0.1, zIndex = 0 }) => {
  return (
    <div
      className={`fixed inset-0 z-${zIndex} w-full h-full`}
      style={{
        pointerEvents: "none", // Prevent interference with clicks
      }}
    >
      <Image
        src="/Noise4.svg"
        alt="noise"
        fill
        style={{
          objectFit: "cover",
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default Grain;
