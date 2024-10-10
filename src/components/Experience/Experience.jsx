import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaBook } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <VerticalTimeline lineColor={ 'black' }>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'RGB(96, 165, 250)', color: '#000000' }}
      contentArrowStyle={{ borderRight: '7px solid  RGB(96, 165, 250)' }}
      date="Avril 2024 - Août 2024"
      iconStyle={{ background: 'RGB(96, 165, 250)', color: '#020000' }}
      icon={<MdCardTravel />}
    >
      <h3 className="vertical-timeline-element-title">Stage TP CDA : Atelier Pizza</h3>
      <h4 className="vertical-timeline-element-subtitle">Lille</h4>
      <p>
      Développement
      d’une application e-commerce pour une pizzeria,
      développement du back en Quarkus et développement du front
      en next.js, stage en vu d’obtenir un TP CDA
      </p>
    </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'RGB(96, 165, 250)', color: '#000000' }}
      contentArrowStyle={{ borderRight: '7px solid  RGB(96, 165, 250)' }}
      date="Mars 2023 - Juillet 2023"
      iconStyle={{ background: 'RGB(96, 165, 250)', color: '#020000' }}
      icon={<FaCar />}
    >
      <h3 className="vertical-timeline-element-title">Incubateur 1 formation = 1
      job</h3>
      <h4 className="vertical-timeline-element-subtitle">Lille</h4>
      <p>
      Montée en compétence sur React et Java, avec le développement de l'application de covoiturage
      Happy Road
      </p>
    </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'RGB(96, 165, 250)', color: '#000000' }}
      contentArrowStyle={{ borderRight: '7px solid  RGB(96, 165, 250)' }}
      date="Novembre 2019 - Janvier 2020 / Août- Septembre 2020"
      iconStyle={{ background: 'RGB(96, 165, 250)', color: '#020000' }}
      icon={<FaBook />}
    >
      <h3 className="vertical-timeline-element-title">Vendeur libraire</h3>
      <h4 className="vertical-timeline-element-subtitle">Limoges</h4>
      <p>
        Vendeur libraire en CDD pour renfort pour l'été et les fêtes de fin d'année.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'RGB(96, 165, 250)', color: '#000000' }}
      contentArrowStyle={{ borderRight: '7px solid  RGB(96, 165, 250)' }}
      date="Juillet 2017 - Juillet 2019"
      iconStyle={{ background: 'RGB(96, 165, 250)', color: '#020000' }}
      icon={<FaBook />}
    >
      <h3 className="vertical-timeline-element-title">Apprentissage en librairie</h3>
      <h4 className="vertical-timeline-element-subtitle">Limoges</h4>
      <p>
        Apprentissage en librairie pour apprendre le métier de vendeur libraire.
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
  )
}
