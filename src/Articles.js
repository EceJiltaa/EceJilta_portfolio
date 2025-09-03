import React from 'react';
import './Articles.css';

function Articles() {
  const articles = [
    {
        title: "Bitirme Projesi - Temassız Kalp Atış Hızı Ölçme",
        file: "/BitirmeProjesi.pdf"
    },
    {
        title: "Web Tabanlı Saldırıları Önleme Sistemi",
        file: "/WebTabanliSaldirilariOnlemeSistemi.pdf"
    },
    {
        title: "Sorting Algorithms: Quick Sort & Insertion Sort  ",
        file: "/SortingAlgorithmsQuickSortInsertionSort.pdf"
    },
    {
        title: "Rootkit Saldırısı Tespiti ve Önlemi",
        file: "/RootkitSaldirisiTespitveOnlem.pdf"
    }
  ];

  return (
    <div className="articles">
      <h2>Raporlar / Makaleler</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="article-item">
            <span className="article-title">{article.title}</span>
            <a
              href={article.file}
              target="_blank"
              rel="noopener noreferrer"
              className="article-button"
            >
              Dosyayı Aç
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
