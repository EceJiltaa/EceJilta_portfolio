import React, { useState } from 'react';
import './Designs.css';

function Designs() {
  const [selected, setSelected] = useState(null);

  const designProjects = [
    { title: "Logo Tasarımı", type: "image", src: "/PanbenLogo.png", description: "Çanta markasının logosu." },
    { title: "Logo Tasarımı", type: "image", src: "/DenemeLogo.png", description: "" },
    {title: "Instagram Post", type: "image", src: "/fallCollection.png", description: ""},
    {title: "Instagram Post", type: "image", src: "/crochetsale.png", description: ""},
    { title: "Poster Tasarımı", type: "image", src: "/etkinlikk.png", description: "Etkinlik posteri tasarımı." },
    {title: "Poster Tasarımı", type: "image", src: "/etkinlik2.png", description: "Etkinlik posteri tasarımı."},
    { title: "Tasarım Videosu", type: "video", src: "/video1.mp4", description: "" },
    { title: "Instagram Post", type: "image", src: "/PanbenPost.png", description: "" },
    
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
