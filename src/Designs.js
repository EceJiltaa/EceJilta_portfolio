import React, { useState } from 'react';
import './Designs.css';
import { useTranslation } from 'react-i18next';

function Designs() {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const designProjects = [
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/pizzaoclock.png",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/KonkursPune.png",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/FreeFastDelivery.jpeg",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/FresketNxehteShijshme.jpeg",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/IChefSearch.jpeg",
      description: ""
    },
    {
      title: t("designs.items.video.title"),
      type: "video",
      src: process.env.PUBLIC_URL + "/VisualDesigner.mp4",
      description: ""
    },
    {
      title: t("designs.items.flower.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/flowerbag.png",
      description: ""
    },
    {
      title: t("designs.items.flower.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/PanbenPostYellowBag.jpeg",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/pizzaphone.png",
      description: ""
    },
    {
      title: t("designs.items.video.title"),
      type: "video",
      src: process.env.PUBLIC_URL + "/SpicyPizza.mp4",
      description: ""
    },
    {
      title: t("designs.items.pizza.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/IftarMenu.png",
      description: ""
    },
    {
      title: t("designs.items.panbenStory.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/PanbenStoryJapaneseBag.jpeg",
      description: ""
    },
    {
      title: t("designs.items.panbenLogo.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/PanbenLogo.png",
      description: t("designs.items.panbenLogo.desc")
    },
    {
      title: t("designs.items.denemeLogo.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/DenemeLogo.png",
      description: ""
    },
    {
      title: t("designs.items.fall.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/fallCollection.png",
      description: ""
    },
    {
      title: t("designs.items.crochet.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/crochetsale.png",
      description: ""
    },
    {
      title: t("designs.items.poster1.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/etkinlikk.png",
      description: t("designs.items.poster1.desc")
    },
    {
      title: t("designs.items.poster2.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/etkinlik2.png",
      description: t("designs.items.poster2.desc")
    },
    {
      title: t("designs.items.video.title"),
      type: "video",
      src: process.env.PUBLIC_URL + "/video1.mp4",
      description: ""
    },
    {
      title: t("designs.items.korean.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/Korean1.png",
      description: ""
    },
    {
      title: t("designs.items.korean.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/Korean2.png",
      description: ""
    },
    {
      title: t("designs.items.korean.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/Korean3.png",
      description: ""
    },
    {
      title: t("designs.items.korean.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/Korean4.png",
      description: ""
    },
    {
      title: t("designs.items.panbenPost.title"),
      type: "image",
      src: process.env.PUBLIC_URL + "/PanbenPost.png",
      description: ""
    }
  ];

  return (
    <div className="designs">
      <h2>{t("designs.title")}</h2>

      <div className="design-grid">
        {designProjects.map((design, index) => (
          <div
            className="design-card"
            key={index}
            onClick={() => setSelected(design)}
          >
            {design.type === "image" ? (
              <img src={design.src} alt={design.title} />
            ) : (
              <video src={design.src} muted loop />
            )}

            <h3>{design.title}</h3>

            {design.description && <p>{design.description}</p>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          {selected.type === "image" ? (
            <img src={selected.src} alt={selected.title} />
          ) : (
            <video src={selected.src} controls autoPlay />
          )}
        </div>
      )}
    </div>
  );
}

export default Designs;