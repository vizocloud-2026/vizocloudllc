import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RouterProvider } from 'react-router';
import logoImg from '../imports/Frame_19.png';
import { router } from './routes';

function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65, ease: 'easeInOut' } }}
    >
      <motion.img
        src={logoImg}
        alt="Vizo Cloud"
        className="h-32 w-32 object-contain md:h-40 md:w-40"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{
          opacity: 1,
          scale: [0.9, 1.04, 1],
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.4, ease: 'easeOut' },
          scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </motion.div>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <AnimatePresence>{showLoader ? <SplashLoader /> : null}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: showLoader ? 0 : 1, scale: showLoader ? 0.985 : 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        aria-hidden={showLoader}
      >
        <RouterProvider router={router} />
      </motion.div>
    </>
  );
}
