import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdCardTravel } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";

export default function Formation() {
  return (
    <VerticalTimeline lineColor={"black"}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "RGB(96, 165, 250)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  RGB(96, 165, 250)" }}
        date="Août 2023 - Août 2024"
        iconStyle={{ background: "RGB(96, 165, 250)", color: "#020000" }}
        icon={<MdCardTravel />}
      >
        <h3 className="vertical-timeline-element-title">TP CDA à AFPA </h3>
        <h4 className="vertical-timeline-element-subtitle">Lille</h4>
        <p>TP CDA à AFPA, diplôme acquis</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "RGB(96, 165, 250)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  RGB(96, 165, 250)" }}
        date="2016 - Septembre 2021 - février 2022"
        iconStyle={{ background: "RGB(96, 165, 250)", color: "#020000" }}
        icon={<MdCardTravel />}
      >
        <h3 className="vertical-timeline-element-title">
          Formation développeur web
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Lille</h4>
        <p>Formation développeur web, à la Wild Code School de Lille</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "RGB(96, 165, 250)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  RGB(96, 165, 250)" }}
        date="2016 - 2019"
        iconStyle={{ background: "RGB(96, 165, 250)", color: "#020000" }}
        icon={<MdCardTravel />}
      >
        <h3 className="vertical-timeline-element-title">Diplôme BP Libraire</h3>
        <h4 className="vertical-timeline-element-subtitle">Paris</h4>
        <p>
          Diplôme BP Libraire, à L'INFL (Institut National De Formation de La
          Librairie)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "RGB(96, 165, 250)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  RGB(96, 165, 250)" }}
        date="2016"
        iconStyle={{ background: "RGB(96, 165, 250)", color: "#020000" }}
        icon={<MdCardTravel />}
      >
        <h3 className="vertical-timeline-element-title">
          Séjour de 6 mois en Angleterre
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Folkestone</h4>
        <p>
          Séjour de 6 mois en Angleterre à l'école SES (école de langue pour
          étranger) à Folkestone
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "RGB(96, 165, 250)", color: "#000000" }}
        contentArrowStyle={{ borderRight: "7px solid  RGB(96, 165, 250)" }}
        date="2015"
        iconStyle={{ background: "RGB(96, 165, 250)", color: "#020000" }}
        icon={<MdCardTravel />}
      >
        <h3 className="vertical-timeline-element-title">
          Diplôme d’analyste-programmeur niveau 5
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Arras</h4>
        <p>
          Obtention du diplôme d’analyste-programmeur niveau 5, de l’école
          Exia.cesi d’Arras
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
