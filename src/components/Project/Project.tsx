import React from "react";
import classes from './Project.module.scss'
import Project_card from '../ProjectCard/Project_card';
import { Col, Row } from "antd";
import { Heading } from "./Project.styled";

function Project() {
  return <div className={classes.parent}>
      <Heading className={classes.heading}>Project</Heading>
    <Row gutter={[4, 16]}>
      <Col span={10} offset={2}>

        <Project_card title="Chat.io" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>
      <Col span={10} offset={2}>
        <Project_card title="Office-management" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>
      <Col span={10} offset={2}>

        <Project_card title="Decoration" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>
      <Col span={10} offset={2}>

        <Project_card title="Furniture" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>
      <Col span={10} offset={2}>

        <Project_card title="Rent" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>
      <Col span={10} offset={2}>

        <Project_card title="Mapper" description="text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" technology="React+Typescript" />
      </Col>

    </Row>

  </div>;
}

export default Project;
