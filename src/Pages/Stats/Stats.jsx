import { useEffect, useState } from "react";


/* =========================
   COUNTER COMPONENT
========================= */

const Counter = ({ end, suffix }) => {

  const [count, setCount] = useState(0);


  useEffect(() => {

    let current = 0;

    const duration = 1500;

    const steps = 60;

    const increment = end / steps;

    const intervalTime = duration / steps;


    const timer = setInterval(() => {

      current += increment;


      if (current >= end) {

        current = end;

        clearInterval(timer);

      }


      setCount(Math.floor(current));

    }, intervalTime);


    return () => clearInterval(timer);

  }, [end]);


  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
};


/* =========================
   STATS COMPONENT
========================= */

const Stats = () => {

  const stats = [
    {
      number: 200,
      suffix: "+",
      label: "Happy Clients",
    },

    {
      number: 500,
      suffix: "+",
      label: "Campaigns Finished",
    },

    {
      number: 95,
      suffix: "%",
      label: "Client Retention",
    },

    {
      number: 10,
      suffix: "+",
      label: "Years Experience",
    },
  ];


  return (
    <section className="stats">

      {stats.map((stat, index) => (

        <div
          className="stat-card"
          key={index}
        >

          <Counter
            end={stat.number}
            suffix={stat.suffix}
          />

          <p>
            {stat.label}
          </p>

        </div>

      ))}

    </section>
  );
};

export default Stats;