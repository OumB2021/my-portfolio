// components/Grain.tsx
import Image from "next/image";

const Grain = ({ opacity = 0.1, zIndex = 0 }) => {
  return (
    <div className={`absolute inset-0 z-${zIndex}`}>
      {" "}
      {/* Added zIndex prop */}
      <Image
        src="https://img.freepik.com/premium-photo/white-grainy-texture-background_800742-682.jpg?w=1380"
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
