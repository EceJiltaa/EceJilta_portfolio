import React from 'react';
import './Articles.css';
import { useTranslation } from 'react-i18next';

function Articles() {
  const { t } = useTranslation();

  const articles = [
    {
      title: t("articles.items.bitirme.title"),
      file: process.env.PUBLIC_URL + "/BitirmeProjesi.pdf"
    },
    {
      title: t("articles.items.saldiri.title"),
      file: process.env.PUBLIC_URL + "/WebTabanliSaldirilariOnlemeSistemi.pdf"
    },
    {
      title: t("articles.items.sorting.title"),
      file: process.env.PUBLIC_URL + "/SortingAlgorithmsQuickSortInsertionSort.pdf"
    },
    {
      title: t("articles.items.rootkit.title"),
      file: process.env.PUBLIC_URL + "/RootkitSaldirisiTespitveOnlem.pdf"
    }
  ];

  return (
    <div className="articles">
      <h2>{t("articles.title")}</h2>

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
              {t("articles.button")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;