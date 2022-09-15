import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import './portofolio.css'

const Portofolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const upadatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(upadatedItems);
  }

  return (
    <section className="work container section" id='portofolio'>
      <h2 className="section__title">Skills</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem("Language")}>Language</span>
        <span className="work__item" onClick={() => filterItem("Framework")}>Framework</span>
        <span className="work__item" onClick={() => filterItem("DBMS")}>DBMS</span>
        {/* <span className="work__item" onClick={() => filterItem("Branding")}>Branding</span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category } = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portofolio