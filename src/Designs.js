import React, { useState } from 'react';
import './Designs.css';

function Designs() {
  const [selected, setSelected] = useState(null);

  const designProjects = [
    { title: "Logo Tasarımı", type: "image", src: process.env.PUBLIC_URL + "/PanbenLogo.png", description: "Çanta markasının logosu." },
    { title: "Logo Tasarımı", type: "image", src: process.env.PUBLIC_URL + "/DenemeLogo.png", description: "" },
    {title: "Instagram Post", type: "image", src: process.env.PUBLIC_URL + "/fallCollection.png", description: ""},
    {title: "Instagram Post", type: "image", src: process.env.PUBLIC_URL + "/crochetsale.png", description: ""},
    { title: "Poster Tasarımı", type: "image", src: process.env.PUBLIC_URL + "/etkinlikk.png", description: "Etkinlik posteri tasarımı." },
    {title: "Poster Tasarımı", type: "image", src: process.env.PUBLIC_URL + "/etkinlik2.png", description: "Etkinlik posteri tasarımı."},
    { title: "Tasarım Videosu", type: "video", src: process.env.PUBLIC_URL + "/video1.mp4", description: "" },
    { title: "Instagram Post", type: "image", src: process.env.PUBLIC_URL + "/PanbenPost.png", description: "" },
    
  ];

  return (
    <div className="designs">
      <h2>Tasarım Projelerim</h2>
      <div className="design-grid">
        {designProjects.map((design, index) => (
          <div className="design-card" key={index} onClick={() => setSelected(design)}>
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
