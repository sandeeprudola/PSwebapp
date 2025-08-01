import { motion } from 'framer-motion';

const brands = [
  "/brands/signia.png",
  "/brands/widex.png",
  "/brands/hearcom.png",

];

const InfiniteLogoScroll = () => {
  const from = '0%';
  const to = '-100%';

  return (
    <div className="relative overflow-hidden w-full mt-6">
      {/* Fading edges (optional) */}
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#A020F0] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#A020F0] to-transparent z-10" />

      <div className="flex w-max">
        {/* First track */}
        <motion.div
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0 gap-10 px-6"
        >
          {brands.map((src, index) => (
            <img
              key={`scroll1-${index}`}
              src={src}
              alt="brand"
              className="h-10 sm:h-12 md:h-14 object-contain"
            />
          ))}
        </motion.div>

        {/* Second track */}
        <motion.div
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0 gap-10 px-6"
        >
          {brands.map((src, index) => (
            <img
              key={`scroll2-${index}`}
              src={src}
              alt="brand"
              className="h-10 sm:h-12 md:h-14 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
