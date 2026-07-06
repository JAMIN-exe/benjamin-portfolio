const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 3}s`,
  }));
};

const stars = generateStars(80);

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;