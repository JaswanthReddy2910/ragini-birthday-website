import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Confetti from "react-confetti";
import { Fireworks } from "@fireworks-js/react";
import { motion, AnimatePresence } from "framer-motion";

const message = `My Dear Ragini ❤️

I don't know how to write all this perfectly,
so I'll just write whatever I feel.

First of all...

Happy 21st Birthday Dora Paapa 🫣❤️

I really hope this new year of your life
is filled with lots and lots of happiness,
peace, success and beautiful moments.

Nuv eppudu happy ga undali.
Eppudu alaane smile chesthu undali.
And whatever happens,
please don't stop being the person you are. ❤️

Sometimes I think about how lucky I am
to have so many beautiful memories with you.

Chala things change avuthayi,
people change avutharu,
life kooda change avuthadhi...

But kontha mandhi matram
mana life lo epudoo special place lo untaru.

And you're definitely one of those people for me. ❤️

Nuv na life lo unna way ni
maybe nenu proper ga explain cheyyalekapovachu.

But one thing I can say for sure...

Nuv happy ga unte naku kooda happy ga untadhi.
Nuv sad ga unte naku kooda badha ga anipisthadhi.
And somehow,
nee smile chusthe everything feels a little better. 🫣❤️

I don't know what the future is going to look like.

I don't know where we'll be,
what we'll be doing,
or how much things will change.

But right now...

I'm just really thankful
that I got to know you,
that I got to spend so many moments with you,
and that I have someone like you
to call my Dora Paapa. 🫶

Inka chala memories create cheyyali.
Inka chala navvali.
Inka chala irritate cheskovali 😂.
Inka chala random moments undali.

And most importantly...

Nuv happy ga undali. ❤️

So on your 20th birthday,
I just want to wish you one thing...

May you get everything
your heart is wishing for.

May you achieve everything
you are working for.

May you always have reasons to smile.

And whenever life gets difficult,
just remember...

You are stronger than you think,
more special than you realize,
and definitely more loved than you know. ❤️

Happy 20th Birthday once again,
Dora Paapa 🎂❤️

Stay happy.
Stay crazy.
Stay the same annoying person
I've somehow become so attached to. 😂🫣

Lots and lots of love,

Jaswanth ❤️`;

export default function Finale() {
  const [text, setText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);
        }, 1000);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="finale-page">

      {/* Confetti */}
      {finished && (
        <Confetti
          recycle={false}
          numberOfPieces={350}
        />
      )}

      {/* Fireworks */}
      {finished && (
        <Fireworks
          options={{
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.3,
            particles: 120,
          }}
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
      )}

      {/* Title */}
      <motion.h1
        className="final-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ❤️ The Final Letter ❤️
      </motion.h1>

      {/* Letter */}
      <motion.div
        className="letter-box"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <pre>{text}</pre>
      </motion.div>

      {/* Birthday Message */}
      <AnimatePresence>
        {finished && (
          <motion.div
            className="birthday-message"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            🎉 Happy 21st Birthday Ragini ❤️ 🎉
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replay */}
      <Link
        to="/"
        className="home-btn"
      >
        🔄 Replay Journey
      </Link>

    </section>
  );
}